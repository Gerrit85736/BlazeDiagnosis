import { AppShell } from '@/components/common/app-shell';
import { StatCard } from '@/components/common/stat-card';

export default function PlatformDashboardPage() {
  return (
    <AppShell title="Platform admin dashboard" surface="platform">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active tenants" value="0" />
        <StatCard label="Trial tenants" value="0" />
        <StatCard label="Suspended tenants" value="0" />
        <StatCard label="Feature flags" value="0" />
      </div>
    </AppShell>
  );
}
