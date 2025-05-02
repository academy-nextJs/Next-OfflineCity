"use client";

import { useState } from "react";
import { toast } from "react-toastify";

interface Step3SetPasswordProps {
  onComplete: () => void;
}

export default function Step3SetPassword({
  onComplete,
}: Step3SetPasswordProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber || !password || !confirmPassword) {
      toast.error("لطفاً تمام فیلدها را پر کنید.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("رمز عبور با تکرار آن یکسان نیست.");
      return;
    }

    const tempUserId = localStorage.getItem("tempUserId");
    if (!tempUserId) {
      toast.error("کاربر یافت نشد.");
      return;
    }

    setLoading(true);

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

      if (!res.ok) {
        throw new Error(data?.message || "ثبت‌ نام کامل نشد.");
      }

      toast.success("ثبت‌ نام با موفقیت انجام شد!");
      localStorage.removeItem("tempUserId");
      onComplete();
    } catch (error: unknown) {
      if (
        typeof error === "object" &&
        error !== null &&
        "message" in error &&
        typeof (error as { message: string }).message === "string"
      ) {
        toast.error((error as { message: string }).message);
      } else {
        toast.error("مشکلی در ثبت‌نام پیش آمد.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-yekan">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        ثبت‌ نام - مرحله سوم
      </h2>

      <div>
        <label className="block mb-2">شماره موبایل</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border p-3 rounded w-full"
          placeholder="091112862773 مثلا"
        />
      </div>

      <div>
        <label className="block mb-2">رمز عبور</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 rounded w-full"
        />
      </div>

      <div>
        <label className="block mb-2">تکرار رمز عبور</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border p-3 rounded w-full"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-white w-full p-3 rounded"
      >
        {loading ? "در حال ثبت‌ نام..." : "تکمیل ثبت‌ نام"}
      </button>
    </form>
  );
}
