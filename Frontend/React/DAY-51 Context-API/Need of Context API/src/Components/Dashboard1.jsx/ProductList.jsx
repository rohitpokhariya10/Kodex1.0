
//ye component product ke name ko render krta hai
const  ProductList = ({product , deleteProduct , setCartItems , setGetClickedProduct}) => {
  //console.log(product)
  return (
    <div className="h-[100%] flex items-center gap-5">
      {/* <h1 className="">Product List</h1> */}
    
        <h1 className="text-green-100 font-semibold text-xl">{product.title}</h1>
        <button 
        onClick={()=>{
          deleteProduct(product._id)
        }}
        className="px-2 py-2 rounded-md bg-red-700 text-amber-50">Delete Product</button>

        <button 
        onClick={()=>{
        setCartItems((prev)=> {
          return [...prev , product]
        })
        }}
        className="px-2 py-2 rounded-md bg-yellow-800 text-amber-50">Add to cart</button>

        {/* send to user button clicked product       UserList  pe            chala jayega */}
        <button 
        onClick={()=>{
         setGetClickedProduct(product)//clicked product getClickedProduct state me chla/save hojayega 
        }}
        className="px-2 py-2 rounded-md bg-gray-800 text-amber-50 active:scale-98">Send to User</button>
      
    </div>
  )
}

export default ProductList
