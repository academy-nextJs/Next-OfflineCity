"use client";

import { useState } from "react";
import { toast } from "react-toastify";

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

      if (!res.ok) {
        throw new Error(data?.message || "ارسال ایمیل با خطا مواجه شد.");
      }

      localStorage.setItem("tempUserId", data.tempUserId);
      toast.success("کد تأیید به ایمیل ارسال شد.");
      onNext();
    } catch (error: unknown) {
      if (
        typeof error === "object" &&
        error !== null &&
        "message" in error &&
        typeof (error as { message: string }).message === "string"
      ) {
        toast.error((error as { message: string }).message);
      } else {
        toast.error("مشکلی پیش آمد.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold font-yekan text-center">
        ثبت‌ نام - مرحله اول
      </h2>
      <label className="block font-yekan text-sm text-gray-700 dark:text-gray-200">
        ایمیل
      </label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        className="border p-3 rounded w-full"
        placeholder="ایمیل خود را وارد کنید"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-white w-full p-3 rounded font-yekan"
      >
        {loading ? "در حال ارسال..." : "ارسال کد تأیید"}
      </button>
    </form>
  );
}
