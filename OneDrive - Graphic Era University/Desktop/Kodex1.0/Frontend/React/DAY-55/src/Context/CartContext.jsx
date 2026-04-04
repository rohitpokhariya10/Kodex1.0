import { createContext } from "react";
import { useState } from "react";
export let CartStore = createContext()


export let ContextProvider = ({children}) => {
   //console.log(children)
    const [products, setProducts] = useState([])//set products in the state
  console.log("Products in CartContext-->" , products)


   const [cartItem, setCartItem] = useState([])
   console.log("Product in Cart--->" , cartItem)

  

   let cartLength = cartItem.length


   return <CartStore.Provider value = {{cartItem , setCartItem , cartLength , products , setProducts}}>
 
    {children}
   </CartStore.Provider>
}


