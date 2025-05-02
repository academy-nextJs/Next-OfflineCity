"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

interface Step2VerifyCodeProps {
  onNext: () => void;
}

export default function Step2VerifyCode({ onNext }: Step2VerifyCodeProps) {
  const [codeDigits, setCodeDigits] = useState(Array(6).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (value: string, index: number) => {
    if (/^\d?$/.test(value)) {
      const newDigits = [...codeDigits];
      newDigits[index] = value;
      setCodeDigits(newDigits);

      if (value && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !codeDigits[index] &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const code = codeDigits.join("");
    if (code.length < 6) {
      toast.error("کد را کامل وارد کنید.");
      return;
    }

    const tempUserId = localStorage.getItem("tempUserId");
    if (!tempUserId || typeof tempUserId !== "string") {
      toast.error("اطلاعات کاربر یافت نشد.");
      return;
    }

    try {
      const res = await fetch(
        "https://delta-project.liara.run/api/auth/verify-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tempUserId: tempUserId.trim(),
            code: code.trim(),
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "کد اشتباه است.");
      }

      toast.success("کد تایید شد.");
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
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 font-yekan text-center text-gray-900 dark:text-white">
        ثبت‌ نام - مرحله دوم
      </h2>

      <p className="text-center text-sm text-gray-600 dark:text-gray-300 font-yekan">
        لطفاً کد تأیید ارسال‌ شده به ایمیلت رو وارد کن.
      </p>

      <div className="flex justify-center gap-2 mt-4">
        {codeDigits.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="w-12 h-12 text-center border border-gray-300 dark:border-gray-600 rounded font-yekan text-lg"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark text-white transition-all p-3 rounded-lg w-full text-sm font-yekan"
      >
        تایید کد
      </button>
    </form>
  );
}
