interface ItemProps {
    title: string
}


export const SidebarItem = ({title}: ItemProps) => {
    return(
        <div className="w-full hover:bg-muted-foreground/20 font-light text-sm transition-all rounded-md py-[0.4rem] px-2">
            {title}
        </div>
    )
}