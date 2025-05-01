"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { toast } from "react-toastify";

interface Step1EmailProps {
  onNext: (email: string) => void;
}

export default function Step1Email({ onNext }: Step1EmailProps) {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
    },
    onSubmit: async ({ value }) => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://delta-project.liara.run/api/auth/register/request",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: value.email }),
          }
        );

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data?.message || "ارسال کد تایید با خطا مواجه شد.");
        }

        toast.success("کد تأیید برای ایمیل ارسال شد.");
        onNext(value.email);
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "خطایی رخ داد.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={form.handleSubmit} className="space-y-6 w-full">
      <h2 className="text-2xl font-bold mb-4 font-yekan text-gray-900 dark:text-white">
        ثبت‌ نام - مرحله اول
      </h2>

      <form.Field name="email">
        {(field) => (
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              ایمیل
            </label>
            <input
              type="email"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 p-3 rounded-lg w-full text-sm font-yekan"
              placeholder="ایمیل را وارد کنید"
              required
            />
          </div>
        )}
      </form.Field>

      <button
        type="submit"
        disabled={loading}
        className="bg-primary hover:bg-primary-dark transition-all text-white p-3 rounded-lg w-full text-sm font-yekan"
      >
        {loading ? "در حال ارسال..." : "ادامه"}
      </button>
    </form>
  );
}
