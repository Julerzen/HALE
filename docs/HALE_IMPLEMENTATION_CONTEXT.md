# HALE implementation context

Status: binding cross-chat implementation handoff  
Last reconciled: 2026-10-02  
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

- [HALE Operating System](https://app.notion.com/p/ffa17c47346b8200b94a81754953ba54)
- [HALE Foundation Brief v0.3](https://app.notion.com/p/7c117c47346b8246a0b201ab97902ce8)
- [HALE Implementation Plan](https://app.notion.com/p/9a917c47346b8247a1a601aae92fcef1)
- [Design System](https://app.notion.com/p/bd617c47346b828a9dd901823a404ee2)
- [Information Architecture](https://app.notion.com/p/71e17c47346b837299f381727ec786e4)
- [User Journeys](https://app.notion.com/p/9dd17c47346b8352938101c148fad517)
- [State check-in specification](https://app.notion.com/p/9be17c47346b833b990c012d280a8a73)
- [Inspiration Library](https://app.notion.com/p/0f317c47346b831db31901e4a60b4f47)
- [Safety & Claims](https://app.notion.com/p/c2917c47346b835cbeb201d7fff02c0e)
- [Technical Architecture](https://app.notion.com/p/dd117c47346b82a1ac1901a17d3b0f45)
- [Weekly Reviews & Planning](https://app.notion.com/p/a9717c47346b839bb2b581a92998f907)

- [Session concepts and recording script](https://app.notion.com/p/7a817c47346b8223a3d781651916b199)
- [October test round](https://app.notion.com/p/3ed17c47346b819da0f5ddc1bdb4be0a)

The exact IDs and machine roles for the complete HALE Notion structure are mirrored in `config/hale-context.json`. The Operating System remains the canonical index; agents fetch all pages affected by the task rather than loading unrelated documents indiscriminately.

## Cross-chat availability

Codex automatically discovers a repository-root `AGENTS.md` when it works in the repository. Normal ChatGPT project chats instead rely on the project's instructions and connected Sources. Therefore:

- keep the HALE Operating System and GitHub repository connected to the ChatGPT project Sources;
- use the boot text in `docs/governance/CHATGPT_PROJECT_SETUP.md` as the project instruction;
- save important raw files in an approved durable project source and log their analysis in the existing Notion Inspiration Library;
- never assume an attachment available in one chat is available in every future chat.

This separation is intentional: it is the honest technical boundary between project-chat memory, Notion, and repository automation.

## Current implementation status · 2026-10-02

**Production:** v0.2, GitHub main `6cf1e77d49a8b879badd93c763b0db5f7d8931b1`, public URL https://hale-eosin.vercel.app. Verified READY during the October audit. It has not been upgraded by this draft.

**Existing preview:** PR #6, branch `prototype/work-to-evening-v03`, head `f34554f32cf35358f3c28728d33157f7acb99df3`. Vercel preview https://hale-goxsspey3-julerzen1.vercel.app is READY. Earlier head `4d7c2b3a` failed iPhone acceptance; current head has no recorded exact-head iPhone acceptance. Historical August checks apply to their recorded commits only.

**Next release candidate:** v0.3.1 prepares the October learning round, preserving the v0.3 Opening, optional check-in, matrix/radar, five directions, overview and immersive player. It fixes elapsed-time drift, shared timer/motion pause, background auto-pause, heading focus, 44-pixel SVAC/change targets, optional skip throughout the check-in and fresh-session reset. Ruhe uses a fixed five-minute timeline: natural breathing until 1:30, 17 complete 4/4 cycles until 3:46, natural breathing and return until 5:00. Other methods stay explicitly open.

**Audio:** Julian confirmed on 2026-10-02 that no recording exists. The candidate supports a project-owned static recording through `app/session-audio.ts`; its source remains null and the visible experience explicitly starts without voice. A silent prototype is not evidence for the voice-session research goal. No synthesized substitute, third-party track or fictional recording is supplied.

**Verification:** new Node timeline regressions and Chromium/WebKit mobile checks are prepared. Four core timing/method scenarios and the context gate logic (39 sources/five boot files) were exercised in the tool runtime; full npm, browser and dependency-audit checks remain pending until the candidate can run in CI. No new local build, dependency result, deployed browser result or human iPhone acceptance is claimed.

**Source migration:** the reconnected Notion HALE workspace exposes new page IDs. The candidate migrates the original 35 registered sources and adds project home, Persona A, session scripts and the October test round (39 total). References point to the fetched HALE workspace; the old connector IDs must not be treated as canonical.

**Binding October goal:** five Persona A people test a five-minute Ruhe session with Julian's own voice around 17:00, followed by interviews. Recording by 11 October, integration/recruitment by 18 October, sessions by 25 October, analysis and v0.4 decision by 1 November. Opening polish, logo finalization, Supabase/accounts and additional methods are deferred. v0.3.1 is preparation, not a validated v0.4.

**Brand:** Inner Architecture is selected (Notion B-008); AC4 Warm Horizon is the master image world and AC1 Horizon the companion (B-011). Finale logo geometry, type, tokens, icons and full executable CI remain unfinished. Older summaries calling these selections pending are superseded by the dated decision log, not by new visual choices.

**Release authorization:** the current user explicitly commissioned a new release and delegated implementation decisions. The repository's device-context question is pending. No preview-triggering branch movement or merge occurs until that condition is answered or explicitly overridden. Product acceptance must be recorded honestly for the concrete candidate; no prior rejected head is reclassified.

**Still outstanding:** Julian's recording and editorial review, expert safety review, five participant commitments/tests/interviews, exact-candidate product acceptance and successful automated release checks. No backend, persistence or analytics has been connected.

## Required experience sequence

1. **Threshold** — short transition out of everyday UI.
2. **Arrival** — on a fresh load, the original HALE sign opens once around its light seam and the view passes through it before the start screen appears.
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
- **Opening motion:** AC4 Warm Horizon governs the visual grammar: graphite depth, quiet architectural planes, a narrow indirect light seam, controlled opening, one short centered inward pull, and one non-strobing full-screen light bloom at hand-off. No visible sun, anatomy-first reading, circular portal, decorative loop, or orange-brown wash.
- **Overview/navigation:** use Anima SoundScape Lab as a reference for hierarchy, scenario-led entry, atmospheric content cards, and progressive disclosure—not its assets, exact layout, typography, icons, or unsupported claims.
- **Player:** explore an original full-screen HALE room with strong readability, an enlarged central breathing Aperture, one dominant centered play/pause action, and an interface that recedes during practice. Session title and explanation stay hidden inside an optional bottom disclosure; method, status, and progress remain available at the bottom. The supplied lantern-player screenshot contributes only full-bleed atmosphere, hierarchy, and progressive disclosure. Its photo, arrangement, icons, frequency display, copy, and distinctive execution are excluded.

The current generated practice background is stored as `public/images/hale-evening-threshold-v1.webp`. It is an original HALE prototype asset: a charcoal and smoky-mauve architectural threshold with restrained amber light, deliberately avoiding the reference screenshot's lantern, alley, and brown-heavy grade.

Melokind — “Kellermysterium” is a mood reference only. No copyrighted track may ship without a license.

## Work-to-Evening constraints

- The formal workday ends while internal work mode continues.
- Regulation/coherence is the default hypothesis; activation remains optional.
- For the October learning round, five minutes is the fixed entry. Ten-minute variants are deferred.
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
