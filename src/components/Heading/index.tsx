import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  asChild?: boolean;
  color?: "primary" | "secondary" | "white" | "success" | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}
export function Heading({
  children,
  asChild = false,
  color = "primary",
  size = "md",
}: TextProps) {
  const Comp = asChild ? Slot : "h2";
  return (
    <Comp
      className={clsx("font-sans font-bold", {
        "text-primary-text": color === "primary",
        "text-secondary-text": color === "secondary",
        "text-white": color === "white",
        "text-success": color === "success",
        "text-danger": color === "danger",
        "text-xs": size === "xs",
        "text-[16px]": size === "sm",
        "text-2xl": size === "md",
        "text-[34px]": size === "lg",
        "text-5xl": size === "xl",
      })}
    >
      {children}
    </Comp>
  );
}
