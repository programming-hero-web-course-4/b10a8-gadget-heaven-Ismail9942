import bannerImg from "../assets/banner.jpg";

function BannerImage() {
  return (
    <div className="w-full lg:w-2/3 m-auto  backdrop-blur-xl bg-white/60 p-6 rounded-2xl border-2 border-white">
      <img
        className="w-full h-[400px] object-cover rounded-2xl"
        src={bannerImg}
        alt=""
      />
    </div>
  );
}

export default BannerImage;
