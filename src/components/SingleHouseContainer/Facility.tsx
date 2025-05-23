import { cn } from "@heroui/react";

export default function Facility({
  title,
  value,
  titleClassName,
  valueClassName,
}: {
  title: string;
  value: number | string;
  titleClassName?: string;
  valueClassName?: string;
}) {
  return (
    <div className="border-r-2 border-main flex flex-col gap-2 ps-2">
      <span className={cn("text-main line-clamp-1", titleClassName)}>
        {title}
      </span>
      <span className={cn("font-bold line-clamp-1", valueClassName)}>
        {value}
      </span>
    </div>
  );
}
