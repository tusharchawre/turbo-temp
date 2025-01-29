import { Label } from "../ui/label"
import { Separator } from "../ui/separator"
import { SidebarItem } from "./sidebarItem"


export const AppSidebar = () => {

     const gsItems = [
        {
            title: "Introduction"
        },
        {
            title: "Installation"
        }
    ]

    const framework = [
        {
            title: "Turborepo"
        }, 
        {
            title: "NextJS"
        },
        {
            title: "React"
        }
    ]

    const templates = [
        {
            title: "Turborepo with Shadcn"
        },
        {
            title: "Turborepo with Tailwind"
        },
        {
            title: "Turborepo with express and websocket"
        },
        {
            title: "NextJs (Starter)"
        },
        {
            title: "NextJs with Shadcn"
        },
        {
            title: "ReactJs (Vite) - TS"
        },
        {
            title: "ReactJs (Vite) - JS"
        },
        {
            title: "React with Tailwind"
        }
    ]



    return(

        <div className="w-[16rem] h-[calc(100% - 3rem)] flex">
            <div className="w-full px-6 py-12">
                <div className="flex flex-col gap-3 mb-7">
                <Label className="font-semibold px-2 tracking-wide">
                    Getting Started
                </Label>
                <div className="flex flex-col gap-1">
                {gsItems.map((item)=>(
                    <SidebarItem key={item.title} title={item.title} />
                ))}
                </div>
                </div>


                <div className="flex flex-col gap-3 mb-7">
                <Label className="font-normal px-2 tracking-wide">
                    Framework
                </Label>
                <div className="flex flex-col gap-1">
                {framework.map((item)=>(
                    <SidebarItem key={item.title} title={item.title} />
                ))}
                </div>
                </div>


                <div className="flex flex-col gap-3 mb-7">
                <Label className="font-semibold px-2 tracking-wide">
                    Templates
                </Label>
                <div className="flex flex-col gap-1">
                {templates.map((item)=>(
                    <SidebarItem key={item.title} title={item.title} />
                ))}
                </div>
                </div>
                

            </div>
            
        <Separator orientation="vertical" className="h-full" />
            </div>  

        
    )
}