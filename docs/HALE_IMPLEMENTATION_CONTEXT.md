# HALE implementation context

Status: cross-chat implementation handoff  
Last reconciled: 2026-08-21  
Current prototype: [Draft PR #3 — Work to Evening v0.2](https://github.com/Julerzen/HALE/pull/3)

## Purpose

This file is the repository-level entry point for any HALE implementation, deployment, or merge. It prevents product, UX, safety, and brand decisions from being lost between ChatGPT project chats.

Before changing product behavior or visual direction:

1. Read this file.
2. Read the linked Notion sources for the affected area.
3. Classify the change as inspiration, hypothesis, draft, decision, or implemented.
4. Update both Notion and GitHub when the change becomes technically relevant.
5. Do not deploy or merge while the two sources materially disagree.

## Source-of-truth model

- **Notion:** strategy, rationale, research, inspiration, product decisions, human-readable specifications.
- **GitHub:** technically binding implementation, tests, tokens, components, and this compact handoff.
- **ChatGPT project:** collaboration context, explanation, iteration, and review.

Central Notion entry:

- [HALE Operating System](https://app.notion.com/p/3c346ad5a7ba8150b629d1a69f9bb266)
- [HALE Implementation Plan](https://app.notion.com/p/3c346ad5a7ba81cc8b56d520a64a46d6)
- [Design System](https://app.notion.com/p/3c346ad5a7ba813c97c4f0f9537db505)
- [Information Architecture](https://app.notion.com/p/3c346ad5a7ba819a8a5af9860171bcd9)
- [User Journeys](https://app.notion.com/p/3c346ad5a7ba8135b8a3dd13c7a945f6)
- [State check-in specification](https://app.notion.com/p/3c346ad5a7ba8138bf0ee64079e49bba)
- [Inspiration Library](https://app.notion.com/p/3c346ad5a7ba814e86c9c3eb9fb90597)
- [Breathe With Sandy Analysis](https://app.notion.com/p/3c346ad5a7ba8188a2e9fa1f8aa8917a)

## Release control

- [HALE Release Playbook](RELEASE_PLAYBOOK.md)
- [Release record template](releases/RELEASE_RECORD_TEMPLATE.md)
- [Current Work to Evening v0.2 record](releases/2026-08-21-work-to-evening-v0.2.md)
- Automatic gate: `.github/workflows/quality.yml`
- Pull requests use `.github/PULL_REQUEST_TEMPLATE.md` for scope, inspiration evidence, verification, and explicit approval.

A Vercel deployment with status `READY` is preview evidence only. It does not by itself make a prototype merge-ready.

## Current prototype status

Implemented in Draft PR #3:

- mobile-first interactive Work-to-Evening vertical slice
- original HALE opening portal made from two breathing vertical surfaces and a central light seam
- choice between Ruhe, Klarheit, and Energie
- 5- or 10-minute entry
- functional timer and pause state
- non-judgmental completion reflection
- provisional Grounded Pulse v0.2 visual hypothesis
- production build, TypeScript, and Vercel preview verified

The current CI remains a prototype hypothesis, not a final brand approval.

## Required experience sequence

The evolving HALE experience should remain coherent across these stages:

1. **Threshold** — a short audiovisual transition out of everyday UI.
2. **Arrival** — an original HALE sign breathes, pulses, or opens.
3. **State check-in** — optional, low-friction, body-near questions.
4. **Orientation** — a neutral visual snapshot of current state.
5. **Desired direction** — calm, clarity/focus, energy, connection, or observation.
6. **Discovery** — a visually curated overview.
7. **Immersion** — selected content opens into a dedicated session room.
8. **Practice** — interface recedes while the session leads.
9. **Reflection** — value-free observation and an open return to life outside the app.

## State check-in: activation, valence, and SVAC

The user may call this the “SWAG analysis”; the canonical implementation name is **activation–valence plus SVAC**.

The check-in is optional and should take roughly 30–60 seconds.

### Questions

- Activation: “Wie viel Energie oder innere Bewegung spürst du gerade?”
- Valence: “Wie angenehm oder unangenehm fühlt sich dein Zustand gerade an?”
- Safety: “Wie sicher und geschützt fühlst du dich gerade?”
- Vitality: “Wie lebendig und kraftvoll fühlst du dich gerade?”
- Autonomy: “Wie frei und handlungsfähig fühlst du dich gerade?”
- Connectedness: “Wie verbunden fühlst du dich gerade – mit dir, anderen oder dem Leben?”

All values use 0–10 input.

### Result

- Continuous Cartesian matrix:
  - x-axis: unpleasant to pleasant
  - y-axis: low to high activation
  - point position: `x = (valence - 5) / 5`, `y = (activation - 5) / 5`
- SVAC radar chart with four equal 0–10 axes.
- Neutral copy only; never infer a diagnosis or declare an emotion as fact.
- No good/bad zones, scores, streaks, or optimization pressure.
- Raw values remain session-local by default; persistence requires a clear product and privacy decision.
- Raw values must not be sent to third-party analytics.

The full interaction, data model, privacy rules, and acceptance criteria live in the linked Notion specification.

## Visual and UX reference hierarchy

### Opening: Breathe with Sandy principle, HALE expression

Adopt the feeling of crossing into another world through motion, sound, and minimal interface.

Do not copy:

- the sea
- the concentric pulsing circles
- the brand assets
- the standard bright in-app dashboard

The original HALE aperture in v0.2 is the current prototype answer. It may later evolve into a static and animated HALE mark.

### Overview and navigation: Anima SoundScape Lab principle

Use Anima as the stronger reference for:

- visually curated overview
- clear content hierarchy
- scenario-led entry
- large atmospheric content cards
- progressive disclosure
- transition from overview to content detail

Do not copy its assets, exact layout, typography, icons, or unsupported frequency claims.

### Session player: immersive room

A selected session should open as a full-screen atmospheric room:

- full-bleed image or motion background
- strong readability gradients
- one dominant, large start action
- title, type, and short expectation inside the scene
- secondary controls clearly subordinated
- details available without leaving the room
- controls recede after playback starts

The HALE play/start mark, motion, proportions, color, imagery, and sound must be original.

## Work-to-Evening constraints

- Primary situation: the formal workday ends while internal work mode continues.
- Regulation/coherence is the default hypothesis; activation remains optional.
- Five minutes is the lowest-friction entry; ten minutes is the preferred first complete session.
- Language is concrete, voluntary, non-judgmental, and free of wellness buzzwords.
- The ending returns agency to the user instead of forcing another app action.
- Music is central, but Melokind — “Kellermysterium” is a mood reference only. No copyrighted track may ship without a license.

## Non-negotiable product rules

- Always spell the project name **HALE**.
- No diagnostic language or unsupported medical/physiological claims.
- No manipulative engagement loops, guilt, streak pressure, or forced continuation.
- Mobile-first, large touch targets, strong contrast, screen-reader text, reduced-motion support.
- Intensive or attention-altering practices require explicit safety review and must not be positioned for driving, water, machinery, or unsafe multitasking.
- Inspiration is translated into principles; third-party assets and distinctive executions are not copied.

## Deployment and merge gate

Before deployment or merge, verify:

- [ ] this file, the release playbook, the current release record, and affected Notion pages were reviewed
- [ ] implemented status is distinguished from hypothesis or inspiration
- [ ] user flow still matches the required experience sequence
- [ ] check-in language remains optional and non-diagnostic
- [ ] visual references are translated, not copied, and have visible implementation evidence
- [ ] safety, privacy, accessibility, and rights are checked
- [ ] GitHub Quality Gate and relevant tests pass
- [ ] Vercel preview is `READY` for the exact PR head commit
- [ ] mobile core flow and browser console were checked on that preview
- [ ] PR description states what changed and which HALE decisions it implements
- [ ] known limitations and rollback path are recorded
- [ ] Notion and GitHub no longer materially disagree
- [ ] Julian explicitly approved the named PR and exact head commit

## Maintenance rule

Do not create parallel HALE context documents. Update this file and the existing Notion pages. If a new substantial specification is necessary, place it under the relevant existing domain and link it from here.
