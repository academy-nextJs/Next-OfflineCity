"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function OAuthButtons() {
  return (
    <div className="flex justify-center gap-4 mb-6 mt-2">
      <button
        type="button"
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="flex items-center gap-2 border dark:border-gray-600 rounded-[31px] px-6 py-2 font-yekan text-sm dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition"
      >
        <Image
          src="/images/Authentication/icons/google.png"
          alt="Google"
          width={20}
          height={20}
        />
        ورود با گوگل
      </button>

      <button
        type="button"
        onClick={() => signIn("github", { callbackUrl: "/" })}
        className="flex items-center gap-2 border dark:border-gray-600 rounded-[31px] px-6 py-2 font-yekan text-sm dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition"
      >
        <Image
          src="/images/Authentication/icons/github.png"
          alt="GitHub"
          width={20}
          height={20}
        />
        ورود با گیت‌هاب
      </button>
    </div>
  );
}
