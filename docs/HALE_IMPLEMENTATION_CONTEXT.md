# HALE implementation context

Status: binding cross-chat implementation handoff  
Last reconciled: 2026-08-21  
Binding implementation branch: `main` after the approved integration merge

## Purpose

This is the repository entry point for every HALE implementation, deployment, and merge. Together with `AGENTS.md`, the machine-readable manifest, and the decision register, it allows a new chat or agent to recover the current state without relying on transcript memory.

## Mandatory start

1. Read `AGENTS.md` and `config/hale-context.json`.
2. Read this handoff and `docs/governance/DECISION_REGISTER.md`.
3. Fetch the affected canonical Notion pages.
4. Inspect current `main`, open PRs, and the relevant Vercel deployment.
5. Classify the work as inspiration, hypothesis, draft, decision, or implemented.
6. Stop and surface any material source conflict before changing the product.

Run `npm run context:check` after context changes and `npm run check` before an authorized deployment or merge.

## Source-of-truth model

- **Notion:** strategy, rationale, research, inspiration, decisions, content planning, and human-readable specifications.
- **GitHub `main`:** technically binding implementation, tests, tokens, assets, governance, and recovery handoff.
- **ChatGPT project:** collaboration, teaching, reviews, and planning. A chat transcript is not a durable source.

When a decision affects both strategy and implementation, Notion and GitHub must agree before it is marked implemented. Do not create another HALE context hub.

## Canonical Notion sources

- [HALE Operating System](https://app.notion.com/p/3c346ad5a7ba8150b629d1a69f9bb266)
- [HALE Foundation Brief v0.3](https://app.notion.com/p/3c346ad5a7ba815baf99e786398ddac5)
- [HALE Implementation Plan](https://app.notion.com/p/3c346ad5a7ba81cc8b56d520a64a46d6)
- [Design System](https://app.notion.com/p/3c346ad5a7ba813c97c4f0f9537db505)
- [Information Architecture](https://app.notion.com/p/3c346ad5a7ba819a8a5af9860171bcd9)
- [User Journeys](https://app.notion.com/p/3c346ad5a7ba8135b8a3dd13c7a945f6)
- [State check-in specification](https://app.notion.com/p/3c346ad5a7ba8138bf0ee64079e49bba)
- [Inspiration Library](https://app.notion.com/p/3c346ad5a7ba814e86c9c3eb9fb90597)
- [Safety & Claims](https://app.notion.com/p/3c346ad5a7ba81a69e5df899aa2bcb24)

The exact IDs and machine roles are mirrored in `config/hale-context.json`.

## Cross-chat availability

Codex automatically discovers a repository-root `AGENTS.md` when it works in the repository. Normal ChatGPT project chats instead rely on the project's instructions and connected Sources. Therefore:

- keep the HALE Operating System and GitHub repository connected to the ChatGPT project Sources;
- use the boot text in `docs/governance/CHATGPT_PROJECT_SETUP.md` as the project instruction;
- save important raw files in an approved durable project source and log their analysis in the existing Notion Inspiration Library;
- never assume an attachment available in one chat is available in every future chat.

This separation is intentional: it is the honest technical boundary between project-chat memory, Notion, and repository automation.

## Current implementation status

The integrated system contains:

- a mobile-first interactive Work-to-Evening vertical slice;
- an original HALE opening aperture made from two breathing surfaces and a central light seam;
- choices for Ruhe, Klarheit, or Energie;
- a 5- or 10-minute entry, functional timer, pause state, and value-free reflection;
- a provisional Grounded Pulse v0.2 visual hypothesis;
- automated repository context validation, type checking, and production build;
- a Vercel Git integration where merging `main` may trigger production.

Not yet implemented or approved:

- final logo, colors, typography, icon system, motion system, or audio identity;
- the complete activation–valence plus SVAC check-in;
- a final content library, session taxonomy, or immersive player;
- a Supabase connection or approved database schema;
- licensed production music or third-party poetry.

Never describe these items as complete.

## Required experience sequence

1. **Threshold** — short transition out of everyday UI.
2. **Arrival** — an original HALE sign breathes, pulses, or opens.
3. **State check-in** — optional, low-friction, body-near questions.
4. **Orientation** — neutral snapshot of current state.
5. **Desired direction** — calm, clarity/focus, energy, connection, or observation.
6. **Discovery** — visually curated overview.
7. **Immersion** — selected content opens into a dedicated session room.
8. **Practice** — interface recedes while the session leads.
9. **Reflection** — value-free observation and an open return to life outside the app.

## State check-in: activation–valence plus SVAC

The user may call this the “SWAG analysis”; the canonical implementation name is **activation–valence plus SVAC**. It is optional and should take roughly 30–60 seconds.

Inputs use 0–10 scales for activation, valence, safety, vitality, autonomy, and connectedness. The result is a continuous activation–valence matrix plus a four-axis SVAC radar. Copy stays neutral: no diagnosis, inferred emotion, good/bad zones, score, streak, or optimization pressure.

Raw values remain session-local by default. Persistence requires an explicit product and privacy decision, and raw values must not enter third-party analytics. The full interaction and acceptance criteria live in the Notion specification.

## Reference hierarchy

- **Opening:** learn from the threshold feeling of Breathe with Sandy, but do not copy its sea, concentric circles, assets, or standard in-app dashboard.
- **Overview/navigation:** use Anima SoundScape Lab as a reference for hierarchy, scenario-led entry, atmospheric content cards, and progressive disclosure—not its assets, exact layout, typography, icons, or unsupported claims.
- **Player:** explore an original full-screen HALE room with strong readability, one dominant start action, subordinate controls, and an interface that recedes during practice.

Melokind — “Kellermysterium” is a mood reference only. No copyrighted track may ship without a license.

## Work-to-Evening constraints

- The formal workday ends while internal work mode continues.
- Regulation/coherence is the default hypothesis; activation remains optional.
- Five minutes is the lowest-friction entry; ten minutes is the preferred first complete session.
- Language is concrete, voluntary, non-judgmental, and free of wellness buzzwords.
- The ending returns agency instead of forcing another app action.

## Non-negotiable rules

- Always spell the project name **HALE**.
- No diagnostic language or unsupported medical or physiological claims.
- No manipulative loops, guilt, streak pressure, or forced continuation.
- Mobile-first, large touch targets, strong contrast, screen-reader text, and reduced-motion support.
- Intensive practices require expert safety review and must not be positioned for driving, water, machinery, or unsafe multitasking.
- Translate inspiration into principles; do not copy third-party assets or distinctive executions.

## Deployment and merge gate

- User authorization must be explicit in the current conversation and originate from their iPhone. If device context is ambiguous, stop and ask.
- Treat a merge to `main` as a production action because Vercel may deploy it automatically.
- Complete the change-impact checklist.
- Run `npm run check` and inspect GitHub checks and review threads.
- Verify the preview and the relevant Vercel state.
- State which HALE decisions are implemented and which remain hypotheses.
- Reconcile affected Notion pages and this handoff.

## Recovery order

If a future chat lacks context, recover in this order:

1. repository `main`: `AGENTS.md`, manifest, this handoff, decision register;
2. canonical Notion pages listed above;
3. open PRs and Vercel deployment state;
4. project chat history only as supporting evidence.

Git history and the Notion version history are the backup. Superseded drafts must be closed or explicitly labeled as superseded.
