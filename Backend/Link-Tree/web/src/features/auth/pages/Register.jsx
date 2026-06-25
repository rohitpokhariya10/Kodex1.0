import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const {handleRegister} = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    const payload = {
      email: data.email.trim(),
      username: data.username.trim(),
      password: data.password,
    };

    console.log(payload);

    await handleRegister(payload);
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Create Account 🚀
          </h1>

          <p className="text-gray-400 mt-2">
            Register to get started
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          {/* Email */}

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Email
            </label>

            <input
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",

                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
              className={`w-full rounded-lg bg-gray-800 px-4 py-3 text-white outline-none border transition
              ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-700 focus:border-blue-500"
              }`}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Username */}

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Username
            </label>

            <input
              type="text"
              autoComplete="username"
              placeholder="Choose username"
              {...register("username", {
                required: "Username is required",

                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },

                maxLength: {
                  value: 20,
                  message: "Maximum 20 characters",
                },
              })}
              className={`w-full rounded-lg bg-gray-800 px-4 py-3 text-white outline-none border transition
              ${
                errors.username
                  ? "border-red-500"
                  : "border-gray-700 focus:border-blue-500"
              }`}
            />

            {errors.username && (
              <p className="mt-1 text-sm text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Password
            </label>

            <input
              type="password"
              autoComplete="new-password"
              placeholder="Create password"
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

          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="h-px flex-1 bg-gray-700"></div>
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="h-px flex-1 bg-gray-700"></div>
        </div>

        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="font-medium text-blue-500 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;