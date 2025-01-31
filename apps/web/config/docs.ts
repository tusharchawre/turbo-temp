interface NavItems{
    title: string
    href?: string
    disabled?: boolean
}

interface SidebarNavItem extends NavItems {
    items?: SidebarNavItem[]
}


export interface DocsConfig {
    sidebarNav : SidebarNavItem[]
}


export const docsConfig : DocsConfig = {
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Introduction",
                    href: "/docs"
                },
                {
                    title: "Installation",
                    href: "/docs/installation"
                },
            ]
        }, 
        {
            title: "Frameworks",
            items: [
                {
                    title: "Turborepo",
                    href: "/docs/turborepo"
                },
                {
                    title: "NextJs",
                    href: "/docs/next-js"
                },
                {
                    title: "React",
                    href: "/docs/react"
                }
            ]
        },
        {
            title: "Templates",
            items:[
                {
                    title: "Turborepo with Shadcn",
                    href: "/docs/turborepo-w-shadcn"
                },
                {
                    title: "Turborepo with Tailwind",
                    href: "/docs/turborepo-w-tailwind"
                },
                {
                    title: "Turborepo with Express-WS-Prisma",
                    href: "/docs/turborepo-express-ws-prisma"
                },
                {
                    title: "NextJs (Starter)",
                    href: "/docs/nextjs-starter"
                },
                {
                    title: "NextJs with Shadcn",
                    href: "/docs/nextjs-w-shadcn"
                },
                {
                    title: "React (Vite) - TS",
                    href: "/docs/react-vite-ts"
                },
                {
                    title: "React (Vite) - JS",
                    href: "/docs/react-vite-js"
                },
                {
                    title: "React with Tailwind",
                    href: "/docs/react-w-tailwind"
                }
            ]
        }
    ]
}