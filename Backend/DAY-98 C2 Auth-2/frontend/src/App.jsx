import React, { useState } from "react";
import { useForm } from "react-hook-form";

const GoogleLogo = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.31 9.14 5.38 12 5.38z"
      fill="#EA4335"
    />
  </svg>
);

const App = () => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(isRegisterMode ? "Register data:" : "Login data:", data);
    reset();
  };

  const signInHandler = () => {
    window.location.href = "http://localhost:3000/api/auth/google";
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_12%_15%,rgba(56,189,248,0.22),transparent_28%),radial-gradient(circle_at_88%_20%,rgba(244,114,182,0.18),transparent_26%),linear-gradient(135deg,#f8fafc_0%,#eef2ff_48%,#fdf2f8_100%)] px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <main className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl items-center justify-center">
        <section className="grid w-full overflow-hidden rounded-[28px] border border-white/80 bg-white/85 shadow-2xl shadow-slate-300/60 backdrop-blur-xl lg:grid-cols-[1.08fr_0.92fr]">
          <div className="hidden bg-[linear-gradient(145deg,#111827_0%,#0f172a_45%,#172554_100%)] p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-black tracking-tight text-slate-950 shadow-lg shadow-black/20">
                RP
              </div>
              <div className="mt-16 max-w-md">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
                  Secure access
                </p>
                <h1 className="mt-4 text-5xl font-black leading-tight">
                  Welcome back to your workspace.
                </h1>
                <p className="mt-5 text-base leading-7 text-slate-300">
                  Sign in to continue managing your account with a clean,
                  focused dashboard experience.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                ["99.9%", "Uptime"],
                ["2FA", "Ready"],
                ["24/7", "Support"],
              ].map(([value, label]) => (
                <div
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-sm backdrop-blur"
                  key={label}
                >
                  <p className="text-2xl font-bold">{value}</p>
                  <p className="mt-1 text-sm text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="px-5 py-8 sm:px-10 sm:py-12 lg:px-14">
            <div className="mx-auto w-full max-w-md">
              <div className="mb-8 flex items-center justify-between lg:hidden">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black tracking-tight text-white shadow-lg shadow-slate-300">
                  RP
                </div>
                <span className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                  Protected
                </span>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                  {isRegisterMode ? "Create account" : "Account login"}
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  {isRegisterMode ? "Sign up" : "Sign in"}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {isRegisterMode
                    ? "Create your account with a username, email, and password."
                    : "Enter your details below to access your account."}
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                {isRegisterMode && (
                  <label className="block">
                    <span className="text-sm font-bold text-slate-700">
                      Username
                    </span>
                    <input
                      {...register("username", {
                        required: "Username is required",
                        minLength: {
                          value: 3,
                          message: "Username must be at least 3 characters",
                        },
                      })}
                      className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-950 shadow-sm outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                      placeholder="rohit123"
                      type="text"
                    />
                    {errors.username && (
                      <p className="mt-2 text-sm font-medium text-rose-600">
                        {errors.username.message}
                      </p>
                    )}
                  </label>
                )}

                <label className="block">
                  <span className="text-sm font-bold text-slate-700">
                    Email address
                  </span>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-950 shadow-sm outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    placeholder="you@example.com"
                    type="email"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm font-medium text-rose-600">
                      {errors.email.message}
                    </p>
                  )}
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-slate-700">
                    Password
                  </span>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-950 shadow-sm outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    placeholder="Enter your password"
                    type="password"
                  />
                  {errors.password && (
                    <p className="mt-2 text-sm font-medium text-rose-600">
                      {errors.password.message}
                    </p>
                  )}
                </label>

                <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex items-center gap-2 font-semibold text-slate-600">
                    <input
                      className="h-4 w-4 rounded border-slate-300 accent-indigo-600 focus:ring-indigo-500"
                      type="checkbox"
                    />
                    Remember me
                  </label>
                  <a
                    className="font-bold text-indigo-600 transition hover:text-indigo-700"
                    href="#forgot-password"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  className="flex h-12 w-full items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-extrabold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 active:translate-y-0"
                  type="submit"
                >
                  {isRegisterMode ? "Create account" : "Sign in"}
                </button>

                <div className="flex items-center gap-4">
                  <span className="h-px flex-1 bg-slate-200" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                    or
                  </span>
                  <span className="h-px flex-1 bg-slate-200" />
                </div>

                <button
                  className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-5 text-sm font-extrabold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-slate-100 active:translate-y-0"
                  type="button"
                  onClick={signInHandler}
                >
                  <GoogleLogo />
                  Sign in with Google
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-500">
                {isRegisterMode ? "Already have an account?" : "New here?"}{" "}
                <button
                  onClick={() => {
                    setIsRegisterMode((currentMode) => !currentMode);
                    reset();
                  }}
                  className="font-extrabold text-indigo-600 transition hover:text-indigo-700"
                  type="button"
                >
                  {isRegisterMode ? "Sign in" : "Create an account"}
                </button>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
