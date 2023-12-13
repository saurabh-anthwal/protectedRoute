import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../../redux/features/cartSlice";

const Cartitems = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((el) => (
          <div
            key={el._id}
            className="grid grid-cols-4 my-4 bg-[#171515] p-3 rounded-lg  items-center"
          >
            <div>
              <img
                src={el.product_photo}
                alt=""
                className="h-[60px] w-[60px] rounded-full"
              />
            </div>
            <h1>{el.product_name}</h1>
            <h1>${el.price}</h1>
            <button onClick={() => removeItem(el._id)}>remove</button>
          </div>
        ))
      ) : (
        <div>
          <h1>No Items in Cart</h1>
          <button onClick={() => navigate("/")}>start Browsing</button>
        </div>
      )}
    </div>
  );
};

export default Cartitems;
