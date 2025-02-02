// import Sitebar from "./Sitebar";
import Products from "./Products";
import { useLoaderData } from "react-router-dom";

function Categorys() {
  const data = useLoaderData();

  return (
    <div>
      <div className="lg:grid grid-cols-4">
        <div className="col-span-1 ">{/* <Sitebar categories={data} /> */}</div>
        <div className="col-span-3">
          <Products products={data} />
        </div>
      </div>
    </div>
  );
}

export default Categorys;
