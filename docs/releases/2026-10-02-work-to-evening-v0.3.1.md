# Work-to-Evening v0.3.1 · preparation · 2026-10-02

## Goal and classification

Draft implementation supporting the Notion October goal: five Persona A users complete a five-minute Ruhe session with Julian's voice and are interviewed. This maintenance version preserves the Opening and v0.3 path; it does not claim research completion or v0.4 validation.

## Changes

- Fixed five-minute entry; natural arrival, 17 complete 4/4 cycles from 1:30 to 3:46, natural landing and return.
- One elapsed-time clock for timer, breath cues, Aperture and progress; pause freezes the current pose without CSS transitions.
- Hidden-document/page-hide auto-pause and explicit return control.
- Focus moves to each screen heading; 44px SVAC/change targets; check-in skip on every input screen; fresh reset clears all values.
- Neutral additional reflection option and visible, nonclinical safety copy before start.
- Static original-audio adapter with duration/error handling; source null until Julian records. Starts visibly without voice.
- New timing regressions, mobile Chromium/WebKit browser checks and dependency-audit gate.
- All 35 old Notion references migrated to current HALE workspace; four relevant sources added.

## Validation record

- 17 affected existing Notion pages updated and refetched; historical records and child pages preserved.
- Context gate logic exercised in tool runtime: 39 sources and five boot files pass; full npm still pending.
- Four pure clock/method scenarios exercised in tool runtime: pause/resume, delayed callbacks, duration clamp, phase boundaries and method isolation passed.
- Full `npm run check`, fresh dependency audit and browser matrix: **pending**; no terminal/build environment is exposed in this session.
- GitHub CI, exact candidate preview and actual iPhone product acceptance: **pending**.
- Production remains `6cf1e77` / v0.2 until a validated authorized merge.
- No human recording, interviews, expert safety review or participant commitments are fabricated.

## Recording integration

1. Julian reviews the script on the existing Notion session page and records three takes.
2. Use only his selected original voice recording; no third-party background track. Export a static audio file of 300 seconds. Start 4/4 at 90 seconds, end at 226 seconds, return at 270 seconds.
3. Place the reviewed recording under `public/audio/`; set `RUHE_AUDIO_SRC` in `app/session-audio.ts` to its project path.
4. Align voice counts to complete eight-second cycles. A duration outside 300 ± 1 seconds disables voice and shows a resumable silent fallback.
5. Test real iPhone play, pause, interruption, background/lock, rejected playback, missing file and completion before inviting participants. Background pauses intentionally; auto-resume is not assumed.

## Human outcomes still needed

Recording/editorial review by 11 October; integration and five recruitment commitments by 18 October; tests/interviews by 25 October; analysis and v0.4 decision by 1 November. Recruitment and interviews remain Julian's actions. The invitation, consent, questions and anonymized note template are already in the canonical test-round page.
