import { AppShell } from '@/components/common/app-shell';
import { StatCard } from '@/components/common/stat-card';

export default function SupplierDashboardPage() {
  return (
    <AppShell title="Parts supplier dashboard" surface="supplier">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="New requests" value="5" />
        <StatCard label="Pending responses" value="2" />
        <StatCard label="Orders to dispatch" value="3" />
        <StatCard label="Delayed deliveries" value="1" />
      </div>
    </AppShell>
  );
}
