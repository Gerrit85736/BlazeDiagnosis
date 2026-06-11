import { AppShell } from '@/components/common/app-shell';
import { MvpShowcase } from '@/components/dashboard/mvp-demo';

export default function StationShowcasePage() {
  return (
    <AppShell surface="station" title="MVP component showcase">
      <MvpShowcase />
    </AppShell>
  );
}
