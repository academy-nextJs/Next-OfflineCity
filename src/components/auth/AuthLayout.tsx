"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  const textRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "up" | "down") => {
    const el = textRef.current;
    if (!el) return;

    const lineHeight = 30;
    const currentScroll = el.scrollTop;

    if (direction === "up" && currentScroll > 0) {
      el.scrollTo({
        top: currentScroll - lineHeight * 2,
        behavior: "smooth",
      });
    } else if (
      direction === "down" &&
      currentScroll + el.clientHeight < el.scrollHeight
    ) {
      el.scrollTo({
        top: currentScroll + lineHeight * 2,
        behavior: "smooth",
      });
    }
  };

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
            <div className="absolute right-8 top-[426px] w-[640px] h-[180px] text-white font-yekan text-right flex flex-col justify-between">
              <div
                ref={textRef}
                className="h-[120px] overflow-hidden pr-1 space-y-1 text-sm"
                style={{
                  lineHeight: "30px",
                  fontSize: "20px",
                  fontWeight: 500,
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  direction: "rtl",
                }}
              >
                {caption}
              </div>

              <div className="flex justify-center gap-4 mt-2">
                <div>
                  <button
                    onClick={() => handleScroll("up")}
                    className="bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronUp />
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => handleScroll("down")}
                    className="bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronDown />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 items-start justify-center bg-white dark:bg-black px-4 py-10 md:py-24">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
