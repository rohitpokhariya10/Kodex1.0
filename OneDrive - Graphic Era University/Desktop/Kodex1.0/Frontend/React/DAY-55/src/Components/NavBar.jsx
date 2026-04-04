import { useContext } from "react"
import { NavLink } from "react-router"
import { CartStore } from "../Context/CartContext"

const userAvatar =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f7d64a" />
          <stop offset="100%" stop-color="#f08804" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="60" fill="url(#bg)" />
      <circle cx="60" cy="44" r="22" fill="#fff4d6" />
      <path d="M24 101c7-18 22-28 36-28s29 10 36 28" fill="#1f2937" />
      <path d="M39 98c5-12 14-19 21-19s16 7 21 19" fill="#ffffff" fill-opacity="0.92" />
      <path d="M38 41c4-15 17-24 31-24 10 0 18 3 25 11-2-1-5-2-8-2-5 0-9 2-13 5-4 3-9 5-15 5-6 0-13 2-20 5z" fill="#111827" />
    </svg>
  `)

const NavBar = () => {

  let {cartLength} = useContext(CartStore)
  return (
    <div className='sticky top-0 z-50 border-b border-[#14213d]/10 bg-[#fffaf2]/92 px-3 py-3 text-[#14213d] backdrop-blur sm:px-4 md:px-6 lg:px-10'>
      <div className='mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-3 sm:min-h-16 sm:flex-nowrap'>
      <div className="min-w-0 flex-1">
      <h1  className="text-lg font-black uppercase tracking-[0.14em] text-[#14213d] sm:text-xl sm:tracking-[0.2em] md:text-2xl">Sasta amazon</h1>
      <span className="hidden text-[10px] uppercase tracking-[0.34em] text-[#c77d1f] sm:block sm:text-xs">Well-priced essentials</span>
      </div>
      <div className='order-3 flex w-full items-center justify-center gap-2 rounded-full border border-[#14213d]/10 bg-white p-1.5 text-sm font-semibold shadow-[0_10px_30px_rgba(20,33,61,0.06)] sm:order-2 sm:w-auto sm:justify-start sm:gap-3 sm:text-base'>
        <NavLink to='/'
        className={({isActive}) => `flex-1 rounded-full px-4 py-2.5 text-center transition-all duration-300 sm:flex-none ${isActive ? "bg-[#14213d] text-white" : "text-[#4f5d75] hover:bg-[#f1eadf] hover:text-[#14213d]"}` }>
          Home
        </NavLink>

         <NavLink to='/cart'
         
        className={({isActive}) => `relative flex-1 rounded-full px-4 py-2.5 text-center transition-all duration-300 sm:flex-none ${isActive ? "bg-[#14213d] text-white" : "text-[#4f5d75] hover:bg-[#f1eadf] hover:text-[#14213d]"}` }>
          Cart <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#e09f3e] px-1 text-[10px] font-bold text-[#14213d]">{cartLength}</span>
        </NavLink>
      </div>

      <div className="order-2 flex items-center rounded-full border border-[#14213d]/10 bg-white p-1.5 shadow-[0_10px_30px_rgba(20,33,61,0.06)] sm:order-3">
        <img
          src={userAvatar}
          alt="User profile"
          className="h-10 w-10 rounded-full border-2 border-[#e09f3e] bg-white object-cover p-0.5 transition-transform duration-300 hover:scale-105 sm:h-11 sm:w-11"
        />
      </div>
      </div>
    </div>
  )
}

export default NavBar
