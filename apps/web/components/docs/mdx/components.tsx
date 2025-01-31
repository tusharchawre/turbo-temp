"use client"
import { Check, Copy } from "lucide-react";
import React from "react";
import {motion, useAnimate} from "motion/react"

interface StepProps {
    children: React.ReactNode
    copyCommand: boolean
}


export const Step = ({ children, copyCommand = true }: StepProps) => {


    const [scope, animate] = useAnimate();

  const handleCopy = () => {
    animate([
      [".copy-button", { y: -40 }, { duration: 0.1, ease: "easeOut" }],
      [
        ".check-button",
        { y: -18, color: "#ffffff50" },
        { duration: 0.1, ease: "easeOut" },
      ],
      [".check-button", { y: 0 }, { duration: 0.1, delay: 2, ease: "easeIn" }],
      [".copy-button", { y: 0 }, { duration: 0.1, ease: "easeIn" }],
    ]);

    navigator.clipboard.writeText("npx create-turbo-tpl@latest");
  };


    return (
      <div className="w-fit min-w-[65%] flex flex-col justify-center rounded-lg bg-muted-foreground/10 px-4 py-1 my-2">
        <div className="flex h-fit items-center justify-between text-muted-foreground/60 border-b border-muted-foreground/5 py-1">
        {copyCommand? (
            <>
            <p>bash</p>
        <motion.button
            ref={scope}
            onClick={handleCopy}
            className="bg-none hover:bg-foreground/5 transition-all rounded-md p-2 overflow-hidden relative"
          >
            <Copy className="w-4 h-4 text-foreground/30 copy-button" />

            <Check className="w-4 h-4 text-foreground/30 absolute mt-1 check-button " />
          </motion.button>
          </>
          ): (<>
          <p>Terminal</p>
          </>)}
        </div>
        <div className="my-2 flex flex-col items-start text-sm">
        {children}
        </div>
      </div>
    );
  };
  