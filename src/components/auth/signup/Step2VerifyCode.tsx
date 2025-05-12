"use client";

import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import AuthHeader from "../AuthHeader";
import axios from "axios";

interface Step2VerifyCodeProps {
  onNext: () => void;
}

export default function Step2VerifyCode({ onNext }: Step2VerifyCodeProps) {
  const [codeDigits, setCodeDigits] = useState(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

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
      return toast.error("کد را کامل وارد کنید.");
    }

    const tempUserId = localStorage.getItem("tempUserId");

    if (!tempUserId) {
      return toast.error("شناسه موقت یافت نشد.");
    }

    axios
      .post("https://delta-project.liara.run/api/auth/verify-email", {
        tempUserId: Number(tempUserId),
        verificationCode: code,
      })
      .then((res) => {
        localStorage.setItem("userId", res.data.userId);
        onNext();
      })
      .catch((error) => {
        console.log(error);
        toast.error("مشکلی پیش آمد.");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-yekan">
      <AuthHeader
        title="ثبت نام در آلفا"
        description="لطفاً کد تأیید ارسال‌ شده به ایمیلت را وارد کن."
      />

      <div dir="ltr" className="flex justify-center gap-2 mt-4">
        {codeDigits.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="w-12 h-12 text-center text-lg border border-gray-300 rounded-2xl text-black dark:text-white dark:bg-dark-100 dark:border-lightGrey-100"
            dir="ltr"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark text-white transition-all p-3 rounded-auth w-full text-sm font-yekan dark:bg-main"
      >
        تایید کد
      </button>
    </form>
  );
}
