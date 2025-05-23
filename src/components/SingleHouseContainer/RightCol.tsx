import { HouseProps } from "@/types";
import { Chip } from "@heroui/chip";
import Facility from "./Facility";

function RightCol(props: HouseProps) {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-14">
      <div className="flex flex-col gap-5">
        <Chip className="border-main text-main py-4 px-2" variant="bordered">
          امکانات ملک
        </Chip>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-16">
          <Facility title="تعداد اتاق" value={`${props.rooms} خواب`} />
          <Facility
            title="تعداد حمام"
            value={props.bathrooms ? `${props.bathrooms} حمام` : "ندارد"}
          />
          <Facility
            title="پارکینگ"
            value={props.parking ? `${props.parking} پارکینگ` : "ندارد"}
          />
          <Facility title="نوع حیاط" value={props.yard_type} />
          <Facility title="ظرفیت" value={props.capacity} />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <Chip className="border-main text-main py-4 px-2" variant="bordered">
            قیمت رهن و اجاره
          </Chip>
          <div>
            <Facility
              titleClassName="text-[20px] font-bold"
              title="قیمت"
              value={`${Number(props.price).toLocaleString()} تومان`}
            />
          </div>
        </div>
        <p className="text-main">
          <span className="text-[#979797]">برچسب‌ها</span> :{" "}
          {props.tags.map((tag) => `#${tag} `)}
        </p>
      </div>
    </div>
  );
}

export default RightCol;
