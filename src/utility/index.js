import { toast } from "react-toastify";
// THIS IS CORTED FOUNCTIO
const getLocalStorage = () => {
  try {
    const allProducts = localStorage.getItem("cartListedProduct");
    return allProducts ? JSON.parse(allProducts) : [];
  } catch (error) {
    console.error("Error parsing cart items:", error);
    return [];
  }
};
const addProduct = (carted) => {
  const cartedProduct = getLocalStorage();
  const showProduct = cartedProduct.find(
    (item) => item.product_id == carted.product_id
  );
  if (showProduct) {
    return toast.warning("Product already Exists", {
      theme: "dark",
      position: "top-left",
      autoClose: 1000,
    });
  } else {
    cartedProduct.push(carted);
    localStorage.setItem("cartListedProduct", JSON.stringify(cartedProduct));
    toast.success("Successfully Added from Carted", {
      theme: "colored",
      position: "top-left",
      autoClose: 1000,
    });
  }
};

// REMOVE CARTED LOCALSTORAGE
const removeCartedStrorage = (id) => {
  const cartedStorage = getLocalStorage();
  const updteCarted = cartedStorage.filter((p) => p.product_id !== id);
  localStorage.setItem("cartListedProduct", JSON.stringify(updteCarted));
  toast.success("Product removed from Carted!", {
    theme: "colored",
    position: "top-left",
    autoClose: 2000,
  });
};

export { addProduct, getLocalStorage, removeCartedStrorage };
