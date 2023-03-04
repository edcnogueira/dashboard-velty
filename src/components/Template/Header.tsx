import { Heading } from "../Heading";
import { Navigarion } from "./Navigation";

export function Header() {
  return (
    <>
      <div className="flex flex-col gap-[2px] pt-[49px]">
        <Navigarion />
        <Heading size="lg">Velty Dashboard</Heading>
      </div>
    </>
  );
}
