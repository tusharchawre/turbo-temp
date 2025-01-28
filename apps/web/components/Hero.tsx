"use client";
import { Copy, Terminal } from "lucide-react";
import Image from "next/image";
import { Fira_Code } from "next/font/google";
import { useTheme } from "next-themes";

const code = Fira_Code({
  subsets: ["latin"],
});

export const Hero = () => {
  const { theme, resolvedTheme } = useTheme(); // Use resolvedTheme to check when the theme is set

  return (
    <div
      className={`w-full flex items-center justify-center text-foreground pt-28`}
    >
      <div className="flex flex-col gap-2 text-center items-center justify-center w-[900px]">
        <h1 className="font-bold text-[52px]">
          Skip the Setup, Start Building
        </h1>
        <p className="text-foreground/50">
          Transform your workflow with one command. Our CLI instantly scaffolds
          Turborepo, Next.js, and React projects with proven templates. No setup
          headaches - start building what matters in seconds.
        </p>

        <div className="w-2xl h-[78px] dark:bg-[#171717] bg-[#F5F5F5] mt-12 rounded-2xl px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Render the Image only when the theme is resolved */}
            {resolvedTheme ? (
              <Image
                src={
                  resolvedTheme === "dark"
                    ? "/icons/terminal-dark.svg"
                    : "/icons/terminal-light.svg"
                }
                alt="Terminal Icon"
                width={33}
                height={26}
              />
            ) : (
              <Image
                src={"/icons/terminal-dark.svg"}
                alt="Terminal Icon"
                width={33}
                height={26}
              />
            )}
            <p className={`text-2xl ${code.className} text-foreground/50`}>
              <span className="dark:text-[#B8FFD466] text-[#00FF6666]">
                npx
              </span>{" "}
              create-turbo-tpl@latest
            </p>
          </div>

          <div className="hover:bg-muted-foreground/20 transition rounded-md p-2">
            <Copy className="w-7 h-7 text-foreground/30" />
          </div>
        </div>
      </div>
    </div>
  );
};
