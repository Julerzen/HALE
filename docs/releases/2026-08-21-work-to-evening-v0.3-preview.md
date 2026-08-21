# Work to Evening v0.3 preview candidate

Status: Draft / preview candidate — not approved for `main` or production  
Date: 2026-08-21  
Acceptance device: user's iPhone

## Release goal

Repair the failed v0.2 iPhone product acceptance by making the complete core journey visible before choosing or evaluating tailored practices:

1. atmospheric opening;
2. optional activation–valence plus SVAC check-in;
3. matrix and radar snapshot;
4. desired direction;
5. curated overview;
6. dedicated player;
7. practice preview;
8. value-free reflection.

## Implemented in this candidate

- Six neutral 0–10 inputs: activation, valence, safety, vitality, autonomy, connectedness.
- Session-local state only; skip path remains available.
- Continuous activation–valence point without named or good/bad zones.
- Four-axis SVAC radar with an explicit screen-reader description.
- Five voluntary directions: Ruhe, Klarheit, Aktivierung, Verbindung, and Nur wahrnehmen.
- One honest prototype session rather than a fictional content catalogue.
- Immersive player with duration selection, dominant start action, sound-development status, pause, close, timer, and reflection.
- 4-in/4-out coherence is restricted to Ruhe and labeled provisional.
- Other directions expose a neutral player test and state that their method is not yet defined.
- Original CSS atmosphere only; no third-party image, audio, video, poetry, or copied layout.

## Visual hypothesis

Grounded Pulse v0.3 carries the dark threshold mood through the journey and introduces warm sand, linen, travertine, smoked-wood, and clay-like material cues. It is inspired by the feeling of tactile Bali interiors, not by culturally specific symbols or copied decorative objects. Geist typography remains in use. This is a hypothesis, not approved CI.

## Safety, privacy, and rights

- No diagnosis, inferred emotion, performance score, streak, or medical/physiological promise.
- Check-in values are not persisted and are not sent to analytics.
- Breath copy tells the user to remain comfortable and pause when needed.
- No intensive method is introduced.
- No third-party assets or audio ship in this candidate.

## Acceptance gate

Before merge or production deployment, verify on the user's iPhone:

- Opening feels like a threshold and transitions reliably.
- Check-in can be completed in roughly 30–60 seconds or skipped.
- Sliders are comfortable to use; all values remain visible when navigating back.
- Matrix and radar are understandable, neutral, and legible.
- Desired direction is clearly separate from current-state measurement.
- Overview reads as curated rather than as a settings dashboard.
- Player hierarchy, timing, pause, close, and reflection work.
- Ruhe is the only direction showing the provisional coherence method.
- Klarheit and Aktivierung never claim to have a tailored method in this release.
- No content is clipped by iPhone safe areas at small viewport heights.

## Engineering evidence

Passed locally on 2026-08-21:

- `npm run context:check` — 35 canonical Notion sources and five boot files verified;
- strict TypeScript check — passed;
- optimized Next.js production build — passed;
- local HTTP render — `GET /` returned 200 with the expected v0.3 opening and metadata.

Still required before merge:

- automated interactive browser-flow and accessibility smoke test on the deployed preview;
- Vercel Preview READY state;
- iPhone product acceptance.

## Merge state

Do not merge this candidate to `main` until the user explicitly approves the exact preview and commit from their iPhone. A merge may trigger the Vercel production deployment.
