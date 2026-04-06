import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { productData, ProductsProvider } from '../context/ProductContext';
import { AuthProvider } from '../context/AuthContext';

const MainLayout = () => {

  const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart, clearCart } = productData();

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  useEffect(() => { }, [])

  return (
    <div className="min-h-screen bg-ink text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40"
            onClick={() => toggleCart(false)}
          />
          <aside className="fixed top-0 right-0 h-full w-full sm:w-105 bg-[#111] border-l border-white/10 z-50 flex flex-col transition-transform duration-300 ease-out translate-x-0 animate-slide-in will-change-transform">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
              <div className="flex items-center gap-3">
                <i className="ri-shopping-bag-3-line text-volt text-xl"></i>
                <h2 className="font-heading font-bold text-lg">Cart</h2>
                <span className="badge bg-volt/15 text-volt text-xs">{itemCount} items</span>
              </div>
              <button
                className="p-2 hover:bg-white/8 rounded-xl transition-colors text-white/50 hover:text-white"
                onClick={() => toggleCart(false)}
              >
                <i className="ri-close-line text-lg"></i>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-16">
                  <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center">
                    <i className="ri-box-3-line text-3xl text-white/30"></i>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-white/70 text-lg">Cart is empty</p>
                    <p className="text-white/30 text-sm mt-1">Go shop something cool!</p>
                  </div>
                  <Link to="/products" onClick={() => toggleCart(false)} className="btn-volt mt-2 px-4 py-2 rounded-xl">
                    Browse Products
                  </Link>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 bg-white/4 border border-white/8 rounded-2xl animate-fade-in">
                    <div className="w-18 h-18 bg-white rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2">
                      <img src={item.images?.[0]} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white/80 font-body clamp-2 leading-snug">{item.title}</p>
                      <p className="text-volt font-heading font-bold text-base mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-white/30 text-xs">${item.price} each</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          className="w-7 h-7 flex items-center justify-center bg-white/8 hover:bg-white/15 rounded-lg transition-colors border border-white/10"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <i className="ri-subtract-line text-xs"></i>
                        </button>
                        <span className="text-sm font-bold font-body w-5 text-center">{item.quantity}</span>
                        <button
                          className="w-7 h-7 flex items-center justify-center bg-white/8 hover:bg-white/15 rounded-lg transition-colors border border-white/10"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <i className="ri-add-line text-xs"></i>
                        </button>
                        <button
                          className="ml-auto text-red-400/60 hover:text-red-400 transition-colors"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="ri-delete-bin-line text-sm"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                )))}
            </div>

            {cart.length > 0 && (
              <div className="px-6 py-5 border-t border-white/8 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/50 text-sm font-body">Total</span>
                  <span className="font-heading font-bold text-2xl text-white">${total}</span>
                </div>
                <button className="w-full btn-volt flex items-center justify-center gap-2 py-3.5 text-base font-heading font-bold">
                  Checkout <i className="ri-arrow-right-line text-base"></i>
                </button>
                <button
                  className="w-full text-center text-xs text-white/25 hover:text-red-400 transition-colors py-1"
                  onClick={clearCart}
                >
                  Clear cart
                </button>
              </div>
            )}
          </aside>
        </>
      )}
      <Footer />
    </div>
  )
}

export default MainLayout
