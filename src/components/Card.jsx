import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Card({ product }) {
  const { product_title, product_image, price } = product || {};

  return (
    <div className="card bg-base-100 shadow-sm transition delay-100 duration-300 ease-in-out hover:scale-105">
      <figure>
        <img className="w-full  object-cover" src={product_image} alt="image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p className="font-bold text-gray-700">Price: ${price}</p>
        <div className="card-actions ">
          <NavLink
            to={`/productDetails/${product.product_id}`}
            className={`btn bg-[#9538E2] text-white hover:bg-cyan-800 rounded-3xl `}
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;
