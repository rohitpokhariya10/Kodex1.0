import React from 'react'
import ProductCard from './Components/ProductCard/ProductCard'

const App = () => {
      const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹1999",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1561262138-ff982ebe0783?q=80&w=1096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹2999",
    category: "Gadgets",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "₹2499",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
  return (
    <div>
      <ProductCard   data= {products}/>
    </div>
  )
}

export default App