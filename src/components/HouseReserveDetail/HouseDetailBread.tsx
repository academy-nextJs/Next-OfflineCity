import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@heroui/react";

export default function HouseDetailBread() {
  const [currentPage, setCurrentPage] = React.useState("song");

  return (
    <Breadcrumbs underline="active" onAction={(key) => setCurrentPage(String(key))}>
      <BreadcrumbItem key="home" isCurrent={currentPage === "home"}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem key="music" isCurrent={currentPage === "music"}>
        Music
      </BreadcrumbItem>
      <BreadcrumbItem key="artist" isCurrent={currentPage === "artist"}>
        Artist
      </BreadcrumbItem>
      <BreadcrumbItem key="album" isCurrent={currentPage === "album"}>
        Album
      </BreadcrumbItem>
      <BreadcrumbItem key="song" isCurrent={currentPage === "song"}>
        Song
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}