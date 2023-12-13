import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Header from "./component/header/Header";
import Login from "./component/login/Login";
import PrivateRoute from "./component/protectedRoute/PrivateRoute";
import OrderPage from "./pages/OrderPage";
const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="max-w-[1200px] mx-auto mt-4">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <CartPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/order"
              element={
                <PrivateRoute>
                  <OrderPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
