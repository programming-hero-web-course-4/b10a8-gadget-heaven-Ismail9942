import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";
import { MdShoppingCart } from "react-icons/md";
import { addProduct } from "../utility/index";
import { useCart } from "../components/ContectApi";
import { addWishlist } from "../utility/wishlish";

function ProductDetails() {
  const { product_id } = useParams();
  const data = useLoaderData();
  const id = parseInt(product_id);
  const [product, setProduct] = useState([]);
  const { addToCart, addToWishliist } = useCart();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const findByProductId = data.find((i) => parseInt(i.product_id) === id);
      setProduct(findByProductId);
    }
  }, [data, id]);

  const {
    product_title,
    product_image,
    price,
    description,
    rating,
    availability,
  } = product;

  const handleCouted = (carted) => {
    addProduct(carted);
    addToCart();
  };
  const handleWishlist = (wishlist) => {
    setActive(true);
    addWishlist(wishlist);
    addToWishliist();
  };

  return (
    <div className="h-[100vh]">
      <div className="bg-[#9538E2] md:h-80">
        <Header
          title="Product Details"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart  devices to the coolest accessories, we have it all!"
          textColor="text-white"
        />
      </div>
      <div className="flex justify-center items-center basis-full w-full lg:w-[80%] m-auto min-h-screen lg:min-h-[70vh] backdrop-blur-xl bg-white p-6 rounded-2xl border-2 border-white md:-mt-32">
        <div className="flex flex-col items-center basis-full gap-6 lg:flex-row">
          <figure className="w-[40%]">
            <img
              src={product_image}
              className="w-full h-[400px] object-contain rounded-lg"
            />
          </figure>
          <div>
            <h1 className="text-3xl md:text-4xl  font-bold">{product_title}</h1>
            <p className="my-2 font-bold">Price: ${price}</p>
            <button
              className={
                availability
                  ? "text-[#309C08] bg-[#309C081A] border bordet-[#309C08] px-3 rounded-3xl mb-2"
                  : "text-[#d51b02] bg-[#309C081A] border bordet-[#d51b02] px-3 rounded-3xl mb-2"
              }
            >
              {availability ? "In Stock" : "Stock Out"}
            </button>
            <p className="text-[#09080F99]">{description}</p>
            <ol className="list-decimal mx-4 space-y-1 text-[#09080F99]">
              <p className="font-bold text-black"> Specification:</p>
              {product?.specification?.map((p, inx) => (
                <li key={inx}>{p}</li>
              ))}
            </ol>
            <div className="my-2 font-bold">
              Rating:
              <div className="flex items-center ">
                <MdOutlineStar className="text-amber-400" />
                <MdOutlineStar className="text-amber-400" />
                <MdOutlineStar className="text-amber-400" />
                <MdOutlineStar className="text-amber-400" />
                <MdOutlineStarBorder />
                <span className="ml-6 font-bold">{rating}</span>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => handleCouted(product)}
                className="btn bg-[#9538E2] text-white rounded-3xl"
              >
                Add to Cart
                <MdShoppingCart />
              </button>
              <button
                onClick={() => handleWishlist(product)}
                className={` border text-xl font-black border-gray-300 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                  active ? "bg-[#ff3232] text-white" : ""
                }`}
              >
                <VscHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
