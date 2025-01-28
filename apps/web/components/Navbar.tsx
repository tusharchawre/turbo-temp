"use client";

import { Github, Sun, Moon } from "lucide-react";
import { Search } from "./Search";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter()
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="w-full mx-auto inset-0 mt-5 flex items-center justify-between h-8 px-8">
      <div  className="text-2xl text-foreground flex gap-16 items-center cursor-default">
        <p onClick={()=>router.push("/")}>turbo_tpl</p>
        <p onClick={()=>router.push("/templates")} className="text-base text-foreground/50 font-normal cursor-default hover:text-foreground/40 transition-all ease-in-out duration-100">Templates</p>
      </div>

      <div className="flex items-center gap-4">
        <p onClick={()=>router.push("https://x.com/TusharCtwt")} 
        className="text-base text-foreground/50 font-normal cursor-default hover:text-foreground/40 transition-all ease-in-out duration-100 mr-8">
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
        onClick={()=>router.push("https://github.com/tusharchawre/turbo-temp")} className="text-foreground/50 h-6 w-6 p-1 rounded-sm hover:bg-muted/20 transition cursor-pointer" />
      </div>
    </div>
  );
};
