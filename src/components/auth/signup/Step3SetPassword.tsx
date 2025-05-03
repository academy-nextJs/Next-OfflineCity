"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import AuthHeader from "../AuthHeader";

interface Step3SetPasswordProps {
  onComplete: () => void;
}

export default function Step3SetPassword({
  onComplete,
}: Step3SetPasswordProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("رمز عبور و تکرار آن مطابقت ندارند.");
      return;
    }

    const tempUserId = localStorage.getItem("tempUserId");
    if (!tempUserId) {
      toast.error("شناسه موقت یافت نشد.");
      return;
    }

    try {
      const res = await fetch(
        "https://delta-project.liara.run/api/auth/complete-registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tempUserId,
            password,
            phoneNumber,
          }),
        }
      );

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.message || "ثبت اطلاعات نهایی با مشکل مواجه شد.");

      toast.success("ثبت‌ نام با موفقیت انجام شد!");
      localStorage.removeItem("tempUserId");

      onComplete();
    } catch {
      toast.error("مشکلی در ثبت‌ نام نهایی پیش آمد.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AuthHeader
        title="ثبت نام در آلفا"
        description="مشخصات خواسته شده را پر کنید"
      />

      <div>
        <label className="block mb-2 text-sm font-yekan text-gray-700 dark:text-gray-200">
          شماره موبایل
        </label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border p-3 rounded-auth w-full font-yekan dark:bg-dark-100 dark:border-lightGrey-100"
          placeholder="شماره موبایل"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-yekan text-gray-700 dark:text-gray-200">
          رمز عبور
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 rounded-auth w-full font-yekan dark:bg-dark-100 dark:border-lightGrey-100"
          placeholder="رمز عبور"
          required
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-yekan text-gray-700 dark:text-gray-200">
          تکرار رمز عبور
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border p-3 rounded-auth w-full font-yekan dark:bg-dark-100 dark:border-lightGrey-100"
          placeholder="تکرار رمز عبور"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark text-white p-3 rounded-auth w-full font-yekan transition dark:bg-main"
      >
        ثبت‌ نام نهایی
      </button>
    </form>
  );
}
