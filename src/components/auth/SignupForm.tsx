"use client";

import { useForm } from "@tanstack/react-form";
import axios from "@/utils/services/interceptor/axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SignupForm() {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
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

        toast.success("ثبت‌ نام موفقیت‌آمیز بود!");

        router.push("/");
      } catch (error) {
        console.error(error);
        toast.error("مشکلی در ثبت‌ نام پیش اومده. لطفاً دوباره تلاش کن.");
      }
    },
  });

  return (
    <form onSubmit={form.handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center font-yekan">
        ایجاد حساب کاربری
      </h2>

      <form.Field name="fullName">
        {(field) => (
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              نام کامل
            </label>
            <input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full text-sm font-yekan"
              placeholder="نام کامل را وارد کنید"
              type="text"
            />
          </div>
        )}
      </form.Field>

      <form.Field name="phoneNumber">
        {(field) => (
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              شماره تلفن
            </label>
            <input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full text-sm font-yekan"
              placeholder="مثلا 09123456789"
              type="tel"
            />
          </div>
        )}
      </form.Field>

      <form.Field name="email">
        {(field) => (
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              ایمیل
            </label>
            <input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full text-sm font-yekan"
              placeholder="ایمیل را وارد کنید"
              type="email"
            />
          </div>
        )}
      </form.Field>

      <form.Field name="password">
        {(field) => (
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              رمز عبور
            </label>
            <input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full text-sm font-yekan"
              placeholder="رمز عبور را وارد کنید"
              type="password"
            />
          </div>
        )}
      </form.Field>

      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark transition-all text-white p-3 rounded-lg w-full text-sm font-yekan"
      >
        ثبت نام
      </button>
    </form>
  );
}
