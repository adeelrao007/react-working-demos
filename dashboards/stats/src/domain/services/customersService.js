import * as customersApi from '../../api/customers';

export function fetchNewCustomers() {
  return customersApi.getNewCustomers();
}
