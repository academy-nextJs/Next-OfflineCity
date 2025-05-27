"use client";

import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Skeleton,
  Button,
} from "@heroui/react";
import { FaCheckCircle } from "react-icons/fa";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const User: User[] = [
  { id: 1, name: "ali", email: "alijdiiefr", role: "admin" },
  { id: 2, name: "hamed", email: "alijdiiefr", role: "karbar" },
  { id: 3, name: "mohammad", email: "alijdiiefr", role: "admin" },
  { id: 4, name: "alidwd", email: "alijdiiefr", role: "admin" },
  { id: 5, name: "hamed", email: "alijdiiefr", role: "karbar" },
  { id: 6, name: "mohammad", email: "alijdiiefr", role: "admin" },
];

const DashboardTable = () => {
  return (
    <div className="bg-white rounded-[12px] dark:bg-zinc-900  group ">
      <div className="flex justify-between pt-4 pr-[19px] pb-[10px]">
        <div className="flex gap-3">
          <BsBookmarkFill />
          <p> رزرو های اخیر مشتریان </p>
        </div>
        <div className="flex gap-6 font-normal text-base text-[#7a7a7a]">
          <span> مشاهده همه </span>
          <div className="flex items-center gap-1 pl-5">
            <BsFillCaretLeftFill size={14} className="opacity-30" />
            <BsFillCaretLeftFill size={18} className="opacity-60" />
            <BsFillCaretLeftFill size={23} className="opacity-100" />
          </div>
        </div>
      </div>
      <div className="border-t-1 border-dashed border-[#888888] ]">
        <Table aria-label="جدول کاربران">
          <TableHeader>
            <TableColumn> نام اقامتگاه </TableColumn>
            <TableColumn> تاریخ رزرو </TableColumn>
            <TableColumn> قیمت </TableColumn>
            <TableColumn> وضعیت </TableColumn>
            <TableColumn>  </TableColumn>
          </TableHeader>
          <TableBody>
            {User.map((user) => (
              <TableRow
                key={user.id}
                className="hover:bg-[#8cff45] hover:text-black transition-colors cursor-pointer"
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Skeleton  className="px-8 py-5 lg:px-12 lg:py-8 rounded-xl"/>
                    <span className="text-xl"> {user.name} </span>
                  </div>
                </TableCell>
                <TableCell className="text-xl"> {user.email} </TableCell>
                <TableCell className="text-xl"> {user.role} </TableCell>
                <TableCell className="text-xs"> <div className="w-[90px] h-[25px] rounded-[100px] bg-[#8cff45] flex gap-1 items-center justify-center text-black">  <FaCheckCircle /> تایید شده   </div> </TableCell>
                <TableCell className="text-xl"> ... </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DashboardTable;
