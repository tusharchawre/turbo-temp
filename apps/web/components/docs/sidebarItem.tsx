import Link from "next/link"

interface ItemProps {
    title: string
    href : string
}


export const SidebarItem = ({title, href}: ItemProps) => {
    return(
        <Link href={href}>
        <div className="w-full hover:bg-muted-foreground/20 font-light text-sm transition-all rounded-md py-[0.4rem] px-2">
            {title}
        </div>
        </Link>
    )
}