import { Input } from "@heroui/react";
import { useForm } from "@tanstack/react-form";
import React from "react";
import { motion } from "framer-motion";

const itemsVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.7,
      duration: 5
    },
  }),
};

interface Values {
  inDate: string;
  exitdate: string;
  people: number;
}

export const HouseReserveInput = () => {
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
    <div className="hidden  md:block pt-8">
      <motion.span
        custom={0}
        variants={itemsVariant}
        initial="hidden"
        animate="visible"
        className="font-bold text-[20px] text-[#7575fefe]"
      >
        {" "}
        همین حالا رزرو کنید{" "}
      </motion.span>
      <div className="pt-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="grid grid-cols-2 gap-[25px]"
        >
          <motion.div
            custom={1}
            variants={itemsVariant}
            initial="hidden"
            animate="visible"
            className=""
          >
            <div className="pt-3">
              <form.Field
                name="inDate"
                children={(field) => (
                  <Input
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
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
          </motion.div>

          <motion.div
            custom={2}
            variants={itemsVariant}
            initial="hidden"
            animate="visible"
            className=""
          >
            <div className="pt-3">
              <form.Field
                name="exitdate"
                children={(field) => (
                  <Input
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
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
          </motion.div>

          <motion.div
            custom={3}
            variants={itemsVariant}
            initial="hidden"
            animate="visible"
            className=""
          >
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
                    onChange={(e) => field.handleChange(Number(e.target.value))}
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
          </motion.div>

          <motion.div
            custom={4}
            variants={itemsVariant}
            initial="hidden"
            animate="visible"
          >
            <div className="font-[600]">
              <div className="text-[#7575fefe]"> مجموع قیمت </div>
              <div className="relative inline-block text-slate-300 font-bold pt-[23px]">
                2000000 تومان
                <span className="absolute top-2 right-0 left-0 bottom-0 w-full h-px bg-red-600 transform rotate-[-14deg] origin-center ">
                  {" "}
                </span>
              </div>{" "}
              /<span> 15000000 تومان </span>
            </div>
          </motion.div>

          <motion.div
            custom={5}
            variants={itemsVariant}
            initial="hidden"
            animate="visible"
            className="pt-6"
          >
            <button
              type="button"
              className="bg-[#7575fefe] w-[200%] py-3 rounded-[32px] "
              onClick={() => form.handleSubmit()}
            >
              بده برعه
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};
