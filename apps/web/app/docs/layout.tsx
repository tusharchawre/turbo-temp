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
    <main className={`h-screen w-full flex flex-col ${inter.className}`}>
    <Navbar />
    <Separator />
    <div className="flex flex-1 overflow-hidden">
      <aside className="sticky top-0 h-screen overflow-y-auto shrink-0">
        <AppSidebar config={docsConfig} />
      </aside>
      <div className="flex-1 h-full overflow-auto">
        {children}
      </div>
    </div>
  </main>
  );
}
