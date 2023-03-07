import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  asChild?: boolean;
  color?: "primary" | "secondary" | "white-70";
  size?: "sm" | "md" | "lg";
}

/**
 *
 * @param size sm: 12px; md: 14px; lg: 24px;
 * @returns
 */
export function Text({
  children,
  asChild = false,
  color = "primary",
  size = "md",
}: TextProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={clsx("font-sans font-medium", {
        "text-primary-text": color === "primary",
        "text-secondary-text": color === "secondary",
        "text-white/70": color === "white-70",
        "text-[12px]": size === "sm",
        "text-[14px]": size === "md",
        "text-[24px]": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
