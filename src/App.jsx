import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import ProtectedRoute from "./protectedRoute/ProtectedRoute";

const Header = () => (
  <nav className="flex justify-evenly items-center h-16 border-b-2 border-gray-700 shadow-md shadow-slate-800 bg-slate-900">
    <Link to="/">Home</Link>
    <Link to="/admin/dashboard">Dashboard</Link>
    <Link to="/login">Login</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/myorder">My Order</Link>
    <Link to="/myblog">Blog</Link>
  </nav>
);

function App() {
  const { isAuthenticated } = useSelector((state) => state.root);
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/myblog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/myorder"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
