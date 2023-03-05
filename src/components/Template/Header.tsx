import { Heading } from "../Heading";
import { Input } from "../Input";
import { Navigarion } from "./Navigation";

import Image from "next/image";
import Avatar from "../../assets/Avatar.png";
import { Alarm, Info, Moon } from "../../components/Template/Icons";

const SearchHeader = () => {
  return (
    <>
      <div className="flex flex-row gap-[20px] items-center justify-around h-full w-[422px] bg-white rounded-l-full rounded-r-full py-[10px] pl-[10px] mr-[22px] shadow-md">
        <Input.Search />
        <Alarm />
        <Moon />
        <Info />
        <Image
          className="w-[41px] h-[41px] rounded-full mr-2"
          width={100}
          height={100}
          alt="avatar"
          src={Avatar}
        />
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
