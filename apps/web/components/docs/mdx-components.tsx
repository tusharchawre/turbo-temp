import { useMDXComponent } from "next-contentlayer2/hooks"
import { Navbar } from "../landing-page/Navbar"



interface MdxProps {
    code: string
}

const components = {
    Navbar
}


export function Mdx ({code}: MdxProps){

    const Component = useMDXComponent(code)

    return (
        <Component components={components} />
    )
}