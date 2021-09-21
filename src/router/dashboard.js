const dashboard = [
  {
    path: '/dashboard/statistics',
    name: 'dashboard-statistics',
    component: () => import('@/views/dashboard/statistics/Statistics.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dashboard/analytics',
    name: 'dashboard-analytics',
    component: () => import('@/views/dashboard/analytics/Analytics.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default dashboard
