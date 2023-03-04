import { Heading } from "../Heading";
import { Input } from "../Input";
import { Navigarion } from "./Navigation";

const SearchHeader = () => {
  return (
    <>
      <div className="flex flex-row gap-[20px] items-center justify-around h-full w-[422px] bg-white rounded-l-full rounded-r-full py-[10px] pl-[10px]">
        <Input.Search />
        <div>teste</div>
        <div>teste</div>
        <div>teste</div>
      </div>
    </>
  );
};

export function Header() {
  return (
    <>
      <div className="flex flex-col gap-[2px] pt-[49px]">
        <Navigarion />
        <div className="w-full flex justify-between">
          <Heading size="lg">Velty Dashboard</Heading>
          <SearchHeader />
        </div>
      </div>
    </>
  );
}
