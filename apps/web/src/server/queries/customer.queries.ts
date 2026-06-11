import { searchCustomers } from '@/features/customers/services/customer.service';
import { requireTenantContext } from '@/lib/tenancy/tenant-context';

export async function getCustomerSearchResults(query: string) {
  const tenant = await requireTenantContext();
  return searchCustomers(tenant.tenantId, query);
}
