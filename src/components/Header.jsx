import PropTypes from "prop-types";

function Header({ title, subTitle, textColor }) {
  return (
    <header className={`text-center pb-8 ${textColor}`}>
      {" "}
      <h3 className="text-3xl font-bold  py-6 ">{title}</h3>
      <p className="w-full lg:w-[45%] m-auto">{subTitle} </p>
    </header>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

export default Header;
