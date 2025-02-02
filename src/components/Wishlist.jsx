import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useCart } from "./ContectApi";
import selectedProduct from "../assets/selectedProduct.jpg";
import { BeatLoader } from "react-spinners";
import { getWishlist, removeWishlsstProduct } from "../utility/wishlish";

const Wishlist = () => {
  const [loading, setLoading] = useState(true);
  const [wishlistProduct, setWishlistProduct] = useState([]);
  const { removeToWishlist } = useCart();
  useEffect(() => {
    const wishlistProductAdd = getWishlist();
    setWishlistProduct(wishlistProductAdd);
    setLoading(false);
  }, []);

  const handleRemoveWishlist = (id) => {
    removeWishlsstProduct(id);
    const wishlistPr = getWishlist();
    setWishlistProduct(wishlistPr);
    removeToWishlist();
  };

  return (
    <div className="lg:px-6 my-12 w-full lg:w-3/4 m-auto">
      {loading ? (
        <div className="text-center my-8">
          <BeatLoader />
        </div>
      ) : wishlistProduct.length === 0 ? (
        <div className="text-center py-8">
          <img src={selectedProduct} alt="" />
        </div>
      ) : (
        wishlistProduct.map((product) => (
          <div
            to="/wishlist"
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
                <h3 className="text-3xl font-bold">{product.product_title}</h3>
                <p className="text-[#a2a2a2]">{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            </div>
            <div
              onClick={() => handleRemoveWishlist(product.product_id)}
              className="w-1/4 flex justify-end mr-14"
            >
              <MdOutlineClose className="border-2 border-red-600 text-red-600 rounded-full text-3xl cursor-pointer" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
