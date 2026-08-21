# HALE repository instructions

These instructions apply to the entire repository and to every agent working on HALE.

## Mission and communication

Build **HALE** (H-A-L-E) as a coherent, accessible, evidence-aware breathwork product. Explain decisions in beginner-friendly language while maintaining professional product, brand, design, engineering, safety, and documentation standards.

Never use Hail or HAIL as the project name.

## Mandatory boot protocol

Before product, UX, content, design-system, data, deployment, or merge work:

1. Read `config/hale-context.json`.
2. Read `docs/HALE_IMPLEMENTATION_CONTEXT.md`.
3. Read `docs/governance/DECISION_REGISTER.md` and the affected repository documents.
4. When the Notion connector is available, fetch the affected canonical Notion pages listed in the context manifest. Do not rely on one chat transcript.
5. Inspect the current `main`, open pull requests, and relevant Vercel deployment before writing.
6. If sources materially disagree, stop and surface the conflict. Never silently choose one.

Run `npm run context:check` after any context or governance change.

## Source-of-truth model

- **Notion:** strategy, rationale, research, inspiration, decisions, content planning, and human-readable specifications.
- **GitHub `main`:** technically binding implementation, tests, tokens, components, assets, repository governance, and recovery handoff.
- **ChatGPT project:** collaboration, teaching, reviews, and planning. A chat transcript alone is never a durable source of truth.

A change is complete only when the affected source surfaces agree. Reuse the existing HALE Operating System and repository files; do not create parallel context hubs.

## Status vocabulary

Always distinguish:

1. Inspiration
2. Hypothesis
3. Draft
4. Decision
5. Implemented

Do not present an inspiration, hypothesis, or prototype as final HALE CI or product truth.

## Change close-out

For every material change:

- classify its status;
- update product behavior, tokens, components, content, or tests as affected;
- update `docs/HALE_IMPLEMENTATION_CONTEXT.md` when the handoff changes;
- add or amend the decision register when a decision becomes binding;
- update the relevant existing Notion page with rationale;
- run the change-impact checklist;
- remove or explicitly deprecate superseded variants.

## Product and brand principles

- Spiritual depth without dogma.
- Scientific care without clinical coldness.
- Premium quality without artificial status or exclusion.
- Artistic expression without sacrificing usability.
- Digital wellbeing over manipulative engagement.
- Safety before intensity or marketing impact.
- Genuine user benefit before feature count.
- Situation-first language instead of wellness platitudes.

The current Grounded Pulse visual system and HALE aperture are prototype hypotheses, not approved final CI.

## Safety, privacy, accessibility, and rights

- Do not make unsupported medical, therapeutic, or physiological claims.
- Flag contraindications, high-intensity practices, public-use contexts, and attention-sensitive environments for expert review.
- Never position intensive breathwork for driving, water, machinery, or situations requiring full attention.
- Use accessible contrast, large touch targets, screen-reader text, and reduced-motion behavior.
- Treat check-in values as session-local by default. Persistence requires an explicit product and privacy decision; raw values must not enter third-party analytics.
- Treat third-party poems, quotations, translations, music, visuals, and brand references as inspiration until rights are verified. Attribution alone is not permission.

## Deployment and merge authorization

- Local work and non-deploying analysis may be prepared without a release instruction.
- Do not initiate a Vercel preview, production deployment, GitHub merge, or another action that triggers deployment unless the user explicitly requests it in the current conversation from their iPhone.
- If the device context is unavailable or ambiguous, ask before initiating the deployment or merge.
- A merge to `main` is a production action because Vercel Git integration may deploy it automatically.
- Before any authorized deployment or merge, complete `docs/governance/CHANGE_IMPACT_CHECKLIST.md`, run `npm run check`, inspect review threads and checks, and update the PR and handoff.

## Working rhythm

Prepare for the weekly Sunday review and planning cycle. Favor three to five achievable outcomes. The recurring cross-source audit should feed the Sunday 20:00 Europe/Berlin review.
