"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { HouseProps, RootState } from "@/types";
import HouseList from "../HouseList/HouseList";
import HouseListMobile from "../HouseList/HouseListMobile";
import { TfiMapAlt } from "react-icons/tfi";
import { GoChevronLeft } from "react-icons/go";

interface MapViewProps {
  houses: HouseProps[];
}

const MapView: React.FC<MapViewProps> = ({ houses }) => {
  const position: [number, number] = [36.5658, 53.0586];
  const IsDarkMode = useSelector(
    (state: RootState) => state.global.theme === "dark"
  );
  const selectedLocation = useSelector(
    (state: RootState) => state.map.selectedLocation
  );

  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetainUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  const titleUrl = IsDarkMode
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  const attribution = IsDarkMode
    ? "&copy; CartoDB"
    : "&copy ; Openstreetmap contributors";

  const FlyToLocation = ({ lat, lng }: { lat: number; lng: number }) => {
    const map = useMap();
    useEffect(() => {
      map.flyTo([lat, lng], 16);
    }, [lat, lng, map]);

    return null;
  };

  return (
    <>
      <div className="relative w-full h-screen">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom
          className="h-full w-full z-0"
        >
          <TileLayer attribution={attribution} url={titleUrl} />

          {houses.map((house: HouseProps) => (
            <Marker
              key={house.id}
              position={[house.location.lat, house.location.lng]}
            >
              <Popup>
                <div className="flex gap-2 ">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-full bg-red-200"> <img className="w-12 h-12 rounded-full" src={'/assets/houseReserve/house.png'} /></div>
                    <div className="text-start">
                      <div className="font-bold text-[16px] ">
                        {" "}
                        {house.title}{" "}
                      </div>
                      <div className="flex gap-2 items-center justify-center pt-[5px]">
                        <div>
                          <TfiMapAlt size={17} />
                        </div>{" "}
                        {house.address}{" "}
                      </div>
                      <div className="pt-3">
                        <div className="relative inline-block text-[#A6A6A6] font-bold opacity-50">
                          {house?.price} تومان
                          <span className="absolute top-2 right-0 left-0 bottom-0 w-full h-px bg-red-600 transform rotate-[-14deg] origin-center">
                            {" "}
                          </span>
                        </div>
                        /
                        <span className="font-bold text-black text-[16px] inline dark:text-slate-300">
                          {" "}
                          {house?.price} تومان{" "}
                        </span>
                      </div>
                      <div className="pt-[13px] hover:text-blue-600 font-bold">
                        <div className="flex gap-1"> <span>  جزییات بیشتر و رزرو</span>   <span> <GoChevronLeft /> </span> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

          {selectedLocation && (
            <>
              <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
                <FlyToLocation
                  lat={selectedLocation.lat}
                  lng={selectedLocation.lng}
                />
              </Marker>
            </>
          )}
        </MapContainer>
        <HouseList houses={houses} />
      </div>
      <HouseListMobile houses={houses} />
    </>
  );
};

export default MapView;
