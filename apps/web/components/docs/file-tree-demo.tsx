import { File, Folder, Tree } from "@/components/docs/file-tree";

export default function FileTreeDemo() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Tree
        className="overflow-hidden rounded-md bg-background p-2"
        initialSelectedId="1"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
        ]}
        elements={ELEMENTS}
      >
        <Folder element="turborepo-with-tailwindcss" value="1">
          <Folder element="apps/web" value="2">
            <Folder element="app" value="3">
              <File value="4">
                <p>favicon.ico</p>
              </File>
              <File value="5">
                <p>globals.css</p>
              </File>
              <File value="6">
                <p>layout.tsx</p>
              </File>
              <File value="7">
                <p>page.tsx</p>
              </File>
            </Folder>
            <Folder element="public" value="8">
              <File value="9">
                <p>circles.svg</p>
              </File>
              <File value="10">
                <p>next.svg</p>
              </File>
              <File value="11">
                <p>turborepo.svg</p>
              </File>
              <File value="12">
                <p>vercel.svg</p>
              </File>
            </Folder>
          </Folder>
          <File value="13">
            <p>eslint.config.js</p>
          </File>
          <File value="14">
            <p>next-env.d.ts</p>
          </File>
          <File value="15">
            <p>next.config.ts</p>
          </File>
          <File value="16">
            <p>package.json</p>
          </File>
          <File value="17">
            <p>postcss.config.js</p>
          </File>
          <File value="18">
            <p>README.md</p>
          </File>
          <File value="19">
            <p>tailwind.config.ts</p>
          </File>
          <File value="20">
            <p>tsconfig.json</p>
          </File>
        </Folder>
      </Tree>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "turborepo-with-tailwindcss",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "apps/web",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "app",
            children: [
              {
                id: "4",
                isSelectable: true,
                name: "favicon.ico",
              },
              {
                id: "5",
                isSelectable: true,
                name: "globals.css",
              },
              {
                id: "6",
                isSelectable: true,
                name: "layout.tsx",
              },
              {
                id: "7",
                isSelectable: true,
                name: "page.tsx",
              },
            ],
          },
          {
            id: "8",
            isSelectable: true,
            name: "public",
            children: [
              {
                id: "9",
                isSelectable: true,
                name: "circles.svg",
              },
              {
                id: "10",
                isSelectable: true,
                name: "next.svg",
              },
              {
                id: "11",
                isSelectable: true,
                name: "turborepo.svg",
              },
              {
                id: "12",
                isSelectable: true,
                name: "vercel.svg",
              },
            ],
          },
        ],
      },
      {
        id: "13",
        isSelectable: true,
        name: "eslint.config.js",
      },
      {
        id: "14",
        isSelectable: true,
        name: "next-env.d.ts",
      },
      {
        id: "15",
        isSelectable: true,
        name: "next.config.ts",
      },
      {
        id: "16",
        isSelectable: true,
        name: "package.json",
      },
      {
        id: "17",
        isSelectable: true,
        name: "postcss.config.js",
      },
      {
        id: "18",
        isSelectable: true,
        name: "README.md",
      },
      {
        id: "19",
        isSelectable: true,
        name: "tailwind.config.ts",
      },
      {
        id: "20",
        isSelectable: true,
        name: "tsconfig.json",
      },
    ],
  },
];
