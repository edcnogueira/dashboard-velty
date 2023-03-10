import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

interface GridContainerProps {
  children: ReactNode;
  gap?: 0 | 1 | 2 | 3 | 4 | 5;
  customClassName?: ComponentProps<"div">["className"];
}

function Container({ gap = 2, children, customClassName = "" }: GridContainerProps) {
  return (
    <div
      className={clsx("w-full grid grid-cols-12", {
        "gap-0": gap === 0,
        "gap-1": gap === 1,
        "gap-2": gap === 2,
        "gap-3": gap === 3,
        "gap-4": gap === 4,
        "gap-5": gap === 5,
        [customClassName]: customClassName,
      })}
    >
      {children}
    </div>
  );
}

type SizeGridProps = 0 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12;

interface GridItemProps {
  children: ReactNode;
  xs?: SizeGridProps;
  sm?: SizeGridProps;
  md?: SizeGridProps;
  lg?: SizeGridProps;
  key?: any;
}

function Item({ xs = 12, sm, md, lg, key = "", children }: GridItemProps) {
  return (
    <div
      className={clsx("", {
        "col-span-12": xs === 12,
        "col-span-10": xs === 10,
        "col-span-8": xs === 8,
        "col-span-7": xs === 7,
        "col-span-6": xs === 6,
        "col-span-5": xs === 5,
        "col-span-4": xs === 4,
        "col-span-3": xs === 3,
        "col-span-2": xs === 2,
        none: xs === 0,

        "sm:col-span-12": sm === 12,
        "sm:col-span-10": sm === 10,
        "sm:col-span-8": sm === 8,
        "sm:col-span-7": sm === 7,
        "sm:col-span-6": sm === 6,
        "sm:col-span-5": sm === 5,
        "sm:col-span-4": sm === 4,
        "sm:col-span-3": sm === 3,
        "sm:col-span-2": sm === 2,
        "sm:none": xs === 0,

        "md:col-span-12": md === 12,
        "md:col-span-10": md === 10,
        "md:col-span-8": md === 8,
        "md:col-span-7": md === 7,
        "md:col-span-6": md === 6,
        "md:col-span-5": md === 5,
        "md:col-span-4": md === 4,
        "md:col-span-3": md === 3,
        "md:col-span-2": md === 2,
        "md:none": xs === 0,

        "lg:col-span-12": lg === 12,
        "lg:col-span-10": lg === 10,
        "lg:col-span-8": lg === 8,
        "lg:col-span-7": lg === 7,
        "lg:col-span-6": lg === 6,
        "lg:col-span-5": lg === 5,
        "lg:col-span-4": lg === 4,
        "lg:col-span-3": lg === 3,
        "lg:col-span-2": lg === 2,
        "lg:none": xs === 0,
      })}
      key={key}
    >
      {children}
    </div>
  );
}

export const Grid = {
  Container,
  Item,
};
