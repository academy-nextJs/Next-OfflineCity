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
  imageAlt = "تصویر",
  caption,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 bg-gray-100 items-center justify-center">
        <div className="text-center p-8">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={300}
            className="w-full h-auto mb-4"
            priority
          />
          {caption && (
            <p className="text-gray-600 text-sm font-yekan">{caption}</p>
          )}
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
