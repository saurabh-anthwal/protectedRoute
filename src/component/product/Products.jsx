import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import { getProducts } from "../../redux/features/productSlice";
import Loader from "../ui/Loader";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);
  const addCart = (el) => {
    dispatch(addToCart(el));
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5 ">
      {isLoading && <Loader />}
      {products &&
        products.length > 0 &&
        products.map((el) => (
          <div key={el._id} className=" bg-gray-800 rounded-md">
            <img src={el.product_photo} alt="" className="h-[250px] w-full" />
            <div className="px-4 flex justify-between">
              <h1 className="text-xl my-3 font-semibold">{el.product_name}</h1>
              <h1 className="my-3">
                <span className="font-bold my-3">Price: </span>${el.price}
              </h1>
            </div>
            <button onClick={() => addCart(el)}>Add to Cart</button>
          </div>
        ))}
    </div>
  );
};

export default Products;
