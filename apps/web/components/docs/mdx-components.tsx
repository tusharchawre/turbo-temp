import { useMDXComponent } from "next-contentlayer2/hooks"
import { Navbar } from "../landing-page/Navbar"
import { File, Folder, Tree } from "./file-tree"



interface MdxProps {
    code: string
}

const components = {
    File,
    Tree,
    Folder
}


export function Mdx ({code}: MdxProps){

    const Component = useMDXComponent(code)

    return (
        <Component components={components} />
    )
}