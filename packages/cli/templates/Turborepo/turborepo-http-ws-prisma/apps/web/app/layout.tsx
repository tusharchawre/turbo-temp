import type { Metadata } from "next";
import "./global.css"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "This app was created with turbo_tpl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
