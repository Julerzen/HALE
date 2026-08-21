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
7. distinct, image-led practice room with the opening aperture;
8. value-free reflection.

## Implemented in this candidate

- Six neutral 0–10 inputs: activation, valence, safety, vitality, autonomy, connectedness.
- Session-local state only; skip path remains available.
- Continuous activation–valence point without named or good/bad zones.
- Four-axis SVAC radar with an explicit screen-reader description.
- Five voluntary directions: Ruhe, Klarheit, Aktivierung, Verbindung, and Nur wahrnehmen.
- One honest prototype session rather than a fictional content catalogue.
- Immersive pre-session player with duration selection and a dominant start action.
- A separate post-start practice room with a full-screen original background, repeated HALE Aperture, timer, progress, pause/resume, close, method disclosure, and reflection.
- 4-in/4-out coherence is restricted to Ruhe and labeled provisional.
- Other directions expose a neutral player test and state that their method is not yet defined.
- Original generated HALE background plus original CSS atmosphere; no third-party image, audio, video, poetry, or copied layout.

## Visual hypothesis

Grounded Pulse v0.3 carries the dark threshold mood through the journey and introduces warm sand, linen, travertine, smoked-wood, and clay-like material cues. It is inspired by the feeling of tactile Bali interiors, not by culturally specific symbols or copied decorative objects. Geist typography remains in use. This is a hypothesis, not approved CI.

The post-start player tests a less brown-heavy extension in charcoal, smoky olive, muted mauve-grey, mineral linen, and one restrained amber light. Its original architectural threshold is stored at `public/images/hale-evening-threshold-v1.webp`. The supplied reference screenshot informs only full-bleed atmosphere, quiet information hierarchy, and progressive disclosure; its lantern scene, precise composition, icons, frequency display, and controls are not reused.

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
- Pressing the start action opens a visually distinct full-screen practice room rather than continuing on the pre-session detail screen.
- The practice room visibly reuses the two-sided HALE Aperture from the opening and keeps text readable over the original background.
- Pause/resume holds the timer, the progress indicator remains accurate, details are accessible, and short iPhone heights can scroll without clipped controls.
- Ruhe is the only direction showing the provisional coherence method.
- Klarheit and Aktivierung never claim to have a tailored method in this release.
- No content is clipped by iPhone safe areas at small viewport heights.

## Engineering evidence

Passed locally on 2026-08-21:

- `npm run context:check` — 35 canonical Notion sources and five boot files verified;
- strict TypeScript check — passed;
- optimized Next.js production build — passed;
- local HTTP render — `GET /` returned 200 with the expected v0.3 opening and metadata.
- Vercel Preview build — READY;
- deployed interactive browser flow — opening, skip path, complete check-in, matrix, SVAC radar, desired direction, overview, player, timer, pause, reflection, and back-value preservation passed;
- method boundary — Klarheit showed an explicitly open method while Ruhe alone showed provisional 4-in/4-out coherence;
- app-origin browser errors and warnings — none observed.

Still required before merge:

- a fresh Vercel preview and deployed browser-flow check for the post-start practice room;
- iPhone product acceptance.

## Player refinement · 21 August 2026

- Reconciled the supplied player screenshot with the existing HALE Design System, Inspiration Library, User Journey, Safety Standard, draft PR, and production deployment.
- Generated and visually inspected an original portrait architectural-threshold asset; compressed project copy is 941 × 1672 WebP.
- Reused one HALE Aperture component in both opening and practice so the motif is structurally consistent rather than merely similar.
- Kept the activation, clarity, connection, and observation methods explicitly open; no frequency display or unsupported effect claim was introduced.
- `npm run check` passed locally after the refinement.
- Local browser automation was unavailable because the packaged browser executable is absent; the deployed preview remains the required browser-verification surface before iPhone acceptance.

## Merge state

Do not merge this candidate to `main` until the user explicitly approves the exact preview and commit from their iPhone. A merge may trigger the Vercel production deployment.
