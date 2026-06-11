# Blaze POS Coding Instructions

## Product context

Blaze POS is a tenant-first SaaS application for vehicle service stations. Keep customer-facing, station-facing, supplier-facing, and platform-admin surfaces separate.

## Coding standards

- Use TypeScript strict mode.
- Use single quotes.
- Keep pages thin.
- Put reusable business logic in `src/features/*/services` or `src/server/*`.
- Put reusable UI in `src/components`.
- Put domain-specific UI in `src/features/*/components`.
- Never trust a client-provided `tenantId`.
- Every tenant-owned query must include tenant scope.
- Use server-side authorization checks for all mutations.
- Keep customer-visible data serializers separate from internal serializers.
- Default sensitive notes, files, and supplier data to internal visibility.
