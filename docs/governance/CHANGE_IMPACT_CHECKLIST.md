# HALE change impact checklist

Use this checklist for every material change. A checked list records review; it does not turn a hypothesis into a decision.

## 0. Start and authority

- [ ] `AGENTS.md`, manifest, handoff, and decision register read
- [ ] affected canonical Notion pages fetched
- [ ] current `main`, open PRs, and relevant deployment inspected
- [ ] no unresolved source conflict
- [ ] change classified: Inspiration / Hypothesis / Draft / Decision / Implemented

## 1. Strategy

- [ ] foundation, positioning, promise, scope, and roadmap impact checked
- [ ] rationale recorded in the existing Notion page
- [ ] persona or journey assumption still labeled correctly

## 2. Brand and design

- [ ] Brand Bible and decision status checked
- [ ] logo, color, typography, components, motion, audio, and interaction states checked
- [ ] accessibility and reduced-motion behavior checked
- [ ] provisional CI is not presented as approved

## 3. Product surfaces

- [ ] app and website
- [ ] App Store / Play Store
- [ ] social, email, video, and audio covers
- [ ] documents and presentations
- [ ] retreats, events, products, and packaging

## 4. Content, safety, privacy, and rights

- [ ] editorial guidance and session taxonomy
- [ ] safety language, contraindications, and evidence/claims
- [ ] privacy, analytics, retention, and consent
- [ ] copyright, license, attribution, and asset provenance
- [ ] public-use and attention-sensitive contexts

## 5. Engineering and operations

- [ ] data model, APIs, analytics, and integrations
- [ ] tests, types, accessibility, and production build
- [ ] `npm run context:check` and `npm run check`
- [ ] preview and Vercel status verified
- [ ] handoff, manifest, decision register, and PR description updated

## 6. Deployment and merge authorization

- [ ] explicit instruction received in the current conversation
- [ ] instruction originates from the user's iPhone; if ambiguous, stopped and asked
- [ ] review threads and required checks are clear
- [ ] `main` merge treated as a production deployment trigger

## 7. Close the loop

- [ ] Notion and GitHub agree
- [ ] superseded variants removed, closed, or clearly deprecated
- [ ] decision/change logged with date and rationale
- [ ] weekly review can see the change and any remaining risk

## Review record · v0.3 immersive practice-player refinement · 2026-08-21

**Classification:** Draft implementation of D-020 (Hypothesis). Not approved CI, not approved for `main`, and not approved for production.

- [x] Boot files, affected Notion pages, current `main`, draft PR #6, review threads, GitHub status, and Vercel state inspected
- [x] No source conflict found; production remains on `6cf1e77`
- [x] Reference screenshot separated into reusable principles and excluded distinctive elements
- [x] Asset provenance and rights checked: original generated HALE asset, no third-party photo or UI asset shipped
- [x] Method and claim boundary checked: Ruhe alone retains provisional 4-in/4-out; other methods remain open
- [x] Accessibility reviewed: decorative image alt, contrast overlays, 44+ px controls, progress semantics, reduced motion, safe areas, and scroll fallback
- [x] Context gate, strict TypeScript, and optimized production build passed locally
- [x] Fresh Vercel preview for implementation commit `5dae602` is READY (`dpl_4JYv98r3iBrtUcbEqdCtNwKnmDBa`)
- [x] Deployed mobile browser flow for implementation commit `5dae602` is verified: Ruhe and Aktivierung reached the practice room, pause held the timer, disclosure opened, the original background loaded, and no app-origin browser errors were observed
- [ ] iPhone product acceptance is passed for the exact new PR head
- [ ] Explicit merge and production authorization is received for that exact commit

## Review record · v0.3 one-shot Aperture prelude · 2026-08-22

**Classification:** Draft implementation of D-022 (Hypothesis), aligned with the D-021 image-world decision. Not yet approved for `main` or production.

- [x] Boot files, affected Notion pages, current `main`, draft PR #6, review threads, GitHub status, and Vercel production/preview state inspected
- [x] AC4 Warm Horizon, AC1 Horizon, Brand Bible, Brand Decision Log, Design System, User Journey, Information Architecture, Breathe with Sandy analysis, and accessibility guidance reconciled
- [x] Scope checked: one-shot fresh-load prelude only; the accepted v0.3 path after the start screen remains unchanged
- [x] Brand guardrail checked: Aperture plus central seam, graphite depth, indirect warm light, no visible sun, circle portal, copied reference asset, or orange-brown wash
- [x] Accessibility reviewed: the visual is decorative, screen readers receive a short status, underlying controls are disabled/hidden during the prelude, and reduced motion removes the camera pull
- [x] Explicit current-chat request received from the user on iPhone to prepare deployment and merge
- [x] Context gate, strict TypeScript, and optimized production build passed locally
- [ ] Fresh Vercel preview for the exact new PR head is READY
- [ ] Deployed mobile browser flow and animation frames for the exact new PR head are verified
- [ ] iPhone product acceptance is passed for the exact new PR head after seeing the preview
- [ ] Explicit post-preview merge confirmation is recorded for that exact commit
- [ ] Production deployment and post-deploy smoke/error checks are verified
