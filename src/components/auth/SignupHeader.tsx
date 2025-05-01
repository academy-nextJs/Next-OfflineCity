import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SignupHeader() {
  return (
    <div className="mb-8">
      <div className="flex justify-end mt-4">
        <Link
          href="/"
          className="inline-flex items-center justify-between gap-2 rounded-full px-4 py-2.5 text-sm font-yekan w-[135px] h-[40px]
             bg-[#F0F0F0] text-black dark:bg-white/10 dark:text-white transition-colors"
        >
          صفحه اصلی
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mt-6 mb-2 font-yekan text-gray-900 dark:text-white">
        ثبت‌ نام در آلفا
      </h1>

      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base font-yekan leading-relaxed">
        برای ثبت‌نام در آلفا می‌توانید با اکانت گوگل یا اپل خود و یا با ارسال کد
        تأیید به ایمیل خود اقدام کنید.
      </p>
    </div>
  );
}
