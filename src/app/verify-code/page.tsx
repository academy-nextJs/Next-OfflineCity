"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "@/utils/services/interceptor/axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export default function VerifyCodePage() {
  const router = useRouter();
  const [code, setCode] = useState("");

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!code) {
      toast.error("کد تایید را وارد کنید.");
      return;
    }

    try {
      const response = await axios.post("/auth/verify", { code });

      const token = response.data.token;
      localStorage.setItem("token", token);

      toast.success("کد تایید شد!");
      router.push("/");
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const data = error.response?.data as { message?: string };
        toast.error(data?.message || "کد تایید اشتباه است.");
        console.error(error);
      } else {
        toast.error("مشکلی پیش آمد.");
        console.error(error);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center font-yekan">
          وارد کردن کد تایید
        </h2>

        <form onSubmit={handleVerify} className="space-y-6">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="کد تایید را وارد کنید"
            className="border border-gray-300 p-3 rounded-lg w-full text-sm font-yekan text-center"
          />

          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark transition-all text-white p-3 rounded-lg w-full text-sm font-yekan"
          >
            تایید کد
          </button>
        </form>
      </div>
    </div>
  );
}

function isAxiosError(error: unknown): error is AxiosError {
  return typeof error === "object" && error !== null && "isAxiosError" in error;
}
