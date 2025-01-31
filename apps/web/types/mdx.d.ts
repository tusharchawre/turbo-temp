declare module "*.mdx" {
  import type { ComponentType } from "react";
  const component: ComponentType;
  export default component;
}

declare module "contentlayer/generated" {
  import type { MDX } from "contentlayer/core";

  export type Doc = {
    _id: string;
    _raw: Record<string, any>;
    type: "Doc";
    title: string;
    description: string;
    published: boolean;
    body: MDX;
    slug: string;
    slugAsParams: string;
  };

  export const allDocs: Doc[];
}
