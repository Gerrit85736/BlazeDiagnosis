# Blaze POS MVP

Blaze POS is a white-label SaaS platform for vehicle service stations, mechanics, customers, parts suppliers, and platform administrators.

This repository is an MVP starter scaffold for the vertical slice:

Tenant -> Auth -> Customer -> Vehicle -> Job Card -> Quote -> Customer Approval -> Parts Request -> Supplier Response -> Invoice -> Notification -> Audit Log

## Current scaffold status

The root-level `frontend/` app has been consolidated into `apps/web`. Reusable UI lives in `apps/web/src/components`, and reusable web utilities live in `apps/web/src/lib`.


Implemented in this starter:

- pnpm workspace layout
- Next.js App Router structure
- TypeScript strict configuration
- Tailwind CSS v4-style global import
- shadcn/ui-compatible component paths
- Drizzle ORM PostgreSQL configuration
- Domain-split database schema files
- Tenant-aware service function skeletons
- Authorization guard skeletons
- Core quote approval and labor recalculation pure functions
- Dashboard route placeholders for customer, station, supplier, and platform admin
- Documentation for remaining MVP features and functions

Not implemented yet:

- Production authentication provider
- Real session persistence
- Database migrations generated from Drizzle Kit
- File storage provider
- Email/SMS/WhatsApp delivery adapters
- Payment gateway integration
- Production deployment configuration

## Prerequisites

- Node.js 20.9 or newer
- pnpm
- PostgreSQL

## Setup

```bash
pnpm install
cp apps/web/.env.example apps/web/.env.local
pnpm --filter @blaze-pos/web db:generate
pnpm --filter @blaze-pos/web db:migrate
pnpm dev
```

## Workspace scripts

```bash
pnpm dev
pnpm build
pnpm lint
pnpm format
pnpm typecheck
```

## Documentation map

- `docs/00-implementation-sequence.md` - recommended build order
- `docs/01-mvp-status-tracker.md` - module checklist
- `docs/02-feature-function-backlog.md` - functions and services still needed
- `docs/03-development-standards.md` - engineering conventions
- `docs/04-acceptance-criteria.md` - MVP acceptance criteria
- `docs/05-env-and-runbook.md` - local setup and operations notes
- `docs/06-risk-register.md` - known risks and mitigations

- `docs/07-week-2-to-4-planning/WEEK_2_TO_4_MVP_DELIVERY_PLAN.md` - accelerated intern delivery plan for completing the MVP
- `docs/07-week-2-to-4-planning/MVP_SCOPE_CUTLINE.md` - must-have, should-have, and post-MVP scope control
- `docs/07-week-2-to-4-planning/STUDENT_PODS_AND_OWNERSHIP.md` - pod structure and task ownership rules
- `docs/08-github-issue-packs/WEEK_2_ISSUES.md` - GitHub issues to create for Week 2
- `docs/08-github-issue-packs/WEEK_3_ISSUES.md` - GitHub issues to create for Week 3
- `docs/08-github-issue-packs/WEEK_4_ISSUES.md` - GitHub issues to create for Week 4

- `docs/10-component-consolidation/COMPONENT_MIGRATION.md` - component/lib consolidation and migrated frontend page notes

## Architectural rule

Every tenant-owned operation must include a server-side tenant authorization check before reading or mutating data.
