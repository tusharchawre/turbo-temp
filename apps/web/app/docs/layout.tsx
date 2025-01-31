import { AppSidebar } from "@/components/docs/app-sidebar";
import { Navbar } from "@/components/landing-page/Navbar";
import { Separator } from "@/components/ui/separator";
import { docsConfig } from "@/config/docs";
import { useLiveReload } from "next-contentlayer2/hooks";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "greek"]
})

export default async function DocLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <main className={`h-screen w-full ${inter.className}`} >
        <Navbar />
        <Separator />
          <div className="flex overflow-hidden">
            <aside className="sticky h-screen no-scrollbar overflow-scroll shrink-0">
            <AppSidebar config={docsConfig} />
            </aside>
            <div className="overflow-scroll w-[90%]">
              {children}
            </div>
          </div>
          </main>
  );
}
