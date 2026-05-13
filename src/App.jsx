import { Route, Routes, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import Home from './pages/Home.jsx'
import LoginRegister from './pages/LoginRegister.jsx'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import OrderSuccess from './pages/OrderSuccess.jsx'
import OrderTracking from './pages/OrderTracking.jsx'
import ChatPage from './pages/ChatPage.jsx'
import ClientDashboard from './pages/ClientDashboard.jsx'
import StoreDashboard from './pages/StoreDashboard.jsx'
import DeliveryDashboard from './pages/DeliveryDashboard.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import NotFound from './pages/NotFound.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="/pedido-exitoso" element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
        <Route path="/seguimiento" element={<ProtectedRoute><OrderTracking /></ProtectedRoute>} />
        <Route path="/chat" element={<ChatPage />} />
      </Route>

      <Route path="/panel" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route index element={<Navigate to="/panel/cliente" replace />} />
        <Route path="cliente" element={<ProtectedRoute allowedRoles={["cliente"]}><ClientDashboard /></ProtectedRoute>} />
        <Route path="tienda" element={<ProtectedRoute allowedRoles={["tienda"]}><StoreDashboard /></ProtectedRoute>} />
        <Route path="repartidor" element={<ProtectedRoute allowedRoles={["repartidor"]}><DeliveryDashboard /></ProtectedRoute>} />
        <Route path="admin" element={<ProtectedRoute allowedRoles={["admin"]}><AdminDashboard /></ProtectedRoute>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
