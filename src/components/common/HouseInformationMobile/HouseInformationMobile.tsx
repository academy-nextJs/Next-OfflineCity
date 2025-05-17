import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from "@heroui/react";

import { Accordion, AccordionItem } from "@heroui/accordion";
import { Image } from "@heroui/react";
import { Input } from "@heroui/react";
import { useForm } from "@tanstack/react-form";

interface Values {
  inDate: string;
  exitdate: string;
  people: number;
}
export default function HouseInformationMobile() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const form = useForm<Values, any, any, any, any, any, any, any, any, any>({
    defaultValues: {
      inDate: "",
      exitdate: "",
      people: 0,
    },
    onSubmit: async ({ value }) => {
      console.log("form submitting", value);
    },
  });
  return (
    <>
      <Tooltip  content='برای مشاهده مشخصات هتل کلیک کنید'>
        <button
          onClick={onOpen}
          className="md:hidden border border-[#7474fefe] rounded-[100px] py-2 px-4 text-[#7474fefe]"
        >
          مشخصات هتل{" "}
        </button>
      </Tooltip>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <Accordion>
                  <AccordionItem
                    key="1"
                    aria-label="Accordion 1"
                    title="امکانات هتل"
                  >
                    <div className=" grid grid-cols-5 gap-12 pt-6">
                      <div className="border-r border-[#7575fefe] pr-2 mt-8 ">
                        <p className="text-[#7575fefe]"> تعداد اتاق </p>
                        <p className="pt-3"> 4 </p>
                      </div>
                      <div className="border-r border-[#7575fefe] pr-2 mt-8 ">
                        <p className="text-[#7575fefe]"> گرمایش </p>
                        <p className="pt-3"> شوفاژ </p>
                      </div>
                      <div className="border-r border-[#7575fefe] pr-2 mt-8 ">
                        <p className="text-[#7575fefe]"> سرمایش </p>
                        <p className="pt-3"> کولر </p>
                      </div>
                      <div className="border-r border-[#7575fefe] pr-2 mt-8 ">
                        <p className="text-[#7575fefe]"> بالکن </p>
                        <p className="pt-3"> دارد </p>
                      </div>
                      <div className="border-r border-[#7575fefe] pr-2 mt-8 ">
                        <p className="text-[#7575fefe]"> اجاق گاز </p>
                        <p className="pt-3"> دارد </p>
                      </div>
                      <div className="border-r border-[#7575fefe] pr-2 mt-8 ">
                        <p className="text-[#7575fefe]"> پارگینگ </p>
                        <p className="pt-3"> دارد </p>
                      </div>
                      <div className="border-r border-[#7575fefe] pr-2 mt-8 ">
                        <p className="text-[#7575fefe]"> اسانسور </p>
                        <p className="pt-3"> دارد </p>
                      </div>
                      <div className="border-r border-[#7575fefe] pr-2 mt-8 ">
                        <p className="text-[#7575fefe]"> حمام </p>
                        <p className="pt-3"> دارد </p>
                      </div>
                      <div className="border-r border-[#7575fefe] pr-2 mt-8 ">
                        <p className="text-[#7575fefe]"> نوع حمام </p>
                        <p className="pt-3"> رومی </p>
                      </div>
                      <div className="border-r border-[#7575fefe] pr-2 mt-8 ">
                        <p className="text-[#7575fefe]"> سم بنا </p>
                        <p className="pt-3"> نوساز </p>
                      </div>
                      <div className="border-r border-[#7575fefe] pr-2 mt-8 ">
                        <p className="text-[#7575fefe]"> نوع اوپن </p>
                        <p className="pt-3"> سنگی </p>
                      </div>
                      <div className="border-r border-[#7575fefe] pr-2 mt-8 ">
                        <p className="text-[#7575fefe]"> خط تلفن </p>
                        <p className="pt-3"> دارد </p>
                      </div>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="درباره هتل"
                  >
                    <div className="">
                      <div className="dark:text-zinc-400">
                        <h1 className="pt-6 font-[600] text-[24px]">
                          {" "}
                          چرا باید این خونه را اتخاب کنیم{" "}
                        </h1>
                        <p className="pt-5 text-[#323232]">
                          ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ، و با استفاده از طراحان گرافیک است،
                          <br /> چاپگرها و متون بلکه روزنامه و مجله در ستون و
                          سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                          <br /> مورد نیاز، و کاربردهای متنوع با هدف بهبود
                          ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                          <br /> درصد گذشته حال و آینده، شناخت فراوان جامعه و
                          متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را{" "}
                          <br />
                          برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                          پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
                          امید <br />
                          داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                          سخت تایپ به پایان رسد و زمان مورد نیاز شامل <br />
                          حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                          دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                      </div>
                      <div className="flex gap-4 pt-8">
                        <div className="">
                          <Image
                            isZoomed
                            alt="HeroUI Fruit Image with Zoom"
                            src={"/assets/houseReserve/house16.png"}
                            width={319}
                            height={229}
                          />
                        </div>
                        <div className="">
                          <Image
                            isZoomed
                            alt="HeroUI Fruit Image with Zoom"
                            src={"/assets/houseReserve/house16.png"}
                            width={319}
                            height={229}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="dark:text-zinc-400">
                          <h1 className="pt-6 font-[600] text-[24px]">
                            {" "}
                            چرا باید این خونه را اتخاب کنیم{" "}
                          </h1>
                          <p className="pt-5 text-[#323232]">
                            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                            چاپ، و با استفاده از طراحان گرافیک است،
                            <br /> چاپگرها و متون بلکه روزنامه و مجله در ستون و
                            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
                            <br /> مورد نیاز، و کاربردهای متنوع با هدف بهبود
                            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                            <br /> درصد گذشته حال و آینده، شناخت فراوان جامعه و
                            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                            را <br />
                            برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
                            توان امید <br />
                            داشت که تمام و دشواری موجود در ارائه راهکارها، و
                            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل{" "}
                            <br />
                            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                            اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Accordion 3"
                    title="همین حالا رزرو کنید"
                  >
                    <div className="pt-8">
                      <span className="font-bold text-[20px] text-[#7575fefe]">
                        {" "}
                        همین حالا رزرو کنید{" "}
                      </span>
                      <div className="pt-8">
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            form.handleSubmit();
                          }}
                          className="grid grid-cols-2 gap-[25px]"
                        >
                          <div className="">
                            <div className="pt-3">
                              <form.Field
                                name="inDate"
                                children={(field) => (
                                  <Input
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) =>
                                      field.handleChange(e.target.value)
                                    }
                                    key="outside"
                                    label="تاریخ ورود"
                                    labelPlacement="outside"
                                    placeholder="تاریخ ورود خود را مشخص کنید"
                                  />
                                )}
                                validators={{
                                  onChange: ({ value }) =>
                                    !value ? "نام الزامی است " : undefined,
                                }}
                              />
                            </div>
                          </div>

                          <div className="">
                            <div className="pt-3">
                              <form.Field
                                name="exitdate"
                                children={(field) => (
                                  <Input
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) =>
                                      field.handleChange(e.target.value)
                                    }
                                    key="outside"
                                    label="تاریخ خروج"
                                    labelPlacement="outside"
                                    placeholder="تاریخ خروج خود را مشخص کنید"
                                  />
                                )}
                                validators={{
                                  onChange: ({ value }) =>
                                    !value ? "نام الزامی است " : undefined,
                                }}
                              />
                            </div>
                          </div>

                          <div className="">
                            <div className="pt-3">
                              <form.Field
                                name="people"
                                children={(field) => (
                                  <Input
                                    type="number"
                                    value={
                                      field.state.value !== undefined
                                        ? String(field.state.value)
                                        : ""
                                    }
                                    onBlur={field.handleBlur}
                                    onChange={(e) =>
                                      field.handleChange(Number(e.target.value))
                                    }
                                    key="outside"
                                    label="تعداد نفرات"
                                    labelPlacement="outside"
                                    placeholder="تعداد نفرات خود را مشخص کنید"
                                    className=""
                                  />
                                )}
                                validators={{
                                  onChange: ({ value }) =>
                                    !value ? "نام الزامی است " : undefined,
                                }}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-[600]">
                              <div className="text-[#7575fefe]">
                                {" "}
                                مجموع قیمت{" "}
                              </div>
                              <div className="relative inline-block text-slate-300 font-bold pt-[23px]">
                                2000000 تومان
                                <span className="absolute top-2 right-0 left-0 bottom-0 w-full h-px bg-red-600 transform rotate-[-14deg] origin-center ">
                                  {" "}
                                </span>
                              </div>{" "}
                              /<span> 15000000 تومان </span>
                            </div>
                          </div>
                          <div className="pt-6">
                            <button
                              type="button"
                              className="bg-[#7575fefe] w-[200%] py-3 rounded-[32px] "
                              onClick={() => form.handleSubmit()}
                            >
                              بده برعه
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </AccordionItem>
                </Accordion>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
