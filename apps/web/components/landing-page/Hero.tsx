"use client";
import { Check, Copy, Terminal } from "lucide-react";
import Image from "next/image";
import { Fira_Code } from "next/font/google";
import { useTheme } from "next-themes";
import { animate, motion, useAnimate } from "motion/react";
import { useState } from "react";

const code = Fira_Code({
  subsets: ["latin"],
});

export const Hero = () => {
  const { theme, resolvedTheme } = useTheme();

  const [scope, animate] = useAnimate();

  const handleCopy = () => {
    animate([
      [".copy-button", { y: -40 }, { duration: 0.1, ease: "easeOut" }],
      [
        ".check-button",
        { y: -32, color: "#ffffff50" },
        { duration: 0.1, ease: "easeOut" },
      ],
      [".check-button", { y: 0 }, { duration: 0.1, delay: 2, ease: "easeIn" }],
      [".copy-button", { y: 0 }, { duration: 0.1, ease: "easeIn" }],
    ]);

    navigator.clipboard.writeText("npx create-turbo-tpl@latest");
  };

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

        <div className="w-2xl h-[78px] dark:bg-[#171717] bg-[#F5F5F5] mt-12 rounded-2xl px-6 py-2 flex items-center justify-between relative z-[80]">
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

          <motion.button
            ref={scope}
            onClick={handleCopy}
            className="bg-none hover:bg-foreground/5 transition-all rounded-md p-2 overflow-hidden relative"
          >
            <Copy className="w-7 h-7 text-foreground/30 copy-button" />

            <Check className="w-7 h-7 text-foreground/30 absolute mt-1 check-button " />
          </motion.button>
        </div>
      </div>
    </div>
  );
};
