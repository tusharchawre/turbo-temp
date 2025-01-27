import type { Metadata } from "next";
import {Inter} from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "turbo_tpl",
  description: "Skip the setup, start building.",
};

const interFont = Inter({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interFont.className}>
      <body className="bg-foreground">{children}</body>
    </html>
  );
}
