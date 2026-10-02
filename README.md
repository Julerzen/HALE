# HALE

HALE is a mobile-first, evidence-aware breathwork product. This repository state is **Work-to-Evening v0.3.1** for the October five-person learning round. AC4 Warm Horizon is the selected master image world; final logo and full CI remain in development.

## Start here

Read [AGENTS.md](./AGENTS.md), [the context manifest](./config/hale-context.json), [the current handoff](./docs/HALE_IMPLEMENTATION_CONTEXT.md), [the decision register](./docs/governance/DECISION_REGISTER.md), and [the change checklist](./docs/governance/CHANGE_IMPACT_CHECKLIST.md). Notion owns strategy and rationale; GitHub main owns binding implementation.

## Verification

```bash
npm ci
npm run check
npm audit --audit-level=high
npm install --no-save --package-lock=false @playwright/test@1.63.0
npx playwright install --with-deps chromium webkit
npm run test:browser
```

## Current scope

A five-minute Ruhe prototype, optional session-local check-in, neutral visualizations, direction selection, and an immersive player. Runtime: Next.js 16.3.8 with audited PostCSS 8.5.23/sharp 0.35.5 dependencies. The player uses elapsed time, freezes time and motion on pause, and pauses when the app becomes hidden. Julian's recording is still missing; the current session starts without voice. Add reviewed, project-owned static audio only through `app/session-audio.ts`.

Supabase/accounts, additional methods and further Opening/logo polish are deferred. No raw check-in analytics or storage. Human interviews and expert safety review are outstanding. Deployment remains subject to the current-chat device-context rule in AGENTS.md.

See [release preparation](./docs/releases/2026-10-02-work-to-evening-v0.3.1.md) and [the document map](./docs/README.md).
