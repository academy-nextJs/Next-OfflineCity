"use client";

import { useForm } from "@tanstack/react-form";
import axios from "@/utils/services/interceptor/axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      try {
        const response = await axios.post("/auth/login", value);

        const token = response.data.token;
        localStorage.setItem("token", token);

        toast.success("با موفقیت وارد شدید!");

        router.push("/"); //
      } catch (error) {
        console.error(error);
        toast.error("مشکلی در ورود پیش اومده. لطفاً دوباره تلاش کن.");
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
        ورود به حساب کاربری
      </h2>

      <div className="space-y-4">
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
        ورود
      </button>
    </form>
  );
}
