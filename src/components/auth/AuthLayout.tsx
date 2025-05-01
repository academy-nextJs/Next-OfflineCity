"use client";

import React from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
  caption?: string;
}

export default function AuthLayout({
  children,
  imageSrc,
  imageAlt = "عکس",
  caption,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row-reverse">
      <div className="hidden md:flex md:w-[60%] items-start justify-end relative overflow-hidden">
        <div className="relative w-[704px] h-[720px] mt-4 ml-[100px] rounded-[32px] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-[32px]"
            priority
          />

          <div className="absolute top-[340px] right-[0px] p-4 rounded-[28px] flex items-center justify-center">
            <Image
              src="/images/Authentication/icons/top-icon.png"
              alt="آیکون بالا"
              width={60}
              height={60}
            />
          </div>

          {caption && (
            <div
              className="absolute right-8 top-[426px] w-[640px] h-[180px] text-right text-white font-yekan"
              style={{
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              {caption}
            </div>
          )}

          <div className="absolute right-8 bottom-8 flex items-center gap-4 z-10">
            <Image
              src="/images/Authentication/icons/avatar.png"
              alt="پروفایل پارسا"
              width={48}
              height={48}
              className="rounded-full"
            />

            <div className="text-white font-yekan flex flex-col justify-center leading-[24px]">
              <span className="font-semibold text-[16px]">پارسا آقایی</span>
              <span className="font-medium text-[14px]">12 مرداد 1403</span>
            </div>
          </div>

          <div className="absolute left-8 -bottom-4 flex items-center gap-0 z-10">
            <div className="p-4 rounded-[28px] flex items-center justify-center">
              <Image
                src="/images/Authentication/icons/arrow-right.png"
                alt="فلش راست"
                width={75}
                height={75}
              />
            </div>

            <div className="p-4 rounded-[28px] flex items-center justify-center">
              <Image
                src="/images/Authentication/icons/arrow-left.png"
                alt="فلش چپ"
                width={75}
                height={75}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-start justify-center bg-white px-4 py-10 md:py-24">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
