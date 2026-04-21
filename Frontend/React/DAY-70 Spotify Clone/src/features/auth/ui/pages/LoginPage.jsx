import React from "react";

const LoginPage = () => {
  return (
    <div className="h-screen  bg-black flex items-center justify-center">
      <div className=" w-full max-w-md text-white px-6  ">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
            alt="spotify"
            className="w-10"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome back
        </h1>

        {/* Email Input */}
        <div className="mb-4">
          <label className="text-sm mb-2 block">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md bg-black border border-gray-700 focus:outline-none focus:border-white"
          />
        </div>

        {/* Continue Button */}
        <button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-full mb-4">
          Continue
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 border border-gray-700 py-3 rounded-full hover:border-white">
            📱 Continue with phone number
          </button>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-700 py-3 rounded-full hover:border-white">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5"
            />
            Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-700 py-3 rounded-full hover:border-white">
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="facebook"
              className="w-5"
            />
            Continue with Facebook
          </button>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-700 py-3 rounded-full hover:border-white">
            🍎 Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;