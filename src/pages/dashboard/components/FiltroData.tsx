import { Input as I } from "@/components/Input";
import { Text } from "@/components/Text";

export function FiltroData() {
  return (
    <div className="flex flex-1 flex-row gap-2 items-center justify-around bg-white w-[644px] h-[61px] rounded-l-full rounded-r-full mt-7 shadow-md">
      <div className="ml-3">
        <Text color="secondary">Filtrar por data</Text>
      </div>
      <I.Date placeholder="Data Inicial" />
      <I.Date placeholder="Data Final" />
    </div>
  );
}
