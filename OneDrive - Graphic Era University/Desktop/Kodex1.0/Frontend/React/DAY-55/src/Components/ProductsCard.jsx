import { useNavigate } from "react-router";
import { CartStore } from "../Context/CartContext";
import { useContext } from "react";

const ProductsCard = ({ product, type }) => {
  let navigate = useNavigate();
  let { setCartItem, cartItem, products, setProducts } = useContext(CartStore);
  console.log("Cart Items in Cart-->" , cartItem)

  let handleAddToCart = () => {
    setCartItem((prev) => [...prev, product]);
  };

  let isInCart = cartItem.find((elem) => {
    return elem.id == product.id;
  });
  
  let handleDeleteFromCart = () => {
    let filterItems = cartItem.filter((elem)=> elem.id != product.id)
    setCartItem(filterItems)
  }

  let handleDeleteFromHome = () =>{
    let filterItems = products.filter(elem => elem.id != product.id)
    setProducts(filterItems)
  }

  return (
    <div className="float-in group shine-sweep flex h-full flex-col overflow-hidden rounded-[26px] border border-[#14213d]/10 bg-[#fffdf8] shadow-[0_18px_45px_rgba(20,33,61,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_rgba(20,33,61,0.12)] sm:rounded-[32px]">
      <div className="flex items-center justify-between border-b border-[#14213d]/8 px-4 py-4 sm:px-5">
        <span className="max-w-[65%] truncate rounded-full bg-[#fff4db] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#c77d1f]">{product.category}</span>
        <div className="flex items-center gap-1 text-[#e09f3e]">
          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current"><path d="m10 1.7 2.4 4.85 5.35.78-3.88 3.78.92 5.34L10 13.95l-4.79 2.5.92-5.34L2.25 7.33l5.35-.78L10 1.7Z"/></svg>
          <span className="text-sm font-semibold text-[#14213d]">4.8</span>
        </div>
      </div>

      <div onClick={() => navigate(`/product/${product.id}`)} className="relative cursor-pointer bg-[#f4efe6] px-4 pb-2 pt-5 sm:px-5 sm:pt-6">
        <div className="absolute left-4 right-4 top-5 h-20 rounded-full border border-[#e09f3e]/15 sm:left-5 sm:right-5 sm:h-24" />
        <img className="relative h-[220px] w-full object-contain transition-transform duration-500 group-hover:scale-105 sm:h-[240px]" src={product.images[0]} alt="" />
      </div>

      <div className="flex flex-1 flex-col gap-4 px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
        <div className="flex items-start justify-between gap-3">
          <h1 className="max-h-16 overflow-hidden text-base font-bold leading-6 tracking-tight text-[#14213d] sm:text-lg sm:leading-7">{product.title}</h1>
          <h1 className="shrink-0 text-xl font-black tracking-tight text-[#14213d] sm:text-2xl">${product.price}</h1>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#4f5d75]">
          <span className="h-2 w-2 rounded-full bg-[#e09f3e]" />
          Fast delivery available
        </div>

        <div className="mt-auto flex w-full flex-col items-stretch gap-3 border-t border-[#14213d]/8 pt-4 sm:flex-row sm:items-center sm:justify-between">
          {isInCart ? (
            <div className="flex items-center justify-center gap-2 rounded-full border border-[#14213d]/10 bg-[#f6f1e8] px-2 py-1.5 sm:justify-start">
              <button
                onClick={() =>
                  setCartItem((prev) =>
                    prev
                      .map((item) =>
                        item.id === product.id
                          ? { ...item, qty: item.qty - 1 } 
                          : item
                      )
                      .filter((item) => item.qty > 0)
                  )
                }
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-semibold text-[#14213d] transition-all duration-300 hover:bg-[#14213d] hover:text-white"
              >
                -
              </button>

              <span className="min-w-7 text-center text-sm font-bold text-[#14213d]">{isInCart.qty}</span>

              <button
                onClick={() =>
                  setCartItem((prev) =>
                    prev.map((item) =>
                      item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                    )
                  )
                }
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-semibold text-[#14213d] transition-all duration-300 hover:bg-[#14213d] hover:text-white"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() =>
                setCartItem((prev) => [...prev, { ...product, qty: 1 }])
              }
              className="w-full rounded-full bg-[#14213d] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1f325c] sm:w-auto"
            >
              Add to Cart
            </button>
          )}

          {
            type == "home" ? (
              <button 
                onClick={()=> {
                  handleDeleteFromHome(product.id)
                }}
                className="w-full rounded-full border border-[#14213d]/12 px-4 py-2.5 text-sm font-semibold text-[#4f5d75] transition-all duration-300 hover:border-[#d1495b]/25 hover:bg-[#fff1f2] hover:text-[#d1495b] sm:w-auto"
              >
                Remove
              </button>
            ) : (
              <button 
                onClick={()=> {
                  handleDeleteFromCart(product.id)
                }}
                className="w-full rounded-full border border-[#14213d]/12 px-4 py-2.5 text-sm font-semibold text-[#4f5d75] transition-all duration-300 hover:border-[#d1495b]/25 hover:bg-[#fff1f2] hover:text-[#d1495b] sm:w-auto"
              >
                Remove
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
