"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductCard = ({ product }) => {

    let router =  useRouter()
   
  return (
    <div 
    onClick={()=> router.push(`/about/${product.id}/Radha-Radha`)}
    className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
      
      {/* Image */}
  <Image
 
  src={product.image}
  alt={product.title}
  width={400}
  height={400}
  className=" h-65 object-contain p-4"
   priority  
/>

      {/* Content */}
      <div className="p-4">
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;