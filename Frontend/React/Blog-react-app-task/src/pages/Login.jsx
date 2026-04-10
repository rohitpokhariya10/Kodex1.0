import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Auth } from "../Context/AuthContext"; // adjust path if needed
import { Link, useNavigate } from "react-router";

const Login = () => {
  let { setLoggedInUser, registeredUser , loggedInUser } = useContext(Auth);
  const inputClass =
    "h-12 w-full rounded-2xl border border-[#D6DCE5] bg-white/90 px-4 text-[15px] text-[#0F172A] shadow-[0_1px_2px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-[#94A3B8] focus:border-[#1A67AD] focus:ring-4 focus:ring-[#1A67AD]/10";

  const {
    register,
    handleSubmit,
    formState: { errors  },
    reset,
  } = useForm({
    mode:"onChange"
  });
  let navigate = useNavigate()

  const handleLoginFormSubmit = (data) => {
   // console.log(data)
    const isValidUser = registeredUser.find(
      (user) =>
        user.email === data.email &&
        user.password === data.password
    );

    if (isValidUser) {
      setLoggedInUser(isValidUser);
      //console.log(isValidUser)
      console.log(loggedInUser)
      alert("Loggined Successfully")
      console.log("✅ Login success");
      reset();
      navigate('/')//loggedinUser ko home me lejayega
      localStorage.setItem("logined-user" , JSON.stringify(data))
    } else {
      console.log("❌ Invalid credentials");
    }
  };

  return (
    <div className="w-full max-w-[460px] overflow-hidden rounded-[32px] border border-white/80 bg-white/90 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur">
      
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1A67AD]">
          Welcome Back
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[#111827]">Sign in to your writer account</h2>
        <p className="mt-3 text-sm leading-6 text-[#64748B]">
          Sign in to your account to continue
        </p>
      </div>

      <form onSubmit={handleSubmit(handleLoginFormSubmit)} className="mt-8">
        <div className="flex flex-col gap-5">

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#0F172A]">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
              })}
              className={inputClass}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#0F172A]">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
              className={inputClass}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-7 flex flex-col gap-4">
          <button
            type="submit"
            className="h-12 w-full rounded-2xl bg-[#1A67AD] text-sm font-semibold text-white shadow-[0_16px_30px_rgba(26,103,173,0.22)] transition hover:bg-[#145994]"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-[#64748B]">
            Don&apos;t have an account?{" "}
            <Link to="/auth/register" className="font-semibold text-[#1A67AD] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
