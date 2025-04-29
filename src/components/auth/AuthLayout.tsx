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
  imageAlt = "تصویر احراز هویت",
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
        </div>
      </div>

      <div className="flex flex-1 items-center justify-start p-24 bg-white">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
