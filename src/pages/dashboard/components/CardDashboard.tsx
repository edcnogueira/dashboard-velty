import { Heading } from "@/components/Heading";
import { Dollar } from "@/components/Template/Icons";
import { Text } from "@/components/Text";
import clsx from "clsx";

interface MainProps {
  color?: "red" | "blue" | "green";
}

const Main = ({ color = "red" }: MainProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-[20px] w-[380px] h-[310px] pt-[22px] mt-[83px]",
        {
          "bg-primary-red": color === "red",
          "bg-primary-blue": color === "blue",
          "bg-primary-green": color === "green",
        }
      )}
    >
      <div className="pl-4">
        <div className="flex justify-center items-center w-[56px] h-[56px] rounded-full bg-white">
          <Dollar color={color} />
        </div>
        <div className="flex flex-col pt-[28px] pb-[28px] ">
          <Heading color="white" size="xl">
            R$ 312.321,00
          </Heading>
          <Text size="lg" color="white-70">
            Receita Total
          </Text>
        </div>
      </div>
      <div className="w-full border border-primary-background"></div>
      <div className="flex flex-col pt-[18px] pl-4">
        <Heading color="white">R$ 67,20</Heading>
        <Text color="white-70">Média por cliente</Text>
      </div>
    </div>
  );
};

export const CardDashboard = {
  Main,
};
