"use client";

import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();

  return (
    <div className="w-full h-64 border-t border-t-foreground/30 translate-y-4 px-12 py-8 cursor-default">
      <div className="w-full max-w-[1240px] flex items-start justify-between">
        <div>
          <h1 className="text-2xl mb-1">turbo_tpl</h1>
          <p className="text-base text-foreground/40">
            Building in public{" "}
            <span
              onClick={() => router.push("https://x.com/tusharctwt")}
              className="text-[#0084FFC4] hover:text-[#0084ff96] cursor-pointer transition-all ease-in-out"
            >
              @TusharCtwt
            </span>
          </p>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col text-foreground/40 gap-4 text-sm">
            <p
              className="hover:text-foreground/30 transition-all"
              onClick={() => router.push("/templates")}
            >
              Templates
            </p>
            <p
              className="hover:text-foreground/30 transition-all"
              onClick={() => router.push("/about")}
            >
              About
            </p>
            <p
              className="hover:text-foreground/30 transition-all"
              onClick={() => router.push("/request-a-template")}
            >
              Request A Template
            </p>
          </div>

          <div className="flex flex-col text-foreground/40 gap-4 text-sm">
            <p
              className="hover:text-foreground/30 transition-all"
              onClick={() => router.push("https://x.com/tusharctwt")}
            >
              Twitter
            </p>
            <p
              className="hover:text-foreground/30 transition-all"
              onClick={() =>
                router.push("https://github.com/tusharchawre/turbo-temp")
              }
            >
              GitHub
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
