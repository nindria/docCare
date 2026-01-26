"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Email dan password wajib diisi")
      return
    }

    setError("")
    console.log("Login success", { email, password })
    // router.push("/dashboard")
  }

  const handleGoogleLogin = () => {
    alert("Google Login clicked")
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#EAF7FB]">

      {/* LEFT SECTION */}
      <div className="hidden w-1/2 items-center justify-center rounded-r-[30px] bg-[#1E5468] px-12 py-10 lg:flex">
        <div className="max-w-md text-center text-white">
          <h1 className="mb-6 text-4xl font-semibold">
            Join Our <span className="text-[#5ED1C1]">DocCare</span> Platform
          </h1>

          <Image
            src="/img/imgLogin.png"
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
            Sign In to Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* ERROR MESSAGE */}
            {error && (
              <div className="rounded-md bg-red-100 px-3 py-2 text-xs text-red-600">
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="text-xs text-[#1E5468]">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter your email"
                className={`mt-1 w-full rounded-md border px-3 py-2.5 text-sm outline-none
                ${error && !email ? "border-red-400" : "border-gray-300"}
                focus:ring-1 focus:ring-[#1E5468]`}
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-xs text-[#1E5468]">Password</label>

              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Enter your password"
                  className={`w-full rounded-md border px-3 py-2.5 pr-10 text-sm outline-none
                  ${error && !password ? "border-red-400" : "border-gray-300"}
                  focus:ring-1 focus:ring-[#1E5468]`}
                />

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

            {/* Sign In */}
            <button
              type="submit"
              className="w-full rounded-md bg-[#1E5468] py-2.5
              text-sm font-medium text-white transition hover:bg-[#174556]"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-gray-300" />
              <span className="text-xs text-gray-400">Or</span>
              <div className="h-px flex-1 bg-gray-300" />
            </div>

            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex w-full items-center justify-center gap-2
              rounded-md border border-gray-400 py-2.5
              text-sm text-gray-500 transition hover:bg-gray-50"
            >
              <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                width={16}
                height={16}
              />
              Sign In with Google
            </button>

            {/* Footer */}
            <p className="text-center text-xs text-gray-500">
              Don’t have an account?{" "}
              <Link href="/register" className="font-medium text-[#1E5468]">
                Sign Up
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  )
}
