import * as ordersApi from '../../api/orders';

export function fetchPendingOrders() {
  return ordersApi.getPendingOrders();
}
