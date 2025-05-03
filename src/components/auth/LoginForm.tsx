"use client";

import { useForm } from "@tanstack/react-form";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import LoginHeader from "./LoginHeader";

export default function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      const result = await signIn("credentials", {
        redirect: false,
        email: value.email,
        password: value.password,
      });

      if (result?.error) {
        toast.error("ایمیل یا رمز عبور اشتباه است.");
      } else {
        toast.success("ورود موفقیت‌آمیز بود!");
        window.location.href = "/";
      }
    },
  });

  return (
    <form onSubmit={form.handleSubmit} className="space-y-6">
      <LoginHeader />
      <form.Field name="email">
        {(field) => (
          <div>
            <label className="block text-[16px] font-yekan mb-2 text-gray-700 dark:text-gray-200">
              ایمیل
            </label>
            <input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              className="border p-3 rounded-lg w-full font-yekan"
              placeholder="ایمیل را وارد کنید"
              type="email"
            />
          </div>
        )}
      </form.Field>

      <form.Field name="password">
        {(field) => (
          <div>
            <label className="block text-[16px] font-yekan mb-2 text-gray-700 dark:text-gray-200">
              رمز عبور
            </label>
            <input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              className="border p-3 rounded-lg w-full font-yekan"
              placeholder="رمز عبور را وارد کنید"
              type="password"
            />
          </div>
        )}
      </form.Field>

      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark transition text-white p-3 rounded-lg w-full font-yekan"
      >
        ورود
      </button>
    </form>
  );
}
