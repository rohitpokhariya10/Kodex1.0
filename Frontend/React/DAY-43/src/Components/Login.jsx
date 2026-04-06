
 function LoginForm({setIsToggle}) {
 

  return (
    <div className="h-[100%]  flex items-center justify-center w-[60%]">
      <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome back</h1>
          <p className="text-gray-500 text-sm">Sign in to your account</p>
        </div>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1.5">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
             
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1.5">Password</label>
            <input
              
              placeholder="••••••••"
             
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            />
          </div>
          <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3.5 rounded-xl transition duration-200 mt-2">
            Sign in
          </button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <span className="font-semibold text-gray-900 cursor-pointer hover:underline"
           onClick={()=>{
                   setIsToggle(true)
              }}
          >Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm