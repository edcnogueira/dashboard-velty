import { Heading } from "@/components/Heading";
import { Dollar } from "@/components/Template/Icons";
import { Text } from "@/components/Text";
import clsx from "clsx";

interface MainProps {
  color?: "red" | "blue" | "green";
  description?: string;
  value: string;
  average: string;
}

const Main = ({
  color = "red",
  description = "Receita Total",
  value = "00,00",
  average = "00,00",
}: MainProps) => {
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
            {value}
          </Heading>
          <Text size="lg" color="white-70">
            {description}
          </Text>
        </div>
      </div>
      <div className="w-full border border-primary-background"></div>
      <div className="flex flex-col pt-[18px] pl-4">
        <Heading color="white">{average}</Heading>
        <Text color="white-70">Média por cliente</Text>
      </div>
    </div>
  );
};

export type DescType = Record<"description" | "value" | "percentage", string> & {
  color: "success" | "danger";
  subValue?: string | undefined;
  id?: number;
};

export const Desc = ({
  description = "",
  value = "",
  percentage = "",
  color = "success",
  subValue,
}: DescType) => {
  return (
    <div className="flex flex-col w-[249px] h-[95px] bg-white rounded-[20px] justify-center pl-[23px]">
      <Text color="secondary">{description}</Text>
      {subValue ? (
        <div className="flex flex-row items-center gap-1">
          <Heading>{value}</Heading>
          <Text color="secondary">{subValue}</Text>
        </div>
      ) : (
        <Heading>{value}</Heading>
      )}

      <Heading size="xs" color={color}>
        {percentage}
      </Heading>
    </div>
  );
};

export type InfoType = {
  id?: number;
  value: number;
  subTitle: string;
  percentage: string;
  subValue?: string;
};

export const Info = ({
  value = 0,
  subTitle = "",
  percentage = "",
  subValue = "",
}: InfoType) => {
  return (
    <div className="flex flex-col w-[387px] h-[196px] bg-white rounded-[20px] justify-center pl-[23px]">
      <div className="pl-3">
        <div className="flex justify-start items-center w-[56px] h-[56px] rounded-full bg-white">
          <Dollar color="dark-blue" />
        </div>
        {!!subValue ? (
          <div className="flex flex-row items-center gap-1">
            <Heading size="lg">{value}</Heading>
            <Text color="secondary">{subValue}</Text>
          </div>
        ) : (
          <Heading size="lg">{value}</Heading>
        )}

        <Text color="secondary">{subTitle}</Text>
        <div className="mt-3">
          <Heading size="xs" color="success">
            {percentage}
          </Heading>
        </div>
      </div>
    </div>
  );
};

export const CardDashboard = {
  Main,
  Desc,
  Info,
};
