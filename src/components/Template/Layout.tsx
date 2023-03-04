import { ReactNode } from "react";
import { Content } from "./Content";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-col w-full overflow-auto bg-blue-500">
        <Header />
        <Content>{children}</Content>
      </div>
    </div>
  );
}
