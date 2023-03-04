import Image from "next/image";
import Logo from "../../assets/logo.png";

export function Sidebar() {
  return (
    <div className="flex flex-col h-screen w-72 bg-white">
      <div
        id="logo"
        className="pl-[35px] pt-[32px] pr-[80px] pb-[37px] border-b-2 border-[#F4F7FE]"
      >
        <Image
          src={Logo}
          alt="logo"
          className="max-w-[175px] max-h-[61px] w-auto h-auto"
        />
      </div>
    </div>
  );
}
