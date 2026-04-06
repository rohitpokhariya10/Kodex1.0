

const UserCard = ({userData , handleDelete , setEditUser  , setIsToggle}) => {
  console.log("User Card Rendering........")
 console.log("user DATA--->" ,userData)
 //console.log(handleDelete)
 
  return (
   
      <div className=" h-fit relative  rounded-3xl  bg-[#121111] px-3 py-3 flex flex-col items-center  overflow-hidden ">

        {/* Top glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gray-500/10 blur-2xl pointer-events-none" />

        {/* Avatar */}
        <div className="relative w-25 h-25 rounded-full p-[3px] bg-gradient-to-br from-yellow-400 via-yellow-600 to-yellow-900 mb-5 shadow-[0_0_24px_rgba(234,179,8,0.35)]">
          <img
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop"
            alt="Rohit"
            className="w-full h-full rounded-full object-cover object-center border-2 border-[#0f172a]"
          />
          <span className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0f172a] shadow-[0_0_8px_rgba(34,197,94,0.7)]" />
        </div>

     
        <h1 className="text-slate-100 text-xl font-semibold tracking-tight mb-1">{userData.name}</h1>

      

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500/25 to-transparent mb-5" />

        {/* Info rows */}
        <div className="  w-full flex flex-col gap-3.5 mb-1">

          {/* Email */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 stroke-yellow-500 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
              </svg>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-slate-500 font-mono">Email</p>
              <p className="text-[13px] text-slate-300 mt-0.5">{userData.email}</p>
            </div>
          </div>

          {/* Department */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 stroke-yellow-500 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-slate-500 font-mono">{userData.department}</p>
            
            </div>
          </div>

          {/* Role */}
          <div className="flex items-center gap-3 px-3.5 py-2.5 bg-white/[0.03] border border-white/[0.06] rounded-xl">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 stroke-yellow-500 fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
              </svg>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest text-slate-500 font-mono">Role</p>
              <span className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-500 text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_4px_#eab308]" />
              {userData.role}
              </span>
            </div>
          </div>

       

        {/* Buttons */}
        <div className="flex gap-2.5 w-full ">
          <button 
          onClick={()=>{
            setEditUser(userData)
            setIsToggle((prev)=>!prev)
          }}
          className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-900 text-[13px] font-semibold shadow-[0_4px_16px_rgba(234,179,8,0.3)] hover:shadow-[0_6px_24px_rgba(234,179,8,0.45)] hover:-translate-y-0.5 transition-all duration-200">
            Update Profile
          </button>
          <button 
         onClick={()=>handleDelete(userData.id)}
          className="flex-1 py-2.5 rounded-xl border border-white/10 text-slate-400 text-[13px] font-medium hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400 hover:-translate-y-0.5 transition-all duration-200">
            Remove
          </button>
        </div>

      </div>
    </div>
  )
}

export default UserCard