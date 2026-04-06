import React from "react";

const Register = ({ setIsToggle }) => {
  console.log(setIsToggle);
  return (
    <div className="register   w-[29%] bg-white flex flex-col p-[35px] rounded-xl shadow-xl border border-gray-200">
      <div className="heading-register flex flex-col gap-[5px] mb-5">
        <h1 className="text-3xl font-bold text-center">Create account</h1>
        <h1 className="text-center text-sm text-gray-600">Join us today</h1>
      </div>

      <div className="inputs flex flex-col gap-[20px]">
         <div>
          <label className="block text-sm font-medium text-gray-800 mb-1.5">
            Email
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1.5">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1.5">
            Password
          </label>
          <input
            placeholder="••••••••"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
          />
        </div>

        <button className="w-full bg-gray-900 p-3 text-white rounded-2xl font-semibold">
          Sign up
        </button>

        <div className="register-bottom text-center ">
          <h1 className="text-[#707D8F]">
            Already have an account?{" "}
            <span
              className="text-[#1D293D] font-semibold"
              onClick={() => {
                setIsToggle(false);
              }}
            >
              Sign in
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;