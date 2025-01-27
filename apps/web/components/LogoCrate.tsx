import Image from "next/image"

export const LogoCrate = () => {

    const Logos : string[] = [
        "/logo/nextjs.svg",
        "/logo/reactjs.svg",
        "/logo/turborepo.svg",
        "/logo/Tailwind.svg",
        "/logo/shadcnui.svg"
    ]



    return(
        <div className="w-full max-w-4xl flex items-center relative z-50 justify-around mx-auto mt-16">
                <Image src={"/logo/nextjs.svg"} className="h-10 shrink-0" width={100} height={100} alt="Logos" />
                <Image src={ "/logo/reactjs.svg"} className="h-10 w-10 shrink-0" width={100} height={100} alt="Logos" />
                <Image src={"/logo/turborepo.svg"} className="h-[40px] shrink-0 scale-125" width={100} height={100} alt="Logos" />
                <Image src={"/logo/Tailwind.svg"} className="h-[31px] shrink-0 w-[52px]" width={100} height={100} alt="Logos" />
                <Image src={"/logo/shadcnui.svg"} className="h-[39px] shrink-0 w-[39px]" width={100} height={100} alt="Logos" />



        </div>
    )
}