import { createContext } from "react";
import { useState } from "react";
export let CartStore = createContext()


export let ContextProvider = ({children}) => {
    const [products, setProducts] = useState([])//set products in the state
   const [cartItem, setCartItem] = useState([])

   let cartLength = cartItem.length


   //Product Delete From Cart Function
   let handleDeleteFromCart = (id) => {
   let filterItems = cartItem.filter((elem)=> elem.id != id)
    setCartItem(filterItems)
  }

//Product Delete From Home Function
  let handleDeleteFromHome = (id) =>{
    let filterItems = products.filter(elem => elem.id != id)
    setProducts(filterItems)
  }

  //Add To Cart Function ---> it takes a product obj in a parameter
  let handleAddToCart = (product) =>{
   setCartItem((prev) => [...prev, { ...product, qty: 1 }])
  }


 //Product Quantity Decreases
   let decreaseQuantity = (product) =>{
    let updateCart = cartItem.map((elem) =>{
      if(elem.id == product.id){
        return {...elem , qty:elem.qty-1}
      }
      else{
        return elem
      }
    })
    let updateProduct = updateCart.find((elem)=> elem.id ==product.id)
   if(updateProduct.qty > 1){
     setCartItem(updateCart)
   }
   else{
    //pop that product from Cart
    let filterProdut  = cartItem.filter((elem)=> elem.id != product.id)
    setCartItem(filterProdut)
   }
  }


  //Product Quantity Increases
  let increaseQuantity = (product) =>{
  let updateCart = cartItem.map((elem)=>{
    if(elem.id == product.id){
      return {...elem , qty:elem.qty+1}
    }
    else{
      return elem
    }
  })
 setCartItem(updateCart)
  }

   return <CartStore.Provider value = {{cartItem , 
      setCartItem , 
      cartLength , 
      products , 
      setProducts ,
     handleAddToCart ,
     handleDeleteFromCart ,
     handleDeleteFromHome ,
     decreaseQuantity,
     increaseQuantity

   }}>
 
    {children}
   </CartStore.Provider>
}


