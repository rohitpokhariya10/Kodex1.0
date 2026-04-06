
const NavBar = ({setIsToggle , isDisabled}) => {
  console.log("isDisabled in NavBar-->" , isDisabled)
  //console.log(setIsToggle)
  return (
    <div className='h-[70px] flex items-center justify-between  bg-[#2F3335] rounded-md px-3 mb-4'>
        <img 
        className='h-[60px] w-[60px] object-center object-cover rounded-4xl border-2 border-[#1A1A1A]'
        src="public\user-logo.png"/>
        <div className="nav-links flex gap-5 items-center">
            <h1 className='text-[17px] font-semibold text-amber-50'>Home</h1>
             <h1 className='text-[17px] font-semibold text-amber-50'>About</h1>
             <h1 className='text-[17px] font-semibold text-amber-50'>Contact</h1>            
        </div>

       {
        isDisabled ? <button> </button>
         :<button
        onClick={()=>{
          console.log('clicked')
         setIsToggle((prev)=> !prev)  //1 approach
    
        }}
        className='text-[16px] px-5 px py-3 rounded-lg bg-black text-amber-50 active:scale-95 active:border-1'>Add User</button>
       }
      
    </div>
  )
}

export default NavBar
