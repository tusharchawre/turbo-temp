import Image from "next/image";
import { LogoCrate } from "./LogoCrate";

export const Video = () => {
  return (
    <div className="w-full h-fit relative">
      <Image
        src={"/Mask group.svg"}
        width={1440}
        className="absolute z-0 -top-40 sm:-top-60 w-full h-auto"
        height={924}
        alt="mesh"
      />

      <div className="w-full mx-auto max-w-full sm:max-w-4xl h-[220px] sm:h-[500px] mt-12 sm:mt-36 bg-[#0B0B0B] rounded-2xl sm:rounded-3xl z-30 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-top object-cover"
        >
          <source src="/turbo-tpl-final.mp4" type="video/mp4" />
        </video>
      </div>

      <LogoCrate />
    </div>
  );
};
