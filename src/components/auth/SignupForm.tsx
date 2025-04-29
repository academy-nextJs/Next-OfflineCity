"use client";

import { useForm } from "@tanstack/react-form";
import axios from "@/utils/services/interceptor/axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

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

        toast.success("ثبت‌ نام با موفقیت انجام شد!");
        router.push(`/verify-code?email=${value.email}`);
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          const data = error.response?.data as { message?: string };
          toast.error(data?.message || "خطا در ثبت‌ نام.");
        } else {
          toast.error("خطایی پیش آمد.");
        }
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
      <h2 className="text-2xl font-bold text-center mb-6 font-yekan">
        ایجاد حساب کاربری
      </h2>

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
              placeholder="مثلا your@email.com"
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
  );
}

function isAxiosError(error: unknown): error is AxiosError {
  return typeof error === "object" && error !== null && "isAxiosError" in error;
}
