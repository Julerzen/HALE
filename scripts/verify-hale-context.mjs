import { existsSync, readFileSync } from "node:fs";

const failures = [];
const requireCondition = (condition, message) => {
  if (!condition) failures.push(message);
};

const read = (path) => {
  requireCondition(existsSync(path), `Missing required file: ${path}`);
  return existsSync(path) ? readFileSync(path, "utf8") : "";
};

let manifest;
try {
  manifest = JSON.parse(read("config/hale-context.json"));
} catch (error) {
  failures.push(`Invalid context manifest JSON: ${error.message}`);
  manifest = {};
}

requireCondition(manifest.schemaVersion === 1, "Unsupported or missing schemaVersion");
requireCondition(manifest.project?.name === "HALE", "Project name must be HALE");
requireCondition(manifest.project?.spelling === "H-A-L-E", "Project spelling must be H-A-L-E");
requireCondition(manifest.project?.defaultBranch === "main", "Binding branch must be main");
requireCondition(manifest.authority?.conflictPolicy === "stop_and_surface", "Conflict policy must stop and surface drift");
requireCondition(manifest.governance?.parallelContextHubsAllowed === false, "Parallel context hubs must remain disabled");
requireCondition(manifest.governance?.chatTranscriptIsSourceOfTruth === false, "Chat transcripts cannot be a source of truth");
requireCondition(Array.isArray(manifest.requiredBootFiles), "requiredBootFiles must be an array");
requireCondition(Array.isArray(manifest.notionSources) && manifest.notionSources.length >= 8, "Canonical Notion source registry is incomplete");

for (const path of manifest.requiredBootFiles ?? []) read(path);

const handoff = read("docs/HALE_IMPLEMENTATION_CONTEXT.md");
const agents = read("AGENTS.md");
const decisions = read("docs/governance/DECISION_REGISTER.md");
const packageJson = JSON.parse(read("package.json") || "{}");

for (const source of manifest.notionSources ?? []) {
  requireCondition(source.pageId && source.url, `Notion source ${source.key ?? "unknown"} lacks an ID or URL`);
  if (source.requiredInHandoff) {
    requireCondition(handoff.includes(source.url), `Handoff does not link canonical Notion source: ${source.key}`);
  }
}

for (const phrase of [
  "Mandatory boot protocol",
  "stop and surface",
  "iPhone",
  "Grounded Pulse",
  "npm run check"
]) {
  requireCondition(`${agents}\n${handoff}`.toLowerCase().includes(phrase.toLowerCase()), `Required governance phrase is missing: ${phrase}`);
}

for (const id of ["D-001", "D-002", "D-007", "D-012", "D-016"]) {
  requireCondition(decisions.includes(id), `Decision register is missing ${id}`);
}

requireCondition(packageJson.scripts?.["context:check"] === "node scripts/verify-hale-context.mjs", "package.json must expose context:check");
requireCondition(packageJson.scripts?.check, "package.json must expose the full check command");

if (failures.length) {
  console.error("HALE context gate failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`HALE context gate passed: ${manifest.notionSources.length} canonical Notion sources and ${manifest.requiredBootFiles.length} boot files verified.`);
