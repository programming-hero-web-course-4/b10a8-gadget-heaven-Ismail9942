import { NavLink, useLocation } from "react-router-dom";
import { VscHeart } from "react-icons/vsc";
import { MdShoppingCart } from "react-icons/md";
import { useCart } from "./ContectApi";

function Navber() {
  const { pathname } = useLocation();
  const { cartCount, wishlistCount } = useCart();

  return (
    <header
      className={`${
        pathname === "/" ? "bg-[#9538E2] text-white rounded-t-2xl" : "bg-white"
      }`}
    >
      <nav className="navbar lg:px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 gap-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive
                        ? "bg-[#ffc22d] text-black underline underline-offset-4"
                        : ""
                    }`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive
                        ? "bg-[#ffc22d] underline underline-offset-4"
                        : ""
                    }`
                  }
                  to="/statistics"
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-bold ${
                      isActive
                        ? "bg-[#ffc22d] underline underline-offset-4"
                        : ""
                    }`
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-12">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive
                      ? "bg-[#ffc22d] text-black underline underline-offset-4"
                      : ""
                  }`
                }
                to="/"
              >
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "bg-[#ffc22d] underline underline-offset-4" : ""
                  }`
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-bold ${
                    isActive ? "bg-[#ffc22d] underline underline-offset-4" : ""
                  }`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <button className="bg-white text-black! border border-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
            <div className="font-bold">
              <MdShoppingCart />
            </div>
          </button>
          {cartCount > 0 && (
            <span className="bg-red-600 font-bold w-4 h-4 rounded-full text-white text-sm flex justify-center place-items-center relative bottom-[12px] right-[26px]">
              {cartCount}
            </span>
          )}
          <button className="bg-white text-black! border border-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
            <div className="font-bold">
              <VscHeart />
            </div>
          </button>
          {wishlistCount > 0 && (
            <span className="bg-red-600 font-bold w-4 h-4 rounded-full text-white text-sm flex justify-center place-items-center relative bottom-[12px] right-[26px]">
              {wishlistCount}
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navber;
