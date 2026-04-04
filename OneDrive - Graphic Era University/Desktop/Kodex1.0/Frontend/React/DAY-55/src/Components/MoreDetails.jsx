import React from 'react'

const MoreDetails = () => {
  return (
    <div className='float-in overflow-hidden rounded-[30px] border border-[#14213d]/10 bg-[#fffdf8] shadow-[0_18px_45px_rgba(20,33,61,0.08)]'>
      <div className='flex items-center justify-between border-b border-[#14213d]/8 px-6 py-4'>
        <div>
          <p className='text-[11px] font-bold uppercase tracking-[0.26em] text-[#c77d1f]'>Extended info</p>
          <h1 className='mt-2 text-2xl font-black tracking-tight text-[#14213d]'>Product details panel</h1>
        </div>
        <div className='w-12 text-[#e09f3e]'>
          <svg viewBox="0 0 48 48" className='h-full w-full fill-none' xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="8" width="36" height="28" rx="8" stroke="#14213D" strokeWidth="3"/>
            <path d="M15 18h18M15 24h18M15 30h12" stroke="#E09F3E" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <div className='bg-[#f8f3ea] px-6 py-5'>
        <p className='max-w-2xl text-base leading-8 text-[#4f5d75]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, accusantium!</p>
      </div>
    </div>
  )
}

export default MoreDetails
