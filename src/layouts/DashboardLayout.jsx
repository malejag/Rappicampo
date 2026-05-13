import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import Navbar from '../components/Navbar.jsx'

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-campo-50/40 lg:flex">
      <Sidebar />
      <div className="min-w-0 flex-1">
        <div className="lg:hidden">
          <Navbar />
        </div>
        <main className="container-page py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
