"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "@/utils/services/interceptor/axios";
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
    } catch (error: any) {
      console.error(error.response?.data || error.message);
      toast.error(error.response?.data?.message || "کد تایید اشتباه است.");
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
