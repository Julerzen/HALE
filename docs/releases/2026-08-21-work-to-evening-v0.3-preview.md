# Work to Evening v0.3 preview candidate

Status: Draft / preview candidate — not approved for `main` or production  
Date: 2026-08-21  
Acceptance device: user's iPhone

## Release goal

Repair the failed v0.2 iPhone product acceptance by making the complete core journey visible before choosing or evaluating tailored practices:

1. one-shot Aperture prelude;
2. existing atmospheric start screen;
3. optional activation–valence plus SVAC check-in;
4. matrix and radar snapshot;
5. desired direction;
6. curated overview;
7. dedicated player;
8. distinct, image-led practice room with the opening aperture;
9. value-free reflection.

## Implemented in this candidate

- Six neutral 0–10 inputs: activation, valence, safety, vitality, autonomy, connectedness.
- Session-local state only; skip path remains available.
- Continuous activation–valence point without named or good/bad zones.
- Four-axis SVAC radar with an explicit screen-reader description.
- Five voluntary directions: Ruhe, Klarheit, Aktivierung, Verbindung, and Nur wahrnehmen.
- One honest prototype session rather than a fictional content catalogue.
- Immersive pre-session player with duration selection and a dominant start action.
- A separate post-start practice room with a full-screen original background, repeated HALE Aperture, timer, progress, pause/resume, close, method disclosure, and reflection.
- A one-shot opening prelude on a fresh load: no visible copy, wordmark, button, pulse ring, or dashboard—only the Aperture and central seam; the surfaces open, the virtual camera rises into the seam once, and the existing start screen is then revealed.
- A reduced-motion path with no zoom or camera pull and a short static dissolve.
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

- A fresh load begins with only the Aperture and light seam; no start-screen copy or control is visible before the transition.
- The Aperture is clearly legible before one short, smooth center pull enters the seam; one intentional full-screen light bloom completes the hand-off without a blank frame, strobe, jerk, or accidental loop.
- With iOS Reduce Motion enabled, the zoom/pull is absent and the static dissolve does not delay access.
- Opening feels like a threshold and transitions reliably.
- Check-in can be completed in roughly 30–60 seconds or skipped.
- Sliders are comfortable to use; all values remain visible when navigating back.
- Matrix and radar are understandable, neutral, and legible.
- Desired direction is clearly separate from current-state measurement.
- Overview reads as curated rather than as a settings dashboard.
- Player hierarchy, timing, pause, close, and reflection work.
- Pressing the start action opens a visually distinct full-screen practice room rather than continuing on the pre-session detail screen.
- The practice room visibly reuses the two-sided HALE Aperture from the opening and keeps text readable over the original background.
- The enlarged Aperture occupies the visual center, the play/pause control is dominant and centered below it, and the original background is visibly about 20% brighter than the rejected preview.
- Method, status, and progress sit at the bottom. “Zwischenraum”, the session description, and the method note are absent from the default practice view and appear only when “Über diese Session” is expanded upward.
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

Verified for implementation commit `5dae60241b8e5a581be19bf17dc3424d317dee18`:

- Vercel preview deployment `dpl_4JYv98r3iBrtUcbEqdCtNwKnmDBa` reached READY;
- deployed mobile-width flow reached the practice room from both Ruhe and Aktivierung;
- the original full-bleed background and repeated HALE Aperture loaded;
- pause held the timer, the details disclosure opened, and the activation route showed `Methodik noch offen` plus `Natürlich atmen`;
- no app-origin browser errors were observed. Browser-extension metadata warnings were excluded from the app result.

Still required before merge: iPhone product acceptance for the exact final PR head. A documentation-only follow-up may move the head without changing the verified implementation; its preview must still be READY before the iPhone link is handed over.

## Player refinement · 21 August 2026

- Reconciled the supplied player screenshot with the existing HALE Design System, Inspiration Library, User Journey, Safety Standard, draft PR, and production deployment.
- Generated and visually inspected an original portrait architectural-threshold asset; compressed project copy is 941 × 1672 WebP.
- Reused one HALE Aperture component in both opening and practice so the motif is structurally consistent rather than merely similar.
- Kept the activation, clarity, connection, and observation methods explicitly open; no frequency display or unsupported effect claim was introduced.
- `npm run check` passed locally after the refinement.
- Local browser automation was unavailable because the packaged browser executable is absent; the deployed preview was therefore verified in the connected cloud browser before iPhone acceptance.

