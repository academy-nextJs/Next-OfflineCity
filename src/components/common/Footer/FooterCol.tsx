import { FC } from "react";

interface Props {
  items: {
    text: string;
    className?: string;
  }[];
}

const FooterCol: FC<Props> = ({ items }) => {
  return (
    <div className="flex flex-col justify-center items-center xl:items-start gap-3">
      {items.map((item, index) => {
        if (index == 0) {
          return (
            <p
              key={index}
              className={`text-center sm:text-start sm:whitespace-nowrap font-[600] ${item.className}`}
            >
              {item.text}
            </p>
          );
        } else {
          return (
            <p
              key={index}
              className={`text-center sm:text-start sm:whitespace-nowrap text-[#AAAAAA] ${item.className}`}
            >
              {item.text}
            </p>
          );
        }
      })}
    </div>
  );
};

export default FooterCol;
