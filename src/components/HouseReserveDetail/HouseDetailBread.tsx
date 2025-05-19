import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@heroui/react";

export default function HouseDetailBread() {
  const [currentPage, setCurrentPage] = React.useState("song");

  return (
    <Breadcrumbs underline="active" onAction={(key) => setCurrentPage(String(key))}>
      <BreadcrumbItem key="home" isCurrent={currentPage === "home"}>
        خانه 
      </BreadcrumbItem>
      <BreadcrumbItem key="music" isCurrent={currentPage === "music"}>
        رزرو هتل
      </BreadcrumbItem>
      <BreadcrumbItem key="artist" isCurrent={currentPage === "artist"}>
        رزرو هتل رشت
      </BreadcrumbItem>
      <BreadcrumbItem key="album" isCurrent={currentPage === "album"}>
        رزو هتل رشت سرورایان
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}