'use server';

import { createCustomerSchema } from '@/features/customers/schemas/customer.schema';
import { createCustomer } from '@/features/customers/services/customer.service';
import { requireTenantContext } from '@/lib/tenancy/tenant-context';

export async function createCustomerAction(formData: FormData) {
  const tenant = await requireTenantContext();
  const input = createCustomerSchema.parse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email') || undefined,
    phone: formData.get('phone') || undefined,
  });

  return createCustomer(tenant.tenantId, input);
}
