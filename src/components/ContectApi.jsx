import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const CartContent = createContext();
export const useCart = () => useContext(CartContent);

export const ContentApi = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const addToCart = () => setCartCount((prev) => prev + 1);
  const removeToCart = () => {
    if (cartCount >= 1) {
      setCartCount((curr) => curr - 1);
    } else if (cartCount > 0) {
      setCartCount(0);
    }
  };
  const addToWishliist = () => setWishlistCount((prev) => prev + 1);
  const removeToWishlist = () => {
    if (wishlistCount >= 1) {
      setWishlistCount((curr) => curr - 1);
    } else if (wishlistCount > 0) {
      setWishlistCount(0);
    }
  };

  return (
    <CartContent.Provider
      value={{
        cartCount,
        wishlistCount,
        addToCart,
        addToWishliist,
        removeToCart,
        removeToWishlist,
      }}
    >
      {children}
    </CartContent.Provider>
  );
};

ContentApi.propTypes = {
  children: PropTypes.node.isRequired,
};
