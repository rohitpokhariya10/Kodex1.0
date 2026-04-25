import Image from "next/image";
import React from "react";

const Page = async ({params}) => {

let data = await params
console.log("params--->" , data)
let {id } = await params
let res = await fetch(`https://fakestoreapi.com/products/${id[0]}`)
let product = await res.json()
console.log("clicked product-->", product)
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Image Section */}
        <div className="flex items-center justify-center bg-gray-50 rounded-xl p-6">
          <Image
            src={product.image}
            alt="Product"
            width={500}
            height={500}
            className="w-full h-96 object-contain"
             priority  //image jldi load hogi ab
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
          {id[1]}
          </h1>

          <p className="text-gray-600 mt-4">
            Your perfect pack for everyday use and walks in the forest.
            Stash your laptop (up to 15 inches) in the padded sleeve.
          </p>

          <p className="text-2xl font-bold text-black mt-6">
        {product.price}$
          </p>

          {/* Rating */}
          <p className="mt-2 text-yellow-500">
           {product.rating.rate} ⭐ 
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Page;