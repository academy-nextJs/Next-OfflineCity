"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleTheme } from "@/redux/slices/global";
import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Skeleton,
} from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import { RxBell } from "react-icons/rx";
import { Home, LucideIcon } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type Nvlink = {
  label: string;
  href: string;
  icons: LucideIcon;
  index: number;
};
const DashboardHeader = () => {
  const { theme } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const themeHandler = () => {
    if (theme == "light") {
      dispatch(toggleTheme("dark"));
    } else {
      dispatch(toggleTheme("light"));
    }
  };

  useEffect(() => {
    document.documentElement.classList = theme;
  }, [theme]);

  const menuItems: Nvlink[] = [
    { label: "داشبورد", icons: Home, href: "/dashboard", index: 1 },
    { label: "اطلاعات کاربری", icons: Home, href: "/reserve", index: 2 },
    { label: "مدیریت املاک", icons: Home, href: "/mod", index: 3 },
    {
      label: "مدیریت رزرو",
      icons: Home,
      href: "/dashbdfdoard",
      index: 4,
    },
    {
      label: "مدیریت مالی",
      icons: Home,
      href: "/dashbfdsdsoard",
      index: 5,
    },
    {
      label: "مدیریت نظرات",
      icons: Home,
      href: "/dashsfsdboard",
      index: 6,
    },
    { label: "اعلان ها", icons: Home, href: "/dashasasboard", index: 7 },
  ];
  return (
    <Navbar
      classNames={{
        base: "px-7 lg:px-14 dark:bg-dark-300",
        wrapper: "px-0 max-w-full",
      }}
      maxWidth="full"
      className="w-full rounded-[12px]"
    >
      <NavbarContent justify="start" className="hidden lg:flex">
        <NavbarItem className="flex gap-2">
          داشبورد <FiChevronsRight className="mt-1" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <div
            onClick={themeHandler}
            className="flex w-[60px] h-[30px] bg-gray-300 rounded-full p-1 cursor-pointer relative"
          >
            <div className="absolute top-2 left-1 text-gray-600">
              <Sun size={16} />
            </div>
            <div className="absolute top-2 right-1 text-gray-600">
              <Moon size={16} />
            </div>
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center absolute top-1 transition-all duration-300 ${
                theme === "light"
                  ? "left-1 bg-lime-400"
                  : "left-[31px] bg-gray-700"
              }`}
            >
              {theme === "light" ? (
                <Sun size={16} className="text-black" />
              ) : (
                <Moon size={16} className="text-white" />
              )}
            </div>
          </div>
        </NavbarItem>
        <NavbarItem className="border-r-2 pr-3 border-[#9c9c9c]">
          {" "}
          <RxBell />
        </NavbarItem>
        <NavbarItem className="flex gap-2 ">
          <Skeleton className="w-[37px] h-[37px] rounded-[8px]" />
          <div>
            <p className="font-normal text-[14px]"> سبحان برار </p>
            <p className="text-[12px] text-[#888888]">فروشنده </p>
          </div>
          {/* <Accordion variant="splitted" >
            <AccordionItem key="1">اسم اینچیز ها دره برار</AccordionItem>
          </Accordion> */}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=" rounded-[12px] p-[19px]">
        {menuItems.map(({ label, href, icons: Icon, index }) => {
          const isActive = pathName === href;
          return (
            <NavbarMenuItem key={`${label}-${index}`}>
              <Link
                className={clsx(
                  "w-full flex gap-2 py-3 pr-2 rounded-[12px]",
                  isActive ? "bg-blue-600 " : ""
                )}
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={href}
              >
                <Icon
                  size={18}
                  className={clsx(
                    isActive
                      ? "dark:text-white text-black z-10"
                      : "text-gray-500 group-hover:text-lime-400 z-10"
                  )}
                />
                {label}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default DashboardHeader;
