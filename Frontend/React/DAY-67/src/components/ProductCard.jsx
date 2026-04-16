import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { useLocation } from "react-router";

const ProductCard = ({ product, productQuant }) => {
  //console.log(product)

  let dispatch = useDispatch(); //to connect ui with actions
  let { pathname } = useLocation();

  return (
    <div className="bg-gray-400 rounded-2xl shadow-md p-4  hover:shadow-lg transition duration-300">
      {/* Image */}
      <div className="h-40 flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt="product"
          className="h-full object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">
        {product.title}
      </h2>

      {/* Price */}
      <p className="text-lg font-bold text-green-600 mb-2">{product.price}</p>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {product.rating.rate}⭐
        <span className="text-xs text-gray-500">(120)</span>
      </div>

      {/* Button */}
      {pathname === "/cart" ? (
        <div>
          <div className=" flex items-center gap-3">
            <h1>-</h1>
            <h1>{productQuant?.quantity}</h1>
            <h1
              className="cursor-pointer"
              onClick={() => dispatch(addToCart(product))}
            >
              +
            </h1>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(product))}
            className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition cursor-pointer active:scale-99"
          >
            Remove
          </button>
        </div>
      ) : productQuant ? (
        <div className=" flex items-center gap-3">
          <h1>-</h1>
          <h1>{productQuant?.quantity}</h1>
          <h1
            className="cursor-pointer"
            onClick={() => dispatch(addToCart(product))}
          >
            +
          </h1>
        </div>
      ) : (
        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition cursor-pointer active:scale-98"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
