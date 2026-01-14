"use client"
import { useState } from "react"



export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="h-screen flex bg-[#EAF7FB] overflow-hidden">
      
      {/* LEFT SECTION */}
      <div className="hidden text-center whitespace-nowrap lg:flex w-1/2 bg-[#1E5468] rounded-r-[30px] items-center justify-center px-12 py-10">
        <div className="text-white max-w-md">
          <h1 className="text-4xl font-semibold mb-6">
           Join Our{" "} <span className="text-[#5ED1C1]">DocCare</span>{" "}Platform
          </h1>

          <img
            src="/img/imgLogin.png"
            alt="Doctors Illustration"
            className="w-full max-h-[320px] object-contain"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
<div className="w-full lg:w-1/2 flex items-center justify-center px-4">
  <div className="w-full max-w-sm">

    <h2 className="text-2xl font-semibold text-center text-[#1E5468] mb-6">Sign Up for an Account</h2>

    <form className="space-y-4">

      {/* Email */}
      <div>
        <label className="text-xs text-[#1E5468]">Email</label>
        <input
          type="email"
        placeholder="Enter your email"
            className="w-full mt-1 px-3 py-2.5 rounded-md border border-gray-300
                    text-sm text-gray-700 placeholder:text-gray-300 placeholder:italic
                    focus:outline-none focus:ring-1 focus:ring-[#1E5468]" />
        </div>

    {/* Password */}
    <div>
    <label className="text-xs text-[#1E5468]">Password</label>

    <div className="relative mt-1">
        <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        className="w-full px-3 py-2.5 pr-10 rounded-md border border-gray-300
                    text-sm text-gray-700
                    placeholder:text-gray-300 placeholder:italic
                    focus:outline-none focus:ring-1 focus:ring-[#1E5468]"
        />

    {/* Eye Icon */}
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2">
      <img
        src={showPassword ? "/img/iconEye.png": "/img/iconEyeOff.png"}
        alt="Toggle password"
        className="w-4 h-4 opacity-60 hover:opacity-100"/>
    </button>
  </div>

  <div className="text-right mt-1">
    <a href="#" className="text-xs italic text-gray-400 hover:text-[#1E5468]">
      Forgot password?
    </a>
  </div>
</div>


      {/* Button */}
      <button
        type="submit"
        className="w-full bg-[#1E5468] text-white py-2.5 rounded-md text-sm font-medium
                   hover:bg-[#174556] transition"
      >
        Sign Up
      </button>

      {/* Divider */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-gray-300" />
        <span className="text-xs text-gray-400">Or</span>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {/* Google */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 border border-gray-400
                   py-2.5 rounded-md text-sm text-gray-400 hover:bg-gray-50 transition"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-4 h-4"/> Sign Up with Google
      </button>

      {/* Footer */}
      <p className="text-center text-xs text-gray-500">
        Don’t have an account{" "}
        <a href="/login" className="text-[#1E5468] font-medium">
          Sign In
        </a>
      </p>

    </form>
  </div>
</div>


    </div>
  )
}
