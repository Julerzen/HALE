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
- [ ] Fresh Vercel preview for the new PR head is READY
- [ ] Deployed mobile browser flow for the new PR head is verified
- [ ] iPhone product acceptance is passed for the exact new PR head
- [ ] Explicit merge and production authorization is received for that exact commit
