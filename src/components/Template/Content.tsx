import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return <div className="h-full w-full">{children}</div>;
}
