import { Heading } from "../Heading";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { HomeSvg } from "./Icons";

export function MenuItems() {
  const path = usePathname();

  const dashboardPath = path === "/dashboard" ? true : false;
  const vendasPath = path === "/vendas" ? true : false;
  const relatoriosboardPath = path === "/relatorios" ? true : false;
  const lojasParceirasboardPath = path === "/lojasParceiras" ? true : false;
  const clientesboardPath = path === "/clientes" ? true : false;

  return (
    <div className="flex flex-col">
      <ol>
        <li className="flex flex-row items-center justify-between w-full py-[10px] cursor-pointer hover:bg-gray-100/50">
          <div className="flex flex-row gap-3">
            {/* <House
              className={clsx("w-[24px] h-[24px] ", {
                "text-secondary-blue": dashboardPath,
                "text-unSelected": !dashboardPath,
              })}
              weight="fill"
            /> */}
            <HomeSvg selected={dashboardPath} />
            <Heading size="sm" color={dashboardPath ? "primary" : "secondary"}>
              Dashboard
            </Heading>
          </div>

          <div
            className={clsx("h-[36px] w-[4px] rounded-t-lg rounded-b-lg", {
              "bg-secondary-blue": dashboardPath,
              "bg-transparent": !dashboardPath,
            })}
          />
        </li>
      </ol>
    </div>
  );
}
