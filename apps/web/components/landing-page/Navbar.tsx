"use client";

import { Github, Sun, Moon } from "lucide-react";
import { Search } from "./Search";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="w-full mx-auto inset-0 flex flex-col sm:flex-row items-center justify-between h-fit sm:h-12 px-4 sm:px-8 py-2 sm:py-0 gap-2 sm:gap-0">
      <div className="text-2xl text-foreground flex gap-6 sm:gap-12 items-center cursor-default">
        <p onClick={() => router.push("/")}>turbo_tpl</p>
        <p
          onClick={() => router.push("/docs")}
          className="text-sm text-foreground/50 font-light cursor-default hover:text-foreground/40 transition-all ease-in-out duration-100"
        >
          Docs
        </p>
      </div>

      <div className="flex items-center gap-4">
        <p
          onClick={() => router.push("https://x.com/TusharCtwt")}
          className="text-sm text-foreground/50 font-light cursor-default hover:text-foreground/40 transition-all ease-in-out duration-100 mr-4"
        >
          Twitter
        </p>
        <Search />
        {theme === "light" ? (
          <Sun
            onClick={toggleTheme}
            className="text-foreground/50 h-6 w-6 p-1 rounded-sm hover:bg-muted/40 transition cursor-pointer"
          />
        ) : (
          <Moon
            onClick={toggleTheme}
            className="text-foreground/50 h-6 w-6 p-1 rounded-sm hover:bg-muted/40 transition cursor-pointer"
          />
        )}
        <Github
          onClick={() =>
            router.push("https://github.com/tusharchawre/turbo-temp")
          }
          className="text-foreground/50 h-6 w-6 p-1 rounded-sm hover:bg-muted/20 transition cursor-pointer"
        />
      </div>
    </div>
  );
};
