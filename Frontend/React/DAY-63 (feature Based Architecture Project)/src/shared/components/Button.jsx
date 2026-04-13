import React from 'react'

const Button = ({text}) => {
  return (
    <div>
         <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            {text}
            </button>
    </div>
  )
}

export default Button