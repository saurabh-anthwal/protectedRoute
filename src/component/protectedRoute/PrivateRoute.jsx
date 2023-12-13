import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isLogin } = useSelector((state) => state.isAuth);
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
