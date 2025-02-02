import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";

function Dashboard() {
  return (
    <>
      <div className="bg-[#9538E2]">
        <Header
          title="Product Details"
          subTitle="Explore the latest gadgets that will take your experience to the next level. From smart  devices to the coolest accessories, we have it all!"
          textColor="text-white"
        />
        <div className="text-center space-x-8 pb-6">
          <NavLink
            to="/dashboard/carted"
            className={({ isActive }) =>
              `border-2 border-white  font-bold cursor-pointer px-10 py-2 rounded-3xl ${
                isActive ? "bg-[#ffc22d] text-black" : ""
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              `border-2 border-white font-bold cursor-pointer px-10 py-2 rounded-3xl ${
                isActive ? "bg-[#ffc22d] text-black" : ""
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Dashboard;
