import  { useState } from 'react'

const App = () => {
  console.log('rendering....')
  const [arr, setArr] = useState(["Rahul" , "sneha" , "Rohit"])
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className='bg-black min-h-screen text-white flex flex-col items-center justify-center gap-4'>
      <h1 className={`${isVisible ? 'block' : 'hidden'}`}>
        Name Changed</h1>
      {
        arr.map((elem, index) => {
          return (
            <div 
              key={index}
              className={`bg-gray-800 px-6 py-2 rounded-lg shadow-md text-lg
               ${index == 1 ? 'text-red-500': ''
               }`}
            >
              {elem}
            </div>
          )
        })
      }

      <button
        className='mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition'
        onClick={() => {
          // arr[1] = 'preeti'
          // setArr([...arr])


          //2 way to handle Array in useState()
          setIsVisible(true)
          let newArr =[...arr]
          newArr[1] = 'preeti'
          setArr(newArr)
          //batching perform hogi isme--> Both state updates happen in one render cycle after the event completes.
        }}
      >
        Change name
      </button>
      {}

    </div>
  )
}

export default App