"use client"

import { Github, Sun, Moon } from "lucide-react"
import { Search } from "./Search"
import { useTheme } from "next-themes"

export const Navbar = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className="w-full mx-auto inset-0 mt-5 flex items-center justify-between h-8 px-8">
      <div className="text-2xl text-foreground flex gap-16 items-center">
        <p>turbo_tpl</p>
        <p className="text-base text-foreground/50 font-normal">Templates</p>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-base text-foreground/50 font-normal">Twitter</p>
        <Search />
        {theme === "light" ? (
          <Sun
            onClick={toggleTheme}
            className="text-foreground/50 h-6 w-6 p-1 rounded-sm hover:bg-muted/20 transition cursor-pointer"
          />
        ) : (
          <Moon
            onClick={toggleTheme}
            className="text-foreground/50 h-6 w-6 p-1 rounded-sm hover:bg-muted/20 transition cursor-pointer"
          />
        )}
        <Github className="text-foreground/50 h-6 w-6 p-1 rounded-sm hover:bg-muted/20 transition" />
      </div>
    </div>
  )
}

