# HALE repository instructions

These instructions apply to the entire repository.

## Required context

Before product, UX, content, design-system, deployment, or merge work, read:

- [HALE implementation context](docs/HALE_IMPLEMENTATION_CONTEXT.md)
- [HALE release playbook](docs/RELEASE_PLAYBOOK.md) before preview, deployment, or merge work

When the Notion connector is available, also fetch the affected sources linked from that document. Do not rely on one chat transcript as the complete source of truth.

## Source-of-truth rule

- Notion holds strategy, rationale, research, inspiration, and human-readable product specifications.
- GitHub holds technically binding implementation, tests, tokens, components, and the repository handoff.
- Reconcile both before calling a product decision implemented.

## Working rules

- Always spell the project name **HALE**.
- Reuse existing HALE documents and components; do not create parallel context hubs.
- Preserve status distinctions: inspiration, hypothesis, draft, decision, implemented.
- Translate external inspiration into original HALE design; do not copy third-party assets or distinctive executions.
- Do not introduce diagnostic language, unsupported health claims, manipulative engagement patterns, or unlicensed content.
- Keep the experience mobile-first, accessible, privacy-conscious, and safe.
- Treat the current Grounded Pulse visual system and HALE aperture as prototype hypotheses, not final CI.

## Before deployment or merge

- Review the deployment and merge gate in `docs/HALE_IMPLEMENTATION_CONTEXT.md` and follow `docs/RELEASE_PLAYBOOK.md`.
- Create or update the current release record under `docs/releases/`.
- Confirm that the PR head, GitHub checks, and Vercel preview all refer to the same commit.
- Run the relevant build, type, test, and accessibility checks.
- Update the PR description, release record, and handoff when product behavior or design direction changes.
- Do not merge unless the user explicitly approves the named PR and exact head commit.
