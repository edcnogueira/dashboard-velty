import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  asChild?: boolean;
  color?: "primary" | "secondary";
  size?: "md" | "lg" | "xl";
}
export function Heading({
  children,
  asChild = false,
  color = "primary",
  size = "md",
}: TextProps) {
  const Comp = asChild ? Slot : "h1";
  return (
    <Comp
      className={clsx("font-sans", {
        "text-primary-text": color === "primary",
        "text-secondary-text": color === "secondary",
        "text-[24px]": size === "md",
        "text-[34px]": size === "lg",
        "text-[48px]": size === "xl",
      })}
    >
      {children}
    </Comp>
  );
}
