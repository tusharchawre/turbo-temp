import Image from "next/image"
import { LogoCrate } from "./LogoCrate"

export const Video = () => {
    return(
        <div className="w-full h-fit relative">
        <Image src={'/Mask group.svg'} width={1440} className='absolute z-0 -top-60' height={924} alt="mesh" />  

        <div className="w-full mx-auto max-w-4xl h-[500px] mt-36 bg-[#0B0B0B] rounded-xl z-30 relative">


        </div>

        <LogoCrate />

        </div>
    )
}