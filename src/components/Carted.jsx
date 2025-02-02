import { MdOutlineClose } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { useEffect, useState } from "react";
import { getLocalStorage, removeCartedStrorage } from "../utility/index";
import { useCart } from "./ContectApi";
import selectedProduct from "../assets/selectedProduct.jpg";
import { BeatLoader } from "react-spinners";
import success from "../assets/Group.png";
import { useNavigate } from "react-router-dom";

const Carted = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [isActive, setActive] = useState(false);
  const { removeToCart, removeToWishlist } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const addedByCartProduct = getLocalStorage();
    const productPrice = addedByCartProduct.reduce(
      (sum, currenValue) => sum + (currenValue.price || 0),
      0
    );
    setCount(productPrice);
    setProducts(addedByCartProduct);
    setLoading(false);
  }, []);

  const sortByPrice = (sortBy) => {
    const sorted = sortBy.sort((a, b) => b.price - a.price);
    setProducts(sorted);
    setActive(true);
  };
  const handleRemovedBt = (id) => {
    removeCartedStrorage(id);
    const removedCart = getLocalStorage();
    setProducts(removedCart);
    removeToCart();
  };

  const handleParches = () => {
    document.getElementById("my_modal_5").showModal();
  };

  const handleClose = () => {
    localStorage.removeItem("wishListedtProduct");
    localStorage.removeItem("cartListedProduct");

    console.log("Navigating to home");
    navigate("/");
    removeToCart();
    removeToWishlist();
  };

  return (
    <>
      <div className="lg:px-6 my-12 w-full lg:w-3/4 m-auto">
        <div className="flex gap-8 mt-6 justify-between">
          <h3 className="font-bold text-3xl">Cart</h3>
          <div className="flex gap-6 items-center">
            <p className={`font-bold text-xl`}>
              Total Prices: $ {count.toFixed(2)}
            </p>
            <button
              onClick={() => sortByPrice(products)}
              className={`border-2 border-[#9538E2] font-bold cursor-pointer px-10 py-2 rounded-3xl flex gap-2 items-center ${
                isActive ? "bg-[#9538E2]" : ""
              }`}
            >
              <span>Sort By Price</span>
              <GiSettingsKnobs />
            </button>
            <button
              onClick={handleParches}
              className="border-2 border-[#9538E2]  font-bold cursor-pointer px-10 py-2 rounded-3xl"
            >
              Purchase
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center my-8">
            <BeatLoader />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-8">
            <img src={selectedProduct} alt="" />
          </div>
        ) : (
          products.map((product) => (
            <div
              className="flex items-center mt-8 rounded-2xl bg-base-100 shadow-sm transition delay-100 duration-300 ease-in-out hover:scale-105"
              key={product.product_id}
            >
              <div className="w-3/4 flex items-center gap-8">
                <img
                  className="rounded-xl w-[50%]"
                  src={product.product_image}
                  alt="image"
                />
                <div>
                  <h3 className="text-3xl font-bold">
                    {product.product_title}
                  </h3>
                  <p className="text-[#a2a2a2]">{product.description}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
              <div
                onClick={() => handleRemovedBt(product.product_id)}
                className="w-1/4 flex justify-end mr-14"
              >
                <MdOutlineClose className="border-2 border-red-600 text-red-600 rounded-full text-3xl cursor-pointer" />
              </div>
            </div>
          ))
        )}

        <dialog id="my_modal_5" className="modal  text-center sm:modal-middle">
          <div className="modal-box m-auto">
            <img className="py-8 m-auto" src={success} alt="" />
            <h3 className="font-bold text-lg">Payment Successfully</h3>
            <p className="py-4">Thanks for purchasing.</p>
            <p className="py-4">Total Prices: ${count}</p>
            <div className="w-full">
              <button
                onClick={handleClose}
                className="btn w-full text-center rounded-3xl"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Carted;
