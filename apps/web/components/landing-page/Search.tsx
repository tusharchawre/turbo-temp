"use client";

import * as React from "react";
import {
  SearchIcon,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/Command";
import { allDocs } from "contentlayer/generated";
import { useRouter } from "next/navigation";

export function Search() {
  const [open, setOpen] = React.useState(false);

  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div
        className="text-sm text-muted-foreground w-48 bg-foreground/5 hover:bg-foreground/10 px-2 py-1 rounded-md flex justify-between border border-foreground/20 cursor-pointer transition-all"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-2">
          <SearchIcon className="h-4 w-4" />
          <p>Search</p>
        </div>

        <div className="flex items-center gap-1">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border/20 bg-muted-foreground/50 px-1.5 font-mono text-[10px] font-medium text-foreground/60 opacity-100 scale-90">
            <span className="">⌘</span>K
          </kbd>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Documents">
            {
              allDocs.map((doc) => (
                <CommandItem
                key={doc._id}
                onSelect={() => {
                  setOpen(false); 
                  router.push(`/docs/${doc.slugAsParams}`); 
                }}
              >
                {doc.title}
              </CommandItem>
              ))
            }

          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
