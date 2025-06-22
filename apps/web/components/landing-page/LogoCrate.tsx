import Image from "next/image";

export const LogoCrate = () => {
  const Logos: string[] = [
    "/logo/nextjs.svg",
    "/logo/reactjs.svg",
    "/logo/turborepo.svg",
    "/logo/Tailwind.svg",
    "/logo/shadcnui.svg",
  ];

  return (
    <div className="w-full max-w-full sm:max-w-4xl flex flex-wrap sm:flex-nowrap items-center relative z-50 justify-around mx-auto mt-8 sm:mt-16 gap-4 sm:gap-0">
      <Image
        src={"/logo/nextjs.svg"}
        className="h-8 sm:h-10 shrink-0 w-8 sm:w-auto"
        width={100}
        height={100}
        alt="Logos"
      />
      <Image
        src={"/logo/reactjs.svg"}
        className="h-8 sm:h-10 w-8 sm:w-10 shrink-0"
        width={100}
        height={100}
        alt="Logos"
      />
      <Image
        src={"/logo/turborepo.svg"}
        className="h-8 sm:h-[40px] shrink-0 w-8 sm:w-auto scale-110 sm:scale-125"
        width={100}
        height={100}
        alt="Logos"
      />
      <Image
        src={"/logo/Tailwind.svg"}
        className="h-7 sm:h-[31px] shrink-0 w-10 sm:w-[52px]"
        width={100}
        height={100}
        alt="Logos"
      />
      <Image
        src={"/logo/shadcnui.svg"}
        className="h-8 sm:h-[39px] shrink-0 w-8 sm:w-[39px]"
        width={100}
        height={100}
        alt="Logos"
      />
    </div>
  );
};
