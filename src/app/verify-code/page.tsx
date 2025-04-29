"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "@/utils/services/interceptor/axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import AuthLayout from "@/components/auth/AuthLayout";

export default function VerifyCodePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [code, setCode] = useState("");

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!code) {
      toast.error("کد تایید را وارد کنید.");
      return;
    }

    try {
      const response = await axios.post("/auth/verify", { code, email });

      const token = response.data.token;
      localStorage.setItem("token", token);

      toast.success("کد تایید شد!");
      router.push("/");
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const data = error.response?.data as { message?: string };
        toast.error(data?.message || "کد تایید اشتباه است.");
      } else {
        toast.error("مشکلی پیش آمد.");
      }
    }
  };

  return (
    <AuthLayout
      imageSrc="/images/Authentication/image.JPG"
      imageAlt="عکس"
      caption={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی.`}
    >
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center font-yekan">
          وارد کردن کد تأیید
        </h2>

        <form onSubmit={handleVerify} className="space-y-6">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="کد تأیید را وارد کنید"
            className="border border-gray-300 p-3 rounded-lg w-full text-sm font-yekan text-center"
          />

          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark transition-all text-white p-3 rounded-lg w-full text-sm font-yekan"
          >
            تأیید کد
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}

function isAxiosError(error: unknown): error is AxiosError {
  return typeof error === "object" && error !== null && "isAxiosError" in error;
}
