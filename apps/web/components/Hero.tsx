import { Copy, Terminal } from "lucide-react"
import Image from "next/image"
import { Fira_Code } from "next/font/google"

const code = Fira_Code({
    subsets: ["latin"]
})

export const Hero = () => {
    return(
        <div className={`w-full flex items-center justify-center text-white pt-28`}>
            <div className="flex flex-col gap-2 text-center items-center justify-center w-[900px]">
            <h1 className="font-bold text-[52px]">
            Skip the Setup, Start Building
            </h1>
            <p className="text-white/50">Transform your workflow with one command. Our CLI instantly scaffolds Turborepo, Next.js, and React projects with proven templates. No setup headaches - start building what matters in seconds.</p>

            <div className="w-2xl h-[78px] bg-[#171717] mt-12 rounded-2xl px-6 py-2 flex items-center justify-between">
                <div className="flex items-center gap-4">
                <Image src={'/icons/terminal.svg'} alt="Terminal Icon" width={33} height={26} />
                <p className={`text-2xl ${code.className} text-white/50`}>
                <span className="text-[#B8FFD466]">npx</span> create-turbo-tpl@latest</p>
                </div>

                <div className="hover:bg-muted-foreground/20 transition rounded-md p-2">
                    <Copy className="w-7 h-7 text-white/30" />
                </div>
            </div>
            </div>
        </div>
    )
}