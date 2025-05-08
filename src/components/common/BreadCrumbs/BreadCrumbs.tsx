import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@heroui/react";

export default function BreadCrumbsComponents() {
  const [currentPage, setCurrentPage] = React.useState("song");

  return (
    <Breadcrumbs underline="active" onAction={(key) => setCurrentPage(String(key))} className="dark:text-gray-800">
      <BreadcrumbItem key="home" isCurrent={currentPage === "home"}  >
        خانه
      </BreadcrumbItem>
      <BreadcrumbItem key="hotel" isCurrent={currentPage === "hotel"}>
        رزرو هتل
      </BreadcrumbItem>
      <BreadcrumbItem key="hotelplace" isCurrent={currentPage === "hotelplace"}>
        رزرو هتل رشت
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}