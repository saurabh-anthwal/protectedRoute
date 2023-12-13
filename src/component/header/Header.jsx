import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { isLogin } = useSelector((state) => state.isAuth);
  return (
    <div className=" bg-zinc-900">
      <div className="max-w-[1200px] mx-auto py-5 flex justify-between">
        {" "}
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="flex gap-5 uppercase">
          <Link to="/">Home</Link>
          {!isLogin && <Link to="/login">Login</Link>}
          {isLogin && (
            <>
              <Link to="/cart">
                Cart
                <span className="text-sm text-white">({cartItems.length})</span>
              </Link>
              <Link to="/order">Orders</Link>
              <button onClick={() => {}}>Logout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
