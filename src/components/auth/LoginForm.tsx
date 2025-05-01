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
        toast.success("ورود موفقیت‌ آمیز بود!");
        window.location.href = "/";
      }
    },
  });

  return (
    <>
      <LoginHeader />

      <form onSubmit={form.handleSubmit} className="space-y-6">
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
          ورود به حساب
        </button>
      </form>
    </>
  );
}
