import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import BannerImage from "../components/BannerImage";
import Header from "../components/Header";

function Home() {
  return (
    <div className="">
      <div className="bg-[#9538E2] text-white w-full h-[600px] rounded-b-2xl mb-72">
        <div className="pt-32">
          <Banner />
          <BannerImage />
        </div>
      </div>
      <Header title="Explore Cutting-Edge Gadgets" subTitle="" />
      <Outlet />
    </div>
  );
}

export default Home;
