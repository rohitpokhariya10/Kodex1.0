import { useRef} from "react";

const Register = ({ setIsToggle }) => {
 
   let inpRef = useRef({})
   console.log(inpRef)
  


   function handleSubmit(e){
    e.preventDefault()
    console.log(inpRef.current.name)
    console.log("Username --->",inpRef.current.name.value)
    console.log("Password ---->" , inpRef.current.name.value)

   }
 
  return (
    <div className="register w-[29%] bg-white flex flex-col p-[35px] rounded-xl shadow-xl border border-gray-200">
      <div className="heading-register flex flex-col gap-[5px] mb-5">
        <h1 className="text-3xl font-bold text-center">Create account</h1>
        <h1 className="text-center text-sm text-gray-600">Join us today</h1>
      </div>

      {/* FORM START */}
      <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-[20px]">

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1.5">
            Name
          </label>
          <input
       
            type="text"
            name="name"
            autoComplete="username"
            ref={(e)=>{inpRef.current.name = e}}
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm"
          />
        </div>

       

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1.5">
            Password
          </label>
          <input
            type="password"
            name="password"
            // .password--> ye dynamic key banrhi hai usme input element (e) store ho rha hai
            ref={(e)=>{inpRef.current.password = e}}
            autoComplete="current-password"
            placeholder="••••••••"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm"
          />
        </div>

        {/* Submit */}
        <button
         
          className="w-full bg-gray-900 p-3 text-white rounded-2xl font-semibold"
        >
          Sign up
        </button>

        {/* Bottom */}
        <div className="register-bottom text-center">
          <h1 className="text-[#707D8F]">
            Already have an account?{" "}
            <span
              className="text-[#1D293D] font-semibold cursor-pointer"
              onClick={() => setIsToggle(false)}
            >
              Sign in
            </span>
          </h1>
        </div>
      </form>
      {/* ✅ FORM END */}
    </div>
  );
};

export default Register;