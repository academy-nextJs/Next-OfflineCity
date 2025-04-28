"use client";

import { useForm } from "@tanstack/react-form";
import axios from "@/utils/services/interceptor/axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SignupForm() {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      phoneNumber: "",
    },
    onSubmit: async ({ value }) => {
      try {
        await axios.post("/auth/register", {
          email: value.email,
          password: value.password,
          fullName: value.fullName,
          phoneNumber: value.phoneNumber,
          role: "buyer",
        });

        toast.success("ثبت‌ نام شدین!");

        router.push("/");
      } catch (error) {
        console.error(error);
        toast.error("مشکلی در ثبت‌ نام پیش اومده. لطفاً دوباره تلاش کن.");
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center font-yekan">
        ایجاد حساب کاربری
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            نام کامل
          </label>
          <input
            className="border border-gray-300 p-3 rounded-lg w-full text-sm font-yekan"
            value={form.getFieldValue("fullName")}
            onChange={(e) => form.setFieldValue("fullName", e.target.value)}
            placeholder="نام کامل را وارد کنید"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            شماره تلفن
          </label>
          <input
            className="border border-gray-300 p-3 rounded-lg w-full text-sm font-yekan"
            value={form.getFieldValue("phoneNumber")}
            onChange={(e) => form.setFieldValue("phoneNumber", e.target.value)}
            placeholder="شماره تلفن را وارد کنید"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            ایمیل
          </label>
          <input
            className="border border-gray-300 p-3 rounded-lg w-full text-sm font-yekan"
            value={form.getFieldValue("email")}
            onChange={(e) => form.setFieldValue("email", e.target.value)}
            placeholder="ایمیل را وارد کنید"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            رمز عبور
          </label>
          <input
            className="border border-gray-300 p-3 rounded-lg w-full text-sm font-yekan"
            type="password"
            value={form.getFieldValue("password")}
            onChange={(e) => form.setFieldValue("password", e.target.value)}
            placeholder="رمز عبور را وارد کنید"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark transition-all text-white p-3 rounded-lg w-full text-sm font-yekan"
      >
        ثبت نام
      </button>
    </form>
  );
}
