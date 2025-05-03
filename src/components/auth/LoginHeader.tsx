import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginHeader() {
  return (
    <div className="mb-8">
      <div className="flex gap-2 flex-col sm:flex-row justify-between items-center mt-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          خوش برگشتی!
        </h1>
        <Link
          href="/"
          className="inline-flex items-center justify-between gap-2 rounded-full px-4 py-2.5 text-sm w-[135px] h-[40px]
            bg-[#F0F0F0] text-black dark:bg-white/10 dark:text-white dark:border transition-colors"
        >
          صفحه اصلی
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mt-6">
        برای ورود به حساب کاربری آلفا می‌توانید با اکانت گوگل یا اپل خود و یا با
        ایمیل و رمز عبور خود اقدام کنید.
      </p>
    </div>
  );
}
