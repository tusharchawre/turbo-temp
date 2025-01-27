import { Github, Sun } from "lucide-react"
import { Search } from "./Search"

export const Navbar = () => {

    return (
        <div className="w-full mx-auto inset-0 mt-5 flex items-center justify-between h-8 px-8">
            <div className="text-2xl text-white flex gap-16 items-center">
                <p>turbo_tpl</p>
                <p className="text-base text-white/50 font-normal">Templates</p>
            </div>

            <div className="flex items-center gap-4">
            <p className="text-base text-white/50 font-normal">Twitter</p>
            <Search />
            <Sun className="text-white/50 h-6 w-6 p-1 rounded-sm hover:bg-muted/20 transition" />
            <Github className="text-white/50 h-6 w-6 p-1 rounded-sm hover:bg-muted/20 transition" />

            </div>
        </div>
    )
}