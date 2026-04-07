import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {

  let {loggedInUser  , setLoggedInUser , registeredUser , setRegisteredUser } = useContext(Auth)

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  //useForm ke andar default values bhi de skte hain
  console.log("errors-->" ,errors);
  let handleFormSubmit = (data) => {
    //console.log(data);
    let isValidUser = registeredUser.find((elem) => {
      //console.log(elem.email , data.email , elem.password , data.password)
      return elem.email == data.email && elem.password == data.password
    })
    console.log("valid User is --->" , isValidUser)
    if(!isValidUser){
     toast.error("Aapki details Galat hai ji")
    }
 else{
     toast.success('Areeee Aaaap tuh humare trusted user ho jii..')
 }
    reset();
  };

  let navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  // regex
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              autoComplete="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password length should pe 8",
                },
              })}
              autoComplete="current-password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>

          {/* Button */}
          <button
            // disabled={!isValid}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Bottom Text */}
        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <span 
           onClick={()=> navigate(`/register`)}
          className="text-blue-600 cursor-pointer hover:underline">
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