## Opening prelude refinement · 22 August 2026

- Reconciled the new request with AC4 Warm Horizon, AC1 Horizon, the Brand Bible, Brand Decision Log, Design System, Breathe with Sandy analysis, User Journey, Information Architecture, accessibility guidance, draft PR #6, and production state.
- The first visible frame contains only the HALE Aperture and its narrow light seam.
- The two surfaces open over one deliberate cycle; a single upward camera pull enters the seam and reveals the unchanged v0.3 start screen underneath.
- The color treatment shifts away from the earlier brown cast toward graphite, mineral mushroom, linen light, and restrained warmth.
- No audio, third-party asset, circular portal, visible sun, explanatory copy, or new claim is introduced.
- This is a motion hypothesis inside the selected image-world direction, not approval of the final logo geometry or full CI.
- `npm run check` passed locally on 22 August 2026 after the code and context updates.
- Implementation commit `2c709b2875b65625c2e7893b166ee03a86c98673` reached READY on Vercel preview deployment `dpl_2BXdSbudD8YMUG93L25Pm5jbn5Sx`.
- Deployed mobile-width browser verification captured the icon-only first frame, progressive Aperture opening, accelerated upward/forward seam pull, and clean hand-off to an enabled start screen.
- The exact deployed code continued through check-in entry, skip path, direction, overview, dedicated player, and a running practice room with a decrementing timer.
- No app-origin browser errors were observed; browser-extension metadata errors were excluded from the app result.

## iPhone acceptance iteration 2 · 22 August 2026

- The exact prior preview head `4d7c2b3a073689d8a7ec461150eb4d2583fea38d` did **not** pass iPhone product acceptance. Its READY deployment remains historical technical evidence only.
- The intro timing is reduced from 5.2 seconds to approximately 3.4 seconds. Intermediate scale checkpoints replace the late jump so the pull accelerates continuously into the exact center seam.
- AC4 Warm Horizon now appears in the intro as quiet graphite architecture, a restrained lower horizon, mineral surfaces, and indirect linen light; the Aperture remains the only semantic foreground object.
- One full-screen light bloom completes the transition. It is a single fade, not a strobe; iOS Reduce Motion receives no zoom or flash.
- In the practice room the original project-owned background is presented at roughly 20% higher brightness, the Aperture is substantially larger and centered, and play/pause becomes the dominant centered control.
- The former static “Zwischenraum” block is removed from the default view. Title, description, and method note now live in “Über diese Session”, which opens upward from the bottom information area.
- Method, status, and progress move below the controls. Safe close, finish, pause/resume, timer semantics, method boundaries, and short-height scrolling remain intact.
- This iteration is D-023/D-024 draft implementation. It is neither final motion/CI nor approved for `main` or production until the exact new preview passes on the user's iPhone.
- `npm run check` passed after code and context reconciliation: 35 Notion sources, five boot files, strict TypeScript, and optimized Next.js build.
- Implementation commit `72fdfcb99654ba3b9c6f360528ee45a6584a0e91` reached READY on Vercel preview deployment `dpl_12Kneq84vRi4XzZL2gY1eirMSn7i`; GitHub's Vercel status and HALE context workflow succeeded and no review threads remain open.
- Deployed intro sampling confirmed continuous scale progression from 0.88 through 1.16, 1.48, 3.62, 4.86, 8.84, and 13.13 before reveal; the single full-screen bloom rose once to 0.98 opacity and then dissolved. The opening stayed hidden and disabled during the prelude and became enabled after hand-off.
- Deployed practice measurements confirmed a 172 × 282 centered Aperture, an 88 × 88 play/pause control centered within five pixels of the screen centerline, the bottom information stack, and an initially closed 50-pixel disclosure whose 196-pixel content opens above its summary.
- Pause held the timer at 8:20 for the verification interval and resume advanced it to 8:19. The activation route retained `Methodik noch offen` and `Natürlich atmen`; Ruhe alone retained provisional 4-in/4-out.
- Vercel reported no runtime errors. No app-origin browser errors were observed; Vercel-login, Google identity, and browser-extension messages were excluded from the app result.
- The affected Design System, User Journey, Quality, Implementation Plan, and Weekly Review pages were synchronized in Notion.

## Merge state

Do not merge this candidate to `main` until the user explicitly approves the exact preview and commit from their iPhone. A merge may trigger the Vercel production deployment.
