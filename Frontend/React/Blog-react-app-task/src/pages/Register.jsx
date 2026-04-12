import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Auth } from "../Context/AuthContext";
import { Link } from "react-router";

const inputBaseClass =
  "h-12 w-full rounded-2xl border border-[#D4D8DE] bg-white px-4 text-[15px] text-[#111827] shadow-[0_1px_2px_rgba(16,24,40,0.05)] outline-none transition placeholder:text-[#6B7280] focus:border-[#1A67AD] focus:ring-4 focus:ring-[#1A67AD]/10";

const Register = () => {
  console.log("Register Rendering..");
  let {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    setValue,
    
  } = useForm({
    mode: "onChange",
    defaultValues: {
      accountType: "author",
    },
  });
  //AuthContext
  let { accountType, setAccountType, registeredUser, setRegisteredUser } =
    useContext(Auth);

  

  useEffect(() => {
    setValue("accountType", accountType);
  }, [accountType, setValue]);

  //Form Submit
  let handleRegisterFormSubmit = (data) => {
    console.log("Registered user", data);
    let newUser = [...registeredUser, data];
    setRegisteredUser(newUser);

    //store register user info in Local storage
    localStorage.setItem("reg-users", JSON.stringify(newUser));

    reset();
    alert("user registered");
  };
  return (
    <div className="mx-4 my-10 w-full max-w-[470px] rounded-[32px] border border-white/80 bg-white/92 px-6 py-8 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur sm:px-8">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#1A67AD] shadow-[0_16px_28px_rgba(26,103,173,0.24)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-white"
          >
            <path d="M13 21h8" />
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
          </svg>
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1A67AD]">
          Join Inkwell
        </p>
        <h2 className="mt-3 text-[28px] font-semibold text-[#111827]">
          Create your account
        </h2>
        <p className="mt-3 text-[15px] leading-6 text-[#6B7280]">
          Join Inkwell to start reading or writing
        </p>
      </div>

      <form
        onSubmit={handleSubmit(handleRegisterFormSubmit)}
        className="space-y-7"
      >
        {/* User Name */}
        <div className="space-y-2.5">
          <label
            htmlFor="name"
            className="block text-[15px] font-semibold text-black"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className={inputBaseClass}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        {/* User Email */}
        <div className="space-y-2.5">
          <label
            htmlFor="email"
            className="block text-[15px] font-semibold text-black"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className={inputBaseClass}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
              //validate: (value) => {}------>Ye custom validation function hai (React Hook Form ka)
              //value = jo user ne email input me likha hai
              validate: (value) => {
                const isExist = registeredUser.find(
                  (user) => user.email === value,
                );
                return !isExist || "Email already exists";
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* password */}
        <div className="space-y-2.5">
          <label
            htmlFor="password"
            className="block text-[15px] font-semibold text-black"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            className={inputBaseClass}
            {...register("password", {
              minLength: {
                value: 6,
                message: "Minimum length should be 6",
              },
              required: "Pasword is required",
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="space-y-2.5">
          <label
            htmlFor="confirmPassword"
            className="block text-[15px] font-semibold text-black"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className={inputBaseClass}
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        {/* Account Type */}
        <div className="space-y-3">
          <label className="block text-[15px] font-semibold text-black">
            Account Type
          </label>

          <div className="grid grid-cols-2 gap-3">
            {/* Reader */}
            <button
              type="button"
              onClick={() => {
                setAccountType("reader");
              }}
              className={`rounded-2xl border px-4 py-4 text-center shadow-sm transition
        ${
          accountType === "reader"
            ? "border-[#1A67AD] bg-[#EDF4FF] shadow-[0_10px_20px_rgba(26,103,173,0.08)]"
            : "border-[#D4D8DE] bg-white hover:border-[#1A67AD]/60"
        }`}
            >
              <p className="text-[15px] font-semibold text-black">Reader</p>
              <p className="text-sm text-[#4B5563]">Read articles</p>
            </button>

            {/* Author */}
            <button
              type="button"
              onClick={() => {
                setAccountType("author");
              }}
              className={`rounded-2xl border px-4 py-4 text-center shadow-sm transition
        ${
          accountType === "author"
            ? "border-[#1A67AD] bg-[#EDF4FF] shadow-[0_10px_20px_rgba(26,103,173,0.08)]"
            : "border-[#D4D8DE] bg-white hover:border-[#1A67AD]/60"
        }`}
            >
              <p className="text-[15px] font-semibold text-black">Author</p>
              <p className="text-sm text-[#4B5563]">Write & publish</p>
            </button>
          </div>
          {/* //Rhf me input ka hi data form submit me bhjte h */}
          <input type="hidden" {...register("accountType")} />
        </div>

        {/* Button */}
        <div className="space-y-4 pt-1">
          <button
            type="submit"
            className="h-12 w-full rounded-2xl bg-[#1A67AD] text-[15px] font-semibold text-white shadow-[0_16px_30px_rgba(26,103,173,0.22)] transition hover:bg-[#145994]"
          >
            Create Account
          </button>

          <p className="text-center text-[15px] text-[#6B7280]">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="font-medium text-[#1A67AD] hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
