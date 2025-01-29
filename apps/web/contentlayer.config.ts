import { defineDocumentType, makeSource } from 'contentlayer2/source-files';

import {SourcePlugin} from "contentlayer2/core"




export const Doc = defineDocumentType(()=>({
    name: "Doc",
    filePathPattern: "docs/*.mdx",
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required:  true
        },
        description: {
            type: "string",
            required: true
        },
        published: {
            type: "boolean",
            required:  false
        }
    },

    computedFields :{
        slug: {
            type : "string",
            resolve : (doc) => `/${doc._raw.flattenedPath}`
        },
        slugAsParams: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
        }
    }
}))


const mySource: ReturnType<typeof makeSource>  = makeSource({
    contentDirPath: './content',
    documentTypes: [Doc],
   
  })




export default mySource