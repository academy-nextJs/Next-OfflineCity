"use client";
import { HouseProps } from "@/types";
import { Chip } from "@heroui/chip";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

function LeftCol(props: HouseProps) {
  const position: LatLngExpression = [props.location.lat, props.location.lng];

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <Chip className="border-main text-main py-4 px-2" variant="bordered">
          درباره ملک
        </Chip>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus saepe
          minus cum dolor similique excepturi placeat quibusdam a veniam,
          ducimus molestias corporis reprehenderit fugit quasi voluptates eius
          quis laboriosam fugiat. Dolore mollitia ducimus reprehenderit
          provident ut in sit magni saepe qui laboriosam, facilis consequatur
          asperiores corrupti sunt earum. Eaque porro voluptates ipsa id iste
          sed nemo quidem! Rem, molestiae hic? Est nesciunt ullam necessitatibus
          tenetur animi pariatur vitae, veniam praesentium at dolorum! Totam
          facilis, voluptates modi nemo quia possimus explicabo eveniet tenetur
          dolorum temporibus, nesciunt dolores vel ullam corporis laudantium.
          Non modi a suscipit repellat molestias quaerat quam fugit beatae ullam
          magnam! Eaque obcaecati molestias nemo facilis, libero fugiat
          provident necessitatibus earum ipsam corporis assumenda optio,
          laudantium minima nam nisi. Aspernatur praesentium numquam odit, atque
          illo, amet assumenda quas vitae debitis dolores molestiae ratione sit
          voluptates officiis eveniet animi voluptatum est a delectus adipisci
          facere. Porro inventore explicabo itaque quos.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <Chip className="border-main text-main py-4 px-2" variant="bordered">
          موقعیت مکانی
        </Chip>

        <div style={{ borderRadius: "20px", overflow: "hidden" }}>
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                Latitude: {props.location.lat}, Longitude: {props.location.lng}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default LeftCol;
