import axios from 'axios'
import  { useContext, useEffect } from 'react'
import ProductsCard from '../Components/ProductsCard'
import { CartStore } from '../Context/CartContext'

const Home = () => {
  let {products , setProducts} = useContext(CartStore)

  useEffect(()=>{
    (async ()=>{
      try{
        let res = await axios.get('https://dummyjson.com/products')
        setProducts(res.data.products)
      }
      catch(error){
        console.log("Eroor in API" , error)
      }
    }) ()
  },[])

  return (
    <div className='relative min-h-[calc(100vh-5.5rem)] px-3 py-6 sm:px-6 sm:py-8 lg:px-10'>
      <div className='mx-auto flex max-w-[1440px] flex-col gap-8 sm:gap-10'>
        <section className='float-in grid gap-6 rounded-[28px] border border-[#14213d]/10 bg-[#fffdf8] p-4 shadow-[0_24px_70px_rgba(20,33,61,0.08)] sm:rounded-[36px] sm:p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8'>
          <div className='flex flex-col justify-between gap-6'>
            <div className='space-y-4'>
              <span className='inline-flex w-fit rounded-full border border-[#e09f3e]/30 bg-[#fff4db] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#c77d1f]'>Curated storefront</span>
              <div className='space-y-3'>
                <h1 className='max-w-3xl text-3xl font-black tracking-[-0.04em] text-[#14213d] sm:text-5xl lg:text-6xl'>Sharper layout, stronger contrast, and motion that feels deliberate.</h1>
                <p className='max-w-2xl text-sm leading-7 text-[#4f5d75] sm:text-lg sm:leading-8'>A cleaner catalog view with editorial spacing, premium surfaces, and subtle animated details that suit a real ecommerce UI.</p>
              </div>
            </div>
            <div className='flex flex-wrap gap-4'>
              <div className='rounded-[24px] border border-[#14213d]/10 bg-[#f8f3ea] px-4 py-4 sm:px-5'>
                <p className='text-xs font-bold uppercase tracking-[0.24em] text-[#c77d1f]'>Inventory</p>
                <p className='mt-2 text-3xl font-black text-[#14213d]'>{products.length}</p>
              </div>
              <div className='rounded-[24px] border border-[#14213d]/10 bg-[#14213d] px-4 py-4 text-white sm:px-5'>
                <p className='text-xs font-bold uppercase tracking-[0.24em] text-[#f2cc8f]'>Today&apos;s pick</p>
                <p className='mt-2 text-lg font-semibold'>Modern essentials under one roof</p>
              </div>
            </div>
          </div>

          <div className='drift rounded-[28px] border border-[#14213d]/10 bg-[#f8f3ea] p-4 sm:rounded-[32px] sm:p-5'>
            <div className='mb-4 flex items-center justify-between'>
              <div>
                <p className='text-xs font-bold uppercase tracking-[0.24em] text-[#c77d1f]'>Visual index</p>
                <h2 className='mt-2 text-2xl font-black tracking-tight text-[#14213d]'>Designed for browsing</h2>
              </div>
              <div className='h-3 w-3 rounded-full bg-[#e09f3e]' />
            </div>
            <div className='aspect-[16/11] overflow-hidden rounded-[24px] border border-[#14213d]/10 bg-[#fffdf8] p-3 sm:rounded-[28px] sm:p-4'>
              <svg viewBox="0 0 320 220" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="28" width="168" height="128" rx="24" fill="#14213D"/>
                <rect x="52" y="54" width="122" height="12" rx="6" fill="#FFF4DB"/>
                <rect x="52" y="80" width="82" height="10" rx="5" fill="#8D99AE"/>
                <rect x="52" y="111" width="95" height="18" rx="9" fill="#E09F3E"/>
                <path d="M229 53h42c10 0 18 8 18 18v76c0 10-8 18-18 18h-42c-10 0-18-8-18-18V71c0-10 8-18 18-18Z" fill="#FFFDF8" stroke="#14213D" strokeWidth="8"/>
                <circle cx="250" cy="85" r="15" fill="#E09F3E"/>
                <path d="M230 136c7-17 18-25 32-25 14 0 25 8 32 25" stroke="#14213D" strokeWidth="8" strokeLinecap="round"/>
                <path d="M33 180c35-14 72-21 111-21 39 0 74 7 111 21" stroke="#C77D1F" strokeWidth="10" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </section>

        <div className='flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4'>
          <div>
            <p className='text-xs font-bold uppercase tracking-[0.26em] text-[#c77d1f]'>Catalog</p>
            <h2 className='mt-2 text-2xl font-black tracking-tight text-[#14213d] sm:text-3xl'>Featured products</h2>
          </div>
          <div className='hidden items-center gap-2 text-sm text-[#4f5d75] md:flex'>
            <span className='h-px w-12 bg-[#14213d]/15' />
            Refined product cards with subtle motion
          </div>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {
            products.map((product , index)=>{
              return <ProductsCard key={index} product={product} type="home"/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home
