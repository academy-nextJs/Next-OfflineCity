import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Select,
  SelectItem,
  Slider,
  cn,
} from "@heroui/react";

import { useDispatch } from "react-redux";
import { IoTrashOutline } from "react-icons/io5";
import {
  setHouseLocation,
  setHouseMaxPrice,
  setHouseMinPrice,
  setHouseOrder,
  setHousePropertyType,
  setHouseSort,
  setHouseTransactionType,
} from "@/redux/slices/houseReserve";
import { useAppSelector } from "@/redux/hooks";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/utils/services/interceptor/axios";
import { Location } from "@/types";
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
const MIN = 15000000;
const MAX = 5000000;
const STEP = 5000;

// if(typeof window !== 'undefined'){
//   const item = localStorage.getItem('mykey')
// }
export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const housesValues = useAppSelector((store) => store.housereserve);
  console.log("housevalues", housesValues);
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN, MAX]);

  const { data } = useQuery({
    queryKey: ["locations"],
    queryFn: () => axiosInstance.get("/locations"),
  });

  const getPriceRange = (value:any) => {
    dispatch(setHouseMaxPrice(value[0]));
    dispatch(setHouseMinPrice(value[1]));
  };

  const deleteFilter = () => [
    dispatch(setHouseOrder("")),
    dispatch(setHouseSort("")),
    dispatch(setHouseLocation("")),
    dispatch(setHouseTransactionType("")),
    getPriceRange(""),
  ];

  return (
    <>
      <Button color="primary" className="rounded-[100px]" onPress={onOpen} size="lg">
        {" "}
        فیلتر ها{" "}
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        className="pr-[56px] pl-[36px]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="flex justify-between pl-9">
                <ModalHeader className="flex flex-col gap-1 ">
                  فیلتر ها
                </ModalHeader>
                <div className="flex gap-1 text-red-500">
                  <IoTrashOutline className="mt-[18px]" size={18} />
                  <button
                    className="text-red-500 font-[600]"
                    onClick={deleteFilter}
                  >
                    {" "}
                    حذف همه{" "}
                  </button>
                </div>
              </div>
              <ModalBody>
                <div className="flex gap-8">
                  <Select
                    items={
                      data?.data.map((item: Location) => ({
                        key: item.id,
                        label: item.area_name,
                      })) || []
                    }
                    placeholder="انتخاب کنید"
                    label="محل مورد نظر"
                    labelPlacement="outside"
                    className="w-full"
                    classNames={{
                      trigger:
                        "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 rounded-full h-12",
                      label: "py-2 font-bold",
                    }}
                    onChange={(e) => dispatch(setHouseLocation(e.target.value))}
                  >
                    {(item: { label: string; key: string }) => (
                      <SelectItem key={item.label.split("،")[0]}>
                        {item.label}
                      </SelectItem>
                    )}
                  </Select>
                  <Select
                    selectedKeys={[
                      `${housesValues.sort},${housesValues.order}`,
                    ]}
                    placeholder="انتخاب کنید"
                    label="مرتب سازی بر اساس"
                    labelPlacement="outside"
                    className="w-full"
                    classNames={{
                      trigger:
                        "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 h-12 rounded-full",
                      label: "py-2 font-bold",
                    }}
                    onChange={(e) => {
                      dispatch(setHouseSort(e.target.value.split(",")[0]));
                      dispatch(setHouseOrder(e.target.value.split(",")[1]));
                    }}
                  >
                    <SelectItem key="rate,DESC">محبوب ترین</SelectItem>
                    <SelectItem key="price,DESC">گران ترین</SelectItem>
                    <SelectItem key="price,ASC">ارزان ترین</SelectItem>
                  </Select>
                </div>
                <div className="pt-[26px] rounded-xl">
                  <div className="flex justify-between">
                  <span className="flex gap-4">
                      <span className="text-[#878787] "> قیمت از </span> <span className="font-bold">  {housesValues.minPrice ? housesValues.minPrice : 0}  </span>   
                  </span>
                  <span  className="flex gap-4">
                   <span className="text-[#878787] text-sm"> قیمت تا </span>  
                     <span className="font-bold">  {housesValues.maxPrice ? housesValues.maxPrice : 1000000000} </span>
                  </span>
                  </div>
                  <Slider
                    size="md"
                    maxValue={1000000000}
                    step={50000}
                    defaultValue={[0, 1000000000]}
                    onChange={(value) => getPriceRange(value)}
                    classNames={{
                      base: "gap-3",
                      filler:
                        "bg-gradient-to-r from-pink-300 to-cyan-300 dark:from-pink-600 dark:to-cyan-800",
                    }}
                    renderThumb={({ index, ...props }) => (
                      <div
                        {...props}
                        className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                      >
                        <span
                          className={cn(
                            "transition-transform bg-gradient-to-br shadow-small rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80",
                            index === 0
                              ? "from-pink-200 to-pink-500 dark:from-pink-400 dark:to-pink-600" // first thumb
                              : "from-cyan-200 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800" // second thumb
                          )}
                        />
                      </div>
                    )}
                  />
                </div>
                <div className="flex gap-8 pt-[28px]">
                  <Select
                    selectedKeys={[housesValues.propertyType]}
                    placeholder="انتخاب کنید"
                    label="نوع ملک"
                    labelPlacement="outside"
                    className="w-full "
                    classNames={{
                      trigger:
                        "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 rounded-full h-12",
                      label: "py-2 font-bold",
                    }}
                    onChange={(e) =>
                      dispatch(setHouseTransactionType(e.target.value))
                    }
                  >
                    <SelectItem key="آپارتمان">آپارتمان</SelectItem>
                    <SelectItem key="ویلا">ویلا</SelectItem>
                    <SelectItem key="rental">روستایی</SelectItem>
                    <SelectItem key="لوکس">لوکس</SelectItem>
                    <SelectItem key="دنج">دنج</SelectItem>
                  </Select>
                  <Select
                    selectedKeys={[
                      `${housesValues.sort},${housesValues.order}`,
                    ]}
                    placeholder="امتیاز هتل"
                    label="امتیازهتل"
                    labelPlacement="outside"
                    className="w-full "
                    classNames={{
                      trigger:
                        "bg-lightGrey-100 dark:bg-dark-100 dark:border data-[hover]:bg-lightGrey-200 rounded-full h-12",
                      label: "py-2 font-bold",
                    }}
                    onChange={(e) => {
                      dispatch(setHouseSort(e.target.value));
                      dispatch(setHouseOrder(e.target.value));
                    }}
                  >
                    <SelectItem key="rate">4.9</SelectItem>
                    <SelectItem key="rate">4.7</SelectItem>
                    <SelectItem key="rate">4.5</SelectItem>
                  </Select>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
