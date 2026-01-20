"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-[#EAF7FB]">

      {/* LEFT SECTION */}
      <div className="hidden w-1/2 items-center justify-center rounded-r-[30px] bg-[#1E5468] px-12 py-10 lg:flex">
        <div className="max-w-md text-white">
          <h1 className="mb-6 text-4xl font-semibold">
            Your Health,{" "}
            <span className="text-[#5ED1C1]">Our Priority</span>
          </h1>

          <Image
            src="/img/imgRegister.png"
            alt="Doctors Illustration"
            width={400}
            height={320}
            className="w-full object-contain"
            priority
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex w-full items-center justify-center px-4 lg:w-1/2">
        <div className="w-full max-w-sm">

          <h2 className="mb-6 text-center text-2xl font-semibold text-[#1E5468]">
            Sign Up to Continue
          </h2>

          <form className="space-y-4">

            {/* Full Name */}
            <div>
              <label className="text-xs text-[#1E5468]">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5
                           text-sm text-gray-700 placeholder:italic placeholder:text-gray-300
                           focus:outline-none focus:ring-1 focus:ring-[#1E5468]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs text-[#1E5468]">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5
                           text-sm text-gray-700 placeholder:italic placeholder:text-gray-300
                           focus:outline-none focus:ring-1 focus:ring-[#1E5468]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-xs text-[#1E5468]">Password</label>

              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2.5 pr-10
                             text-sm text-gray-700 placeholder:italic placeholder:text-gray-300
                             focus:outline-none focus:ring-1 focus:ring-[#1E5468]"
                />

                {/* Eye Icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <Image
                    src={
                      showPassword
                        ? "/img/iconEye.png"
                        : "/img/iconEyeOff.png"
                    }
                    alt="Toggle password"
                    width={16}
                    height={16}
                    className="opacity-60 hover:opacity-100"
                  />
                </button>
              </div>

              <div className="mt-1 text-right">
                <Link
                  href="/forgot-password"
                  className="text-xs italic text-gray-400 hover:text-[#1E5468]"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-[#1E5468] py-2.5 text-sm font-medium
                         text-white transition hover:bg-[#174556]"
            >
              Sign Up
            </button>

            {/* Divider */}
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-gray-300" />
              <span className="text-xs text-gray-400">Or</span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>

            {/* Google Sign Up */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-md
                         border border-gray-400 py-2.5 text-sm text-gray-400
                         transition hover:bg-gray-50"
            >
              <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                width={16}
                height={16}
              />
              Sign Up with Google
            </button>

            {/* Footer */}
            <p className="text-center text-xs text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-[#1E5468]">
                Sign In
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  )
}



// "use client";

// import { useState } from "react";
// import axios from "@/lib/axios";

// export default function RegisterPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("/api/auth/register", form);
//       console.log("SUCCESS:", res.data);
//       alert("Register berhasil");
//     } catch (err: any) {
//       console.error(err.response?.data);
//       alert(err.response?.data?.message || "Error");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="Nama"
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />
//       <input
//         placeholder="Email"
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//       />
//       <button type="submit">Register</button>
//     </form>
//   );
// };
// >>>>>>> 1eae219d0affc069f30c0c0454b4582f8f9a0e5a
