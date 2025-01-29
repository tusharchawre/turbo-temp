import { useMDXComponent } from "next-contentlayer2/hooks"



interface MdxProps {
    code: string
}


export function Mdx ({code}: MdxProps){

    const Component = useMDXComponent(code)

    return (
        <Component />
    )
}