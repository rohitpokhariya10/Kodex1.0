import React, { Suspense } from "react";
import ProductCard from "./components/ProductCard";

const Products = async () => {
    let response = await fetch("https://fakestoreapi.com/products")
    console.log("response-->" , response)
    let data = response.json()
    console.log("data--->" , data)
  return (
  <div className="flex flex-col gap-4">
   <h1>This is Products page</h1>
   <div className="grid grid-cols-4 gap-6 p-7 ">
   <Suspense fallback={<h1 className="text-4xl text-red-600">Loading....</h1>}>
     <ProductCard products={data}/>
   </Suspense>
   </div>
   

  </div>
  );
};

export default Products;
