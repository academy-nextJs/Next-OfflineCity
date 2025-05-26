"use client";

import React from "react";
import { LiaSignInAltSolid } from "react-icons/lia";
import { IoChatbubbleEllipses } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Home, LucideIcon } from "lucide-react";

type Nvlink = {
  label: string;
  href: string;
  icons: LucideIcon;
};

const navLinks: Nvlink[] = [
  { label: "داشبورد", icons: Home, href: "/dashboard" },
  { label: "اطلاعات کاربری", icons: Home, href: "/reserve" },
  { label: "مدیریت املاک", icons: Home, href: "/mod" },
  {
    label: "مدیریت رزرو",
    icons: Home,
    href: "/dashbdfdoard",
  },
  {
    label: "مدیریت مالی",
    icons: Home,
    href: "/dashbfdsdsoard",
  },
  {
    label: "مدیریت نظرات",
    icons: Home,
    href: "/dashsfsdboard",
  },
  { label: "اعلان ها", icons: Home, href: "/dashasasboard" },
];

const DashboardNvbar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-[#ffff] dark:bg-zinc-900 rounded-xl px-[19px] pt-[30px] lg:block hidden">
      <div className="flex justify-between">
        <h1 className="font-black size-8"> الفا </h1>
        <span className="pr-[162px]">
          {" "}
          <LiaSignInAltSolid size={20} />{" "}
        </span>
      </div>
      <div className="pt-[49px]">
        {navLinks.map(({ label, href, icons: Icon }) => {
          const isActive = pathName === href;

          return (
            <Link
              key={href}
              href={href}
              className={clsx("relative group overflow-hidden px-4 py-2  pt-4 text-sm transition-colors flex gap-2 rounded-md" , isActive ? 'bg-blue-600' : '')}
            >
              <motion.div
                className="absolute inset-0 bg-blue-500 z-0 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out "
          
                
              />

              <motion.div
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {" "}
              </motion.div>

              <Icon
                size={18}
                className={clsx(
                  isActive
                    ? "dark:text-white text-black z-10"
                    : "text-gray-500 group-hover:text-lime-400 z-10"
                )}
              />

              <span
                className={clsx(
                  "transition-colors duration-300 z-10",
                  isActive
                    ? "dark:text-white text-black "
                    : "text-gray-500 group-hover:text-lime-400"
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="pt-[248px] pb-[19px]">
        <div className=" py-5 border border-dotted border-gray-400 rounded-[12px] flex gap-2">
          <div className="pr-[21.5px]">
            <IoChatbubbleEllipses size={17} />
          </div>
          <div>
            <p> نظرات جدید </p>
            <p className="font-normal text-sm text-[#8888]"> 5 نظر </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNvbar;
