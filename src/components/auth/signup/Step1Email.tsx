"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import AuthHeader from "../AuthHeader";

interface Step1EmailProps {
  onNext: () => void;
}

export default function Step1Email({ onNext }: Step1EmailProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://delta-project.liara.run/api/auth/start-registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.message || "ارسال ایمیل با مشکل مواجه شد.");

      localStorage.setItem("tempUserId", data.tempUserId);
      toast.success("کد تأیید به ایمیل ارسال شد.");
      onNext();
    } catch {
      toast.error("خطا در ارسال ایمیل");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AuthHeader
        title="ثبت‌ نام در آلفا"
        description="برای ثبت‌نام در آلفا می‌توانید با اکانت گوگل یا اپل خود و یا با ارسال کد تأیید به ایمیل خود اقدام کنید."
      />

      <label className="block text-sm font-yekan text-gray-700 dark:text-gray-200">
        ایمیل
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-3 rounded-auth w-full font-yekan dark:bg-dark-100 dark:border-lightGrey-100"
        placeholder="ایمیل خود را وارد کنید"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-primary hover:bg-primary-dark text-white p-3 rounded-auth w-full font-yekan transition dark:bg-main"
      >
        {loading ? "در حال ارسال..." : "ارسال کد تأیید"}
      </button>
      <p className="text-center text-sm font-yekan mt-4 text-gray-600 dark:text-gray-300">
        حساب کاربری دارید؟{" "}
        <a href="/Login" className="text-primary font-bold hover:underline">
          ورود به حساب
        </a>
      </p>
    </form>
  );
}
