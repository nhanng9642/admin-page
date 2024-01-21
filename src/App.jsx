import { Admin, Auth, User } from "./layouts";
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminRoute, AuthRoute, GuestRoute } from "./utils";

import { Dashboard, Category, Product, Account } from "./pages/admin"
import NotFound from "./pages/NotFound";
import Loading from "./pages/Loading";

function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={
        <AuthRoute>
          <AdminRoute>
            <Admin />
          </AdminRoute>
        </AuthRoute>
      }>

        <Route path="" element={<Dashboard />} />
        <Route path="category" element={<Category />} />
        <Route path="product" element={<Product />} />
        <Route path="account" element={<Account />} />

      </Route>

      <Route path="/auth/*" element={
        <GuestRoute>
          <Auth />
        </GuestRoute>
      } />

      <Route path="/user/*" element={
        <AuthRoute>
          <User />
        </AuthRoute>
      } />

      <Route path="/" element={<Navigate to="/auth/sign-in" />} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
  );
}


export default App
