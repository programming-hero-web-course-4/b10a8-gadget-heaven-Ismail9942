import { toast } from "react-toastify";

// THIS IS WISHLIST FUNCTIO
const getWishlist = () => {
  try {
    const allWishlist = localStorage.getItem("wishListedtProduct");
    return allWishlist ? JSON.parse(allWishlist) : [];
  } catch (error) {
    console.error("Error parsing wishlist items:", error);
    return [];
  }
};

const addWishlist = (wishlist) => {
  const wishListProducts = getWishlist();
  const showProduct = wishListProducts.find(
    (elem) => elem.product_id === wishlist.product_id
  );
  if (showProduct)
    return toast.warning("Product already Exists", {
      theme: "dark",
      position: "top-left",
      autoClose: 1000,
    });
  wishListProducts.push(wishlist);
  localStorage.setItem("wishListedtProduct", JSON.stringify(wishListProducts));
  toast.success("Successfully Added from wishlist", {
    theme: "colored",
    position: "top-left",
    autoClose: 1000,
  });
};
// REMOVE WISHLIST LOCALSTORAGE
const removeWishlsstProduct = (id) => {
  const removeWishlist = getWishlist();
  const updateWishlist = removeWishlist.filter((p) => p.product_id !== id);
  localStorage.setItem("wishListedtProduct", JSON.stringify(updateWishlist));
  toast.success("Product removed from wishlist!", {
    theme: "colored",
    position: "top-left",
    autoClose: 2000,
  });
};

export { getWishlist, addWishlist, removeWishlsstProduct };
