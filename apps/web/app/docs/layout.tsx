import { AppSidebar } from "@/components/docs/app-sidebar";
import { Navbar } from "@/components/landing-page/Navbar";
import { Separator } from "@/components/ui/separator";
import { docsConfig } from "@/config/docs";
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
      <main className={`h-screen ${inter.className}`} >
        <Navbar />
        <Separator />
          <div className="flex overflow-auto">
            <aside className="sticky h-screen no-scrollbar overflow-scroll">
            <AppSidebar config={docsConfig} />
            </aside>
              {children}
          </div>
          </main>
  );
}
