import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const {handleLogin} = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      identifier: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data) => {
    const payload = {
      identifier: data.identifier.trim(),
      password: data.password,
      rememberMe: data.rememberMe,
    };

    console.log(payload);

   await handleLogin(payload);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-gray-400">
            Login to continue to your account
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          {/* Email or Username */}

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Email or Username
            </label>

            <input
              type="text"
              autoComplete="username"
              placeholder="Enter your email or username"
              {...register("identifier", {
                required: "Email or Username is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              })}
              className={`w-full rounded-lg bg-gray-800 px-4 py-3 text-white outline-none border transition
              ${
                errors.identifier
                  ? "border-red-500"
                  : "border-gray-700 focus:border-blue-500"
              }`}
            />

            {errors.identifier && (
              <p className="mt-1 text-sm text-red-500">
                {errors.identifier.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm text-gray-300">
                Password
              </label>

              <button
                type="button"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <input
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",

                minLength: {
                  value: 8,
                  message: "Minimum 8 characters",
                },
              })}
              className={`w-full rounded-lg bg-gray-800 px-4 py-3 text-white outline-none border transition
              ${
                errors.password
                  ? "border-red-500"
                  : "border-gray-700 focus:border-blue-500"
              }`}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me */}

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <input
                type="checkbox"
                className="h-4 w-4 accent-blue-600"
                {...register("rememberMe")}
              />

              Remember me
            </label>
          </div>

          {/* Login Button */}

          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-700"></div>
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="h-px flex-1 bg-gray-700"></div>
        </div>

        {/* Register */}

        <p className="text-center text-gray-400">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="font-medium text-blue-500 hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;