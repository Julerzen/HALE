# HALE ChatGPT project setup

Status: operational procedure  
Last reconciled: 2026-08-21

This procedure closes the gap between repository-aware Codex work and ordinary chats inside the HALE ChatGPT project.

## Connected project sources

The HALE ChatGPT project should contain or connect:

1. the canonical HALE Operating System in Notion;
2. the private `Julerzen/HALE` GitHub repository, with `main` as the binding branch;
3. durable source files that are important for future analysis.

Project chats can share project instructions and connected Sources. Repository `AGENTS.md` is automatically discovered by Codex when it works in the repository, but it is not a substitute for ChatGPT project instructions in a general chat.

## Project instruction text

Use this as the HALE project instruction:

> This is the HALE project (H-A-L-E). Before answering a request that relies on project state, retrieve the HALE Operating System from Notion and the current repository handoff on GitHub `main` (`AGENTS.md`, `config/hale-context.json`, `docs/HALE_IMPLEMENTATION_CONTEXT.md`, and `docs/governance/DECISION_REGISTER.md`). Distinguish Inspiration, Hypothesis, Draft, Decision, and Implemented. If durable sources disagree, surface the conflict instead of choosing silently. Do not create parallel context hubs. Explain work in beginner-friendly language while maintaining professional product, design, engineering, safety, privacy, accessibility, evidence, and rights standards. Do not initiate GitHub merge or Vercel deployment unless I explicitly instruct it in the current chat from my iPhone.

## New-chat opening request

If a new chat appears to lack project context, start with:

> Lade zuerst den aktuellen HALE-Handoff aus GitHub `main` und das HALE Operating System aus Notion. Nenne mir danach in fünf Punkten: verbindliche Entscheidungen, offene Hypothesen, aktueller Prototypstand, Konflikte und den nächsten sicheren Schritt.

## Limitation and control

No file can force an unrelated chat outside the HALE project to retrieve these sources. The control is the combination of project Sources/instructions, repository `AGENTS.md`, the Notion Operating System, the weekly drift audit, and the checked-in recovery documents.
