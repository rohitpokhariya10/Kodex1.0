const MoreDetails = () => {
  return (
    <div className='float-in overflow-hidden rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,#fffdf8_0%,#f7efe2_100%)] shadow-[0_18px_45px_rgba(20,33,61,0.08)]'>
      <div className='flex items-center justify-between border-b border-[#14213d]/8 px-6 py-4'>
        <div>
          <p className='text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#c77d1f]'>Extended info</p>
          <h1 className='mt-2 text-3xl font-bold tracking-tight text-[#14213d]'>Product details panel</h1>
        </div>
        <div className='w-12 text-[#e09f3e]'>
          <svg viewBox="0 0 48 48" className='h-full w-full fill-none' xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="8" width="36" height="28" rx="8" stroke="#14213D" strokeWidth="3"/>
            <path d="M15 18h18M15 24h18M15 30h12" stroke="#E09F3E" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <div className='grid gap-4 bg-[#f7efe2] px-6 py-5 sm:grid-cols-3'>
        <div className='rounded-[22px] border border-white/70 bg-white/75 p-4'>
          <p className='text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#c77d1f]'>Material</p>
          <p className='mt-2 text-sm font-semibold leading-6 text-[#4f5d75]'>Built for everyday use with a finish that feels cleaner and more durable.</p>
        </div>
        <div className='rounded-[22px] border border-white/70 bg-white/75 p-4'>
          <p className='text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#c77d1f]'>Fit & feel</p>
          <p className='mt-2 text-sm font-semibold leading-6 text-[#4f5d75]'>Balanced proportions and a presentation style that helps the product stand out.</p>
        </div>
        <div className='rounded-[22px] border border-white/70 bg-white/75 p-4'>
          <p className='text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#c77d1f]'>Why it works</p>
          <p className='mt-2 text-sm font-semibold leading-6 text-[#4f5d75]'>A stronger layout, smoother surfaces, and clearer information hierarchy for buyers.</p>
        </div>
      </div>
    </div>
  )
}

export default MoreDetails
