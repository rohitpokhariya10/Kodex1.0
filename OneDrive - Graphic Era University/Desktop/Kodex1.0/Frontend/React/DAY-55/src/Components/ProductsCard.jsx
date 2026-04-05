import { useNavigate } from "react-router";
import { CartStore } from "../Context/CartContext";
import { useContext } from "react";

const ProductsCard = ({ product, type , isInCart}) => {
  let navigate = useNavigate();
  let { handleDeleteFromCart , handleDeleteFromHome  , handleAddToCart , decreaseQuantity , increaseQuantity} = useContext(CartStore);
  const discountPrice = Math.round(product.price * 1.18);

  return (
    <div className="float-in group shine-sweep flex h-full flex-col overflow-hidden rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,#fffefb_0%,#fbf6ee_100%)] shadow-[0_20px_55px_rgba(20,33,61,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(20,33,61,0.14)] sm:rounded-[34px]">
      <div className="flex items-center justify-between border-b border-[#14213d]/8 px-4 py-4 sm:px-5">
        <span className="max-w-[65%] truncate rounded-full border border-[#e09f3e]/20 bg-[#fff4db] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#c77d1f]">{product.category}</span>
        <div className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[#e09f3e] shadow-[0_8px_20px_rgba(20,33,61,0.05)]">
          <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current"><path d="m10 1.7 2.4 4.85 5.35.78-3.88 3.78.92 5.34L10 13.95l-4.79 2.5.92-5.34L2.25 7.33l5.35-.78L10 1.7Z"/></svg>
          <span className="text-sm font-semibold text-[#14213d]">4.8</span>
        </div>
      </div>

      <div onClick={() => navigate(`/product/${product.id}`)} className="relative cursor-pointer bg-[radial-gradient(circle_at_top,#fff9ee_0%,#f2eadc_100%)] px-4 pb-2 pt-5 sm:px-5 sm:pt-6">
        <div className="absolute inset-x-4 top-5 h-20 rounded-full border border-[#e09f3e]/15 bg-white/35 blur-[1px] sm:inset-x-5 sm:h-24" />
        <div className="absolute right-6 top-5 rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#6b7288]">
          New edit
        </div>
        <img className="relative h-[220px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.08] sm:h-[240px]" src={product.images[0]} alt={product.title} />
      </div>

      <div className="flex flex-1 flex-col gap-4 px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <h1 className="max-h-16 overflow-hidden text-xl font-bold leading-7 tracking-[-0.03em] text-[#14213d]">{product.title}</h1>
            <div className="shrink-0 text-right">
              <p className="text-xl font-extrabold tracking-tight text-[#14213d] sm:text-2xl">${product.price}</p>
              <p className="text-xs font-semibold text-[#8b95a7] line-through">${discountPrice}</p>
            </div>
          </div>

          <p className="line-clamp-2 text-sm leading-6 text-[#5a677d]">
            {product.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 rounded-[24px] border border-[#14213d]/8 bg-white/70 p-3">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#c77d1f]">Shipping</p>
            <p className="mt-1 text-sm font-semibold text-[#14213d]">Fast delivery</p>
          </div>
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#c77d1f]">Quality</p>
            <p className="mt-1 text-sm font-semibold text-[#14213d]">Top-rated pick</p>
          </div>
        </div>

        <div className="mt-auto flex w-full flex-col items-stretch gap-3 border-t border-[#14213d]/8 pt-4 sm:flex-row sm:items-center sm:justify-between">
          {isInCart ? (
            <div className="flex items-center justify-between gap-2 rounded-full border border-[#14213d]/10 bg-[#f5eee1] px-2 py-1.5 sm:min-w-[138px] sm:justify-start">
             <button
             onClick={()=>decreaseQuantity(product)}
             className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-[#14213d] transition hover:bg-[#14213d] hover:text-white"
             >-</button>

             <span className="min-w-8 text-center text-sm font-extrabold text-[#14213d]">{isInCart.qty}</span>

             <button
              onClick={()=>increaseQuantity(product)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#14213d] text-lg font-bold text-white transition hover:bg-[#1f325c]"
             >+</button>
            </div>
          ) : (
            <button
              onClick={() =>
                handleAddToCart(product)
              }
              className="w-full rounded-full bg-[#14213d] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1f325c] hover:shadow-[0_14px_28px_rgba(20,33,61,0.18)] sm:w-auto"
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
                className="w-full rounded-full border border-[#14213d]/12 bg-white/70 px-4 py-3 text-sm font-semibold text-[#4f5d75] transition-all duration-300 hover:border-[#d1495b]/25 hover:bg-[#fff1f2] hover:text-[#d1495b] sm:w-auto"
              >
                Remove
              </button>
            ) : (
              <button 
                onClick={()=> {
                  handleDeleteFromCart(product.id)
                }}
                className="w-full rounded-full border border-[#14213d]/12 bg-white/70 px-4 py-3 text-sm font-semibold text-[#4f5d75] transition-all duration-300 hover:border-[#d1495b]/25 hover:bg-[#fff1f2] hover:text-[#d1495b] sm:w-auto"
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
