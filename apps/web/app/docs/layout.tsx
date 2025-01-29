import { AppSidebar } from "@/components/docs/app-sidebar";
import { Navbar } from "@/components/landing-page/Navbar";
import { Separator } from "@/components/ui/separator";
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
      <main className={`h-screen overflow-hidden ${inter.className}`} >
        <Navbar />
        <Separator />
          <div className="flex">
            <AppSidebar />
              {children}
          </div>
          </main>
  );
}
