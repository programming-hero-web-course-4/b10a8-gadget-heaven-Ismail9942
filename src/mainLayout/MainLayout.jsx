import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import { ToastContainer } from "react-toastify";
import { ContentApi } from "../components/ContectApi"; // Import ContentApi

function MainLayout() {
  return (
    <ContentApi>
      <div className="w-11/12 m-auto bg-[#f1f1f1]">
        <ToastContainer />
        <Navber />
        <Outlet />
        <Footer />
      </div>
    </ContentApi>
  );
}

export default MainLayout;
