import { Admin, Auth, User } from "./layouts";
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminRoute, AuthRoute, GuestRoute } from "./utils";

import { Dashboard, Category, Product, Account, EditCategory, AddCategorry } from "./pages/admin"

import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={
          <AuthRoute>
            <AdminRoute>
              <Admin />
            </AdminRoute>
          </AuthRoute>
        }>

          <Route path="" element={<Navigate to="/admin/home" />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="category" element={<Category />} />
          <Route path="category/add" element={<AddCategorry />} />
          <Route path="category/:id" element={<EditCategory />} />
          <Route path="product" element={<Product />} />
          <Route path="product/add" element={<AddProduct />} />
          <Route path="product/:id" element={<EditProduct />} />

          <Route path="account" element={<Account />} />

        </Route>

        <Route path="/auth/*" element={
          <GuestRoute>
            <Auth />
          </GuestRoute>
        } />

        <Route path="/user" element={
          <AuthRoute>
            <User />
          </AuthRoute>
        } />

        <Route path="/" element={<Navigate to="/auth/sign-in" />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}


export default App
