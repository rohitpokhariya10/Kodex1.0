import axios from 'axios'
import { useEffect , useState } from 'react'
import { Outlet, useNavigate, useParams  } from 'react-router'

const ProductDetails = () => {
let {id} = useParams()
let navigate = useNavigate()

const [singleProduct, setSingleProduct] = useState(null)
const [loading, setLoading] = useState(true)
 
    useEffect(()=>{
      async function fetchData(){
      try{
           if(id){
            let res = await axios.get(`https://dummyjson.com/products/${id}`)
            setSingleProduct(res.data)
           }
        }
        catch(error){
          console.log("Error in API", error)
        }
        finally{
          setLoading(false)
        }
      }
      fetchData()
      
    },[id])

   if(loading){
  return (
    <div className="flex min-h-[calc(100vh-5.5rem)] items-center justify-center px-4 sm:px-6">
      <h1 className="float-in rounded-full border border-[#14213d]/10 bg-[#fffdf8] px-6 py-4 text-lg font-semibold text-[#14213d] shadow-[0_20px_50px_rgba(20,33,61,0.08)] sm:px-8 sm:text-xl">
        Loading Products...
      </h1>
    </div>
  )
}
  return (
    <div className='min-h-[calc(100vh-5.5rem)] px-3 py-6 text-[#14213d] sm:px-6 sm:py-8 lg:px-10'>
     <div className='mx-auto grid max-w-[1440px] gap-8 xl:grid-cols-[1.02fr_0.98fr]'>
      <div className='float-in overflow-hidden rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,#fffdf8_0%,#f7f0e4_100%)] shadow-[0_24px_70px_rgba(20,33,61,0.08)] sm:rounded-[40px]'>
        <div className='flex items-center justify-between border-b border-[#14213d]/8 px-4 py-4 sm:px-6'>
          <span className='rounded-full border border-[#e09f3e]/20 bg-white/80 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#c77d1f]'>Product preview</span>
          <span className='hidden text-sm font-medium text-[#4f5d75] sm:block'>Premium selection</span>
        </div>
        <div className='relative bg-[radial-gradient(circle_at_top,#fff9ee_0%,#f0e7d9_100%)] px-4 py-6 sm:px-6 sm:py-8'>
          <div className='absolute inset-x-6 top-8 h-20 rounded-full border border-[#e09f3e]/15 sm:inset-x-12 sm:h-28' />
          <img className='relative mx-auto h-[260px] w-full object-contain transition-transform duration-500 hover:scale-[1.06] sm:h-[320px] lg:h-[500px]' src={singleProduct.images[0]} alt={singleProduct.title} />
        </div>
      </div>

      <div className='float-in flex flex-col gap-5 rounded-[30px] border border-white/80 bg-[linear-gradient(145deg,rgba(255,253,248,0.96),rgba(247,239,227,0.94))] p-4 shadow-[0_24px_70px_rgba(20,33,61,0.08)] sm:rounded-[40px] sm:gap-6 sm:p-8'>
        <div className='flex flex-wrap items-center gap-3'>
          <span className='rounded-full border border-[#e09f3e]/30 bg-white/85 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.3em] text-[#c77d1f]'>{singleProduct.category}</span>
          <div className='flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[#e09f3e] shadow-[0_10px_20px_rgba(20,33,61,0.05)]'>
            <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current"><path d="m10 1.7 2.4 4.85 5.35.78-3.88 3.78.92 5.34L10 13.95l-4.79 2.5.92-5.34L2.25 7.33l5.35-.78L10 1.7Z"/></svg>
            <span className='text-sm font-semibold text-[#14213d]'>4.8 rating</span>
          </div>
        </div>

        <div className='space-y-4'>
          <h1 className="text-4xl font-bold tracking-[-0.05em] text-[#14213d] sm:text-5xl">{singleProduct.title}</h1>
          <div className='flex items-end gap-3'>
            <p className='text-3xl font-extrabold tracking-tight text-[#14213d] sm:text-4xl'>${singleProduct.price}</p>
            <p className='pb-1 text-sm font-semibold text-[#8b95a7] line-through'>${Math.round(singleProduct.price * 1.18)}</p>
          </div>
          <p className="max-w-3xl text-sm leading-7 text-[#4f5d75] sm:text-lg sm:leading-8">{singleProduct.description}</p>
        </div>

        <div className='grid gap-4 rounded-[28px] border border-white/80 bg-white/78 p-5 shadow-[0_14px_32px_rgba(20,33,61,0.05)] sm:grid-cols-3'>
          <div>
            <p className='text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#c77d1f]'>Shipping</p>
            <p className='mt-2 text-sm font-semibold text-[#14213d]'>Express delivery</p>
          </div>
          <div>
            <p className='text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#c77d1f]'>Return</p>
            <p className='mt-2 text-sm font-semibold text-[#14213d]'>Easy replacement</p>
          </div>
          <div>
            <p className='text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#c77d1f]'>Support</p>
            <p className='mt-2 text-sm font-semibold text-[#14213d]'>24/7 assistance</p>
          </div>
        </div>

        <div className='flex flex-col gap-4 pt-2'>
          <button
          onClick={()=>navigate(`/product/${id}/moreDetails`)}
          className='w-fit rounded-full bg-[#14213d] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1f325c] active:scale-95'>More Details</button>
          <Outlet/>
        </div>
      </div>
     </div>
    </div>
  )
}

export default ProductDetails
