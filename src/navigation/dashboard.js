export default [
  {
    path: '/dashboard/statistics',
    name: 'dashboard-statistics',
    component: () => import('@/views/dashboard/statistics/Statistics.vue'),
  },
  {
    path: '/dashboard/analytics',
    name: 'dashboard-analytics',
    component: () => import('@/views/dashboard/analytics/Analytics.vue'),
  },
]
