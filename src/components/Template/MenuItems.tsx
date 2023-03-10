import { Heading } from "../Heading";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { AvatarSvg, BuySvg, GraphSvg, HomeSvg, RandomCardSvg } from "./Icons";

export function MenuItems() {
  const router = useRouter();
  const path = usePathname();

  const dashboardPath = path === "/dashboard" ? true : false;
  const vendasPath = path === "/vendas" ? true : false;
  const relatoriosboardPath = path === "/relatorios" ? true : false;
  const lojasParceirasboardPath = path === "/parcerias" ? true : false;
  const clientesboardPath = path === "/clientes" ? true : false;

  return (
    <div className="flex flex-col">
      <ol>
        <li
          onClick={() => router.push("/dashboard")}
          className="flex flex-row items-center justify-between w-full py-[10px] cursor-pointer hover:bg-gray-100/50"
        >
          <div className="flex flex-row gap-3">
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

        <li
          onClick={() => router.push("/vendas")}
          className="flex flex-row items-center justify-between w-full py-[10px] cursor-pointer hover:bg-gray-100/50"
        >
          <div className="flex flex-row gap-3">
            <BuySvg selected={vendasPath} />
            <Heading size="sm" color={vendasPath ? "primary" : "secondary"}>
              Vendas
            </Heading>
          </div>

          <div
            className={clsx("h-[36px] w-[4px] rounded-t-lg rounded-b-lg", {
              "bg-secondary-blue": vendasPath,
              "bg-transparent": !vendasPath,
            })}
          />
        </li>

        <li
          onClick={() => router.push("/relatorios")}
          className="flex flex-row items-center justify-between w-full py-[10px] cursor-pointer hover:bg-gray-100/50"
        >
          <div className="flex flex-row gap-3">
            <GraphSvg selected={relatoriosboardPath} />
            <Heading size="sm" color={relatoriosboardPath ? "primary" : "secondary"}>
              Relatórios
            </Heading>
          </div>

          <div
            className={clsx("h-[36px] w-[4px] rounded-t-lg rounded-b-lg", {
              "bg-secondary-blue": relatoriosboardPath,
              "bg-transparent": !relatoriosboardPath,
            })}
          />
        </li>

        <li
          onClick={() => router.push("/parcerias")}
          className="flex flex-row items-center justify-between w-full py-[10px] cursor-pointer hover:bg-gray-100/50"
        >
          <div className="flex flex-row gap-3">
            <RandomCardSvg selected={lojasParceirasboardPath} />
            <Heading size="sm" color={lojasParceirasboardPath ? "primary" : "secondary"}>
              Lojas Parceiras
            </Heading>
          </div>

          <div
            className={clsx("h-[36px] w-[4px] rounded-t-lg rounded-b-lg", {
              "bg-secondary-blue": lojasParceirasboardPath,
              "bg-transparent": !lojasParceirasboardPath,
            })}
          />
        </li>

        <li
          onClick={() => router.push("/clientes")}
          className="flex flex-row items-center justify-between w-full py-[10px] cursor-pointer hover:bg-gray-100/50"
        >
          <div className="flex flex-row gap-3">
            <AvatarSvg selected={clientesboardPath} />
            <Heading size="sm" color={clientesboardPath ? "primary" : "secondary"}>
              Clientes
            </Heading>
          </div>

          <div
            className={clsx("h-[36px] w-[4px] rounded-t-lg rounded-b-lg", {
              "bg-secondary-blue": clientesboardPath,
              "bg-transparent": !clientesboardPath,
            })}
          />
        </li>
      </ol>
    </div>
  );
}
