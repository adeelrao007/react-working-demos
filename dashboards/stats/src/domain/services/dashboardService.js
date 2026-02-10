import * as dashboardApi from '../../api/dashboard';

export function fetchStats() {
  return dashboardApi.getStats();
}

export function fetchRevenueData() {
  return dashboardApi.getRevenueData();
}

export function fetchCustomersData() {
  return dashboardApi.getCustomersData();
}

export function fetchTopProducts() {
  return dashboardApi.getTopProducts();
}
