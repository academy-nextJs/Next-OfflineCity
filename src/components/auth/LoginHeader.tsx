import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginHeader() {
  return (
    <div className="mb-8">
      <div className="flex justify-end mt-4">
        <Link
          href="/"
          className="inline-flex items-center justify-between gap-2 rounded-full bg-[#F0F0F0] px-4 py-2.5 text-sm font-yekan w-[135px] h-[40px]"
        >
          صفحه اصلی
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mt-6 mb-2 font-yekan text-gray-900">
        خوش برگشتی !
      </h1>

      <p className="text-gray-600 text-sm md:text-base font-yekan leading-relaxed">
        برای ورود به حساب کاربری آلفا میتوانید با اکانت گوگل یا اپل خود و یا با
        ایمیل و رمزعبور خود اقدام کنید{" "}
      </p>
    </div>
  );
}
