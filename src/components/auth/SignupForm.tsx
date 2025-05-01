"use client";

import { useForm } from "@tanstack/react-form";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import SignupHeader from "./SignupHeader";

export default function SignupForm() {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
    onSubmit: async ({ value }) => {
      try {
        const res = await fetch(
          "https://delta-project.liara.run/api/auth/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: value.email,
              password: value.password,
              fullName: value.fullName,
              phoneNumber: value.phoneNumber,
              role: "buyer",
            }),
          }
        );

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data?.message || "خطا در ثبت‌ نام");
        }

        toast.success("ثبت‌ نام با موفقیت انجام شد!");

        await signIn("credentials", {
          redirect: true,
          email: value.email,
          password: value.password,
          callbackUrl: "/",
        });
      } catch (error) {
        if (
          error &&
          typeof error === "object" &&
          "message" in error &&
          typeof error.message === "string"
        ) {
          toast.error(error.message);
        } else {
          toast.error("مشکلی در ثبت‌ نام پیش آمد.");
        }
      }
    },
  });

  return (
    <>
      <SignupHeader />

      <form onSubmit={form.handleSubmit} className="space-y-6">
        <form.Field name="fullName">
          {(field) => (
            <div>
              <label className="block mb-2">نام کامل</label>
              <input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="border p-3 rounded w-full"
                placeholder="مثلا فرنام میانرودیان"
              />
            </div>
          )}
        </form.Field>

        <form.Field name="phoneNumber">
          {(field) => (
            <div>
              <label className="block mb-2">شماره موبایل</label>
              <input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="border p-3 rounded w-full"
                placeholder="09112862773 مثلا"
              />
            </div>
          )}
        </form.Field>

        <form.Field name="email">
          {(field) => (
            <div>
              <label className="block mb-2">ایمیل</label>
              <input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="border p-3 rounded w-full"
                placeholder="ایمیل را وارد کنید"
                type="email"
              />
            </div>
          )}
        </form.Field>

        <form.Field name="password">
          {(field) => (
            <div>
              <label className="block mb-2">رمز عبور</label>
              <input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="border p-3 rounded w-full"
                type="password"
              />
            </div>
          )}
        </form.Field>

        <button
          type="submit"
          className="bg-primary text-white w-full p-3 rounded"
        >
          ثبت‌نام
        </button>
      </form>
    </>
  );
}
