import { Mdx } from "@/components/docs/mdx-components";
import { allDocs } from "contentlayer/generated";
import { useLiveReload } from "next-contentlayer2/hooks";
import { notFound } from "next/navigation";

interface DocsPageProps {
  params: Promise<{ slug: string[] }>;
}

async function getDocFromParmas({ params }: DocsPageProps) {
  const slug = (await params).slug?.join("/") || "";

  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export default async function DocsPage({ params }: DocsPageProps) {
  const doc = await getDocFromParmas({ params });

  if (!doc) {
    return notFound();
  }

  return (
    <>
      <div className="px-16 py-8 overflow-scroll w-[70%]">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2">
          {doc?.title}
        </h1>
        <p className="text-base text-muted-foreground">{doc?.description}</p>

        <Mdx code={doc.body.code} />
      </div>
    </>
  );
}
