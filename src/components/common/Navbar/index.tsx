"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      classNames={{
        base: "px-7 lg:px-14",
        wrapper: "px-0 max-w-full",
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <Button
            className="bg-lightGrey-200 dark:bg-dark-100 rounded-full font-[600]"
            as={Link}
            href="/"
          >
            خانه
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            className="bg-lightGrey-200 dark:bg-dark-100 rounded-full font-[600]"
            href="#"
          >
            مقالات
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="bg-lightGrey-200 dark:bg-dark-100 rounded-full font-[600]"
            as={Link}
            href="#"
          >
            درباره آلفا
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="center">
        <NavbarBrand className="text-[32px] font-[700]">ALFA</NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            className="bg-lightGrey-200 dark:bg-dark-100 rounded-full font-[600]"
            as={Link}
            href="#"
          >
            رهن و اجاره
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button
            className="bg-lightGrey-200 dark:bg-dark-100 rounded-full font-[600]"
            as={Link}
            href="#"
          >
            رزرو سریع
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden xs:flex">
          <Button
            as={Link}
            className="bg-main text-white rounded-full font-[600]"
            href="#"
          >
            ثبت نام / ورود
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
