import Card from "./Card";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import notFound from "../assets/notAvailable.png";

const Products = () => {
  const [isActive, setIsActive] = useState(null);
  const data = useLoaderData();

  const [products, setProducts] = useState(data.slice(4, 10) || []);
  const handleCategory = (categoryType) => {
    if (categoryType) {
      const filterByPructs = data.filter((c) => c.category === categoryType);
      setIsActive(categoryType);
      setProducts(filterByPructs);
    } else if (categoryType === "") {
      setIsActive(null);
      setProducts([]);
      return;
    } else {
      setIsActive(null);
      setProducts(data);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 m-auto mb-10">
      <header className="col-span-2 bg-white text-center rounded-2xl p-6 m-auto">
        <nav>
          <ul className="flex flex-col justify-center gap-8">
            <button
              onClick={() => handleCategory(null)}
              className={` py-2 text-center w-60 rounded-3xl hover:bg-[#9538E2] hover:text-white ${
                isActive === null ? "bg-[#9538E2]" : "bg-[#d1d1d1]"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => handleCategory("Laptops")}
              className={` py-2 text-center w-60 rounded-3xl hover:bg-[#9538E2] hover:text-white ${
                isActive === "Laptops" ? "bg-[#9538E2]" : "bg-[#d1d1d1]"
              }`}
            >
              Laptop
            </button>
            <button
              onClick={() => handleCategory("Smartphones")}
              className={` py-2 text-center w-60 rounded-3xl hover:bg-[#9538E2] hover:text-white ${
                isActive === "Smartphones" ? "bg-[#9538E2]" : "bg-[#d1d1d1]"
              }`}
            >
              Phone
            </button>
            <button
              onClick={() => handleCategory("Headphones")}
              className={` py-2 text-center w-60 rounded-3xl hover:bg-[#9538E2] hover:text-white ${
                isActive === "Headphones" ? "bg-[#9538E2]" : "bg-[#d1d1d1]"
              }`}
            >
              Accessories
            </button>
            <button
              onClick={() => handleCategory("smart")}
              className={` py-2 text-center w-60 rounded-3xl hover:bg-[#9538E2] hover:text-white ${
                isActive === "smart" ? "bg-[#9538E2]" : "bg-[#d1d1d1]"
              }`}
            >
              Smart Watches
            </button>
          </ul>
        </nav>
      </header>
      <div className="col-span-4">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {products.map((product) => (
            <Card key={product.product_id} product={product} />
          ))}
          {products.length === 0 && (
            <div className=" w-full shadow-xl">
              <img className="w-full" src={notFound} alt="Not Found" />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
