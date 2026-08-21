# HALE

HALE is a mobile-first, evidence-aware breathwork product in active development. The current implementation is an interactive **Work-to-Evening v0.2** vertical slice; its Grounded Pulse visual direction is a hypothesis, not the final CI.

## Start here

Every agent and contributor must begin with:

1. [`AGENTS.md`](./AGENTS.md)
2. [`config/hale-context.json`](./config/hale-context.json)
3. [`docs/HALE_IMPLEMENTATION_CONTEXT.md`](./docs/HALE_IMPLEMENTATION_CONTEXT.md)
4. [`docs/governance/DECISION_REGISTER.md`](./docs/governance/DECISION_REGISTER.md)
5. [`docs/governance/CHANGE_IMPACT_CHECKLIST.md`](./docs/governance/CHANGE_IMPACT_CHECKLIST.md)

The human-readable strategy and rationale live in the existing Notion HALE Operating System. GitHub `main` is binding for implementation. Material conflicts must be surfaced and reconciled.

## Local verification

```bash
npm ci
npm run check
npm run dev
```

## Current boundaries

- No final logo, palette, typography, audio identity, or CI is approved.
- Supabase is planned only and is not connected.
- Third-party music, poetry, and visual references require verified rights before production use.
- Deployment and merge require an explicit current-chat instruction from the user on their iPhone.

See [`docs/README.md`](./docs/README.md) for the full document map.
