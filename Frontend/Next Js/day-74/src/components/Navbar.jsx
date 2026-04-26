import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-5'>
      {/* Link is an Next Utility class */}
        <Link href={"/"}>Home</Link>
         <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
           <Link href={"/products"}>Products</Link>
    </div>
  )
}

export default Navbar