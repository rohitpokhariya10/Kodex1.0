import Link from 'next/link'
import React from 'react'

const ContactLayout = ({children}) => {
   // Layout for nested routes under /contact (mobile, message, email)
  return (
    <div className='h-screen flex gap-9 flex-col p-8'>
        <div className='flex gap-5  bg-purple-900 w-fit'>
            <Link href={'/contact/mobile'}>Mobile</Link>
              <Link href={'/contact/message'}>Message</Link>
              <Link href={'/contact/email'}>Email</Link>
        </div>
      {children}
    </div>
  )
}

export default ContactLayout