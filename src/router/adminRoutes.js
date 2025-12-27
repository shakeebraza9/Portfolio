import AdminLayout from '@/layouts/admin/AdminLayout.vue'
import AdminDashboard from '@/views/admin/AdminDashboard.vue'

export const adminRoutes = [
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: '', component: AdminDashboard },
    ]
  }
]
