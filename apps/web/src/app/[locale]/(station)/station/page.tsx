import { AppShell } from '@/components/common/app-shell';
import { StatCard } from '@/components/common/stat-card';

export default function StationDashboardPage() {
  return (
    <AppShell title="Service-station dashboard" surface="station">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Open jobs" value="12" />
        <StatCard label="Awaiting approval" value="4" />
        <StatCard label="Awaiting parts" value="3" />
        <StatCard label="Outstanding invoices" value="7" />
      </div>
    </AppShell>
  );
}
