import React from 'react'

// Reusable Input Component
const Input = ({ label, register, name, rules, error, ...props }) => {
    console.log("Input.jsx rendering ....")

  // props = remaining attributes like (type, placeholder, autoComplete)
  //...   ---> this is a rest operator
  console.log("props -->", props)

  return (
    <div>
      {/* Label for input field */}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <input
        {...props} // spread basic input props (type, placeholder, etc.)
        {...register(name, rules)} // connect input with react-hook-form + validation
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Show error message if validation fails */}
      {error && (
        <p className="text-red-700 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  )
}

export default Input