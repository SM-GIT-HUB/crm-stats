import { Route, Routes } from "react-router-dom"

import OverviewPage from "./pages/OverviewPage"

import Sidebar from "./components/Sidebar"
import ProductsPage from "./pages/ProductsPage"
import UsersPage from "./pages/UsersPage"
import SalesPage from "./pages/SalesPage"
import OrdersPage from "./pages/OrdersPage"
import AnalyticsPage from "./pages/AnalyticsPage"
import SettingsPage from "./pages/SettingsPage"
import { Toaster } from "react-hot-toast"

function App() {
  
  return (
    <>
      <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
        
        <Sidebar/>

        <Routes>
          <Route path="/" element={<OverviewPage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/users" element={<UsersPage/>}/>
          <Route path="/sales" element={<SalesPage/>}/>
          <Route path="/orders" element={<OrdersPage/>}/>
          <Route path="/analytics" element={<AnalyticsPage/>}/>
          <Route path="/settings" element={<SettingsPage/>}/>
        </Routes>

        <Toaster />
      </div>
    </>
  )
}

export default App
