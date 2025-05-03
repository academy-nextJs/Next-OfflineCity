import Image from "next/image";
import FooterCol from "./FooterCol";

function Footer() {
  return (
    <footer className="lg:mx-14 flex flex-col p-12 gap-10 lg:rounded-[32px] bg-lightGrey-100 dark:bg-dark-200 dark:text-white">
      <h3 className="text-center xl:text-start text-[35px] sm:text-[64px] font-[700]">
        ALFA
      </h3>

      <div className="flex flex-col items-center xl:items-start xl:flex-row gap-14">
        <p className="xl:pe-12 text-center sm:text-start">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه لورم ایپسوم متن
          ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
          گرافیک است
        </p>

        <FooterCol
          items={[
            { text: "نحوه رزرو اقامتگاه", className: "sm:text-[20px]" },
            { text: "راهنمای رزرو اقامتگاه" },
            { text: "شیوه پرداخت" },
            { text: "لغو رزرو اقامتگاه" },
          ]}
        />
        <FooterCol
          items={[
            { text: "خدمات مشتریان", className: "sm:text-[20px]" },
            { text: "پرسش های متداول مهمان" },
            { text: "پرسش های متداول میزبان" },
            { text: "چطور اقامتگاه ثبت کنم ؟" },
            { text: "حریم شخصی کاربران" },
          ]}
        />
        <FooterCol
          items={[
            { text: "راه ارتباطی دلتا", className: "sm:text-[20px]" },
            { text: "09229167194 - 098541612310" },
            { text: "Delta@gmail.com" },
            { text: "گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده" },
          ]}
        />
      </div>

      <div className="hidden xs:flex justify-center xl:justify-start gap-6">
        <div className="flex justify-center items-center rounded-2xl w-[56px] h-[56px] bg-white">
          <Image src="/images/footer/z2 1.png" alt="" width={33} height={36} />
        </div>
        <div className="flex justify-center items-center rounded-2xl w-[56px] h-[56px] bg-[#232323]">
          <Image
            src="/images/footer/T1_1591355889268 1.png"
            alt=""
            width={38}
            height={36}
          />
        </div>
        <div className="flex justify-center items-center rounded-2xl w-[56px] h-[56px] bg-[#232323]">
          <Image
            src="/images/footer/file_20191206_1550_36991 1.png"
            alt=""
            width={46}
            height={36}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
