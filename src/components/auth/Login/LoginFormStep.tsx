"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import LoginHeader from "../LoginHeader";
import Link from "next/link";
import OAuthButtons from "../OAuthButtons";

export default function LoginFormStep() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("ایمیل و رمز عبور را وارد کنید.");
      return;
    }

    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      toast.error("ایمیل یا رمز عبور اشتباه است.");
    } else {
      toast.success("ورود موفقیت‌آمیز بود!");
      window.location.href = "/";
    }

    setLoading(false);
  };

  return (
    <div className="space-y-6 font-yekan">
      <LoginHeader />
      <OAuthButtons />

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">
            ایمیل
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="dark:border p-3 rounded-[31px] w-full dark:bg-dark-100"
            placeholder="ایمیل را وارد کنید"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-700 dark:text-gray-200">
            رمز عبور
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="dark:border p-3 rounded-[31px] w-full dark:bg-dark-100"
            placeholder="رمز عبور را وارد کنید"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-main text-white w-full p-3 rounded-[31px]"
        >
          {loading ? "در حال ورود..." : "ورود به حساب"}
        </button>
      </form>

      <p className="text-center text-sm font-yekan mt-4 text-gray-600 dark:text-gray-300">
        حساب کاربری ندارید؟{" "}
        <Link href="/Signup" className="text-main font-bold hover:underline">
          ثبت‌ نام در آلفا
        </Link>
      </p>
    </div>
  );
}
