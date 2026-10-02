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

**Version of this repository state:** v0.3.1, a silent five-minute Ruhe prototype supporting the October learning round. The v0.3 Opening, optional six-value check-in, matrix/radar, five directions, overview, pre-player, practice room and reflection are included. The Opening remains unchanged; no further visual polish or logo decision is part of this release.

**Release path:** [PR #6](https://github.com/Julerzen/HALE/pull/6) integrates this state into main; Vercel publishes main at https://hale-eosin.vercel.app. Recover the exact current commit from the main ref and match it against Vercel metadata. Latest production/deployment checkpoints are recorded in the existing Notion Operating System and Weekly Review. The last baseline before this release was v0.2 / `6cf1e77`; that is historical, not the version of this repository state.

**Authorization:** Julian commissioned publication, reviewed prepared commit `4934777`, then explicitly confirmed in the current conversation: “Ich arbeite am IPhone und gebe es frei!” The device-context condition is satisfied; routine security/release fixes remain within that assignment. This records release authorization, not a fabricated manual VoiceOver or human research test.

**Practice:** a fixed 300-second timeline: natural breathing 0–90 s, 17 complete 4/4 cycles 90–226 s, natural landing and return 226–300 s. One elapsed clock drives time, phase, motion and progress. Pause freezes the pose; hidden document/page-hide pauses guidance until conscious resume. Other directions stay explicitly method-open.

**Accessibility/privacy:** focus moves to each new heading; SVAC/change targets are at least 44 px; check-in can be skipped on every input step; a fresh run clears all six values, completion, direction and reflection. Back-navigation within the same check-in retains values. Reduced-motion practice is static. No backend, raw-value analytics or persistence.

**Dependencies:** Next.js 16.3.8, React 19.2.8, Geist 1.7.0. The fresh first audit identified one critical and two high vulnerabilities in Next.js/PostCSS/sharp. The targeted Next.js update regenerated the exact lock in CI, resolving PostCSS to 8.5.23 and sharp to 0.35.5. The patched graph passes the audit. No `npm audit fix --force`; no temporary lock generator remains in the final workflow.

**Validation:** patched CI run [37025198612](https://github.com/Julerzen/HALE/actions/runs/37025198612) passed full npm context/test/TypeScript/build, the dependency audit and six mobile Chromium/WebKit tests. The final workflow also checks the background-pause scenario (eight mobile tests total) and repeats the same browser journey against the public production URL on main pushes. Implementation head `1e4c64f` passed the full eight-case gate in [run37025912784](https://github.com/Julerzen/HALE/actions/runs/37025912784), with zero vulnerabilities and a READY exact-SHA preview serving HTTP200/version0.3.1. Every final head must pass its own checks; consult GitHub status for the exact current head. No prior rejected August head is reclassified.

**Audio:** Julian confirmed that no recording exists yet. `app/session-audio.ts` keeps the source null; the visible start says “Ohne Stimme starten”. A reviewed project-owned 300-second static recording can be activated through that adapter. Audio timing/error handling is prepared; actual voice/iPhone playback must still be verified once the recording exists. No fake recording or synthetic replacement is provided.

**Sources:** 39 sources point to the fetched HALE Notion workspace (the original 35 migrated, plus home, Persona A, scripts and test round). Twenty affected existing pages were updated/refetched. Old connector page IDs are superseded. The Perplexity attachment body was not read and is not used as evidence.

**Binding October goal:** five Persona A people test the five-minute Ruhe session with Julian's voice around 17:00, followed by interviews. Recording by 11 October, integration/recruitment by 18 October, sessions by 25 October, analysis and v0.4 decision by 1 November. Logo finalization, Supabase/accounts and additional methods are deferred. This release is technical preparation, not a completed or validated research round.

**Brand:** Inner Architecture (B-008), AC4 Warm Horizon master and AC1 Horizon companion (B-011) are selected. Final logo geometry, type, tokens, icons and full CI remain unfinished. The historically duplicated Prelude B-012 is disambiguated as B-MOTION-001.

**Human work outstanding:** original recording/editorial review, actual voice playback and VoiceOver checks, expert safety review, participant commitments, sessions, interviews and analysis. No participant results or expert endorsement are asserted.

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
