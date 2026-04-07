import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  let {registeredUser , setRegisteredUser} = useContext(Auth)
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange"
  });

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    let newUser = [...registeredUser , data]
    setRegisteredUser(newUser)
    localStorage.setItem("reg-users" , JSON.stringify(newUser))//localStorage me set kar rhe hai registered user ka data
    reset();
    toast.success('User Registered Successfully')
  };

  let navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          Register
        </h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Name */}
          <div>
            <input
              {...register("name", {
                required: "Name is required"
              })}
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter valid email"
                }
              })}
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters"
                }
              })}
              type="password"
              placeholder="Enter password"
              autoComplete="new-password"   // 🔥 FIX
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match"
              })}
              type="password"
              placeholder="Confirm password"
              autoComplete="new-password"   // 🔥 FIX
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            disabled={!isValid}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            Register
          </button>
        </form>

        {/* Bottom Text */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Login here
          </span>
        </p>

      </div>
    </div>
  );
};

export default Register;