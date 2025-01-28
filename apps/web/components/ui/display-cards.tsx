"use client";

import { cn } from "@/lib/utils";
import { Sparkles, Terminal } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string[];
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = [],
  date = "and more ...",
  iconClassName = "text-muted-foreground/40",
  titleClassName = "",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2 z-50",
        className,
      )}
    >
      <div>
        <span className="relative inline-block rounded-full p-1">{icon}</span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="text-base">{description[0]}</p>
      <p className="text-base">{description[1]}</p>

      <p className="text-muted-foreground">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      icon: <Terminal className="size-4" />,
      title: "ReactJs",
      description: ["> ReactJS (Vite)", "> React with Tailwind"],
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl after:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Terminal className="size-4" />,
      title: "NextJs",
      description: ["> NextJs with shadcn", "> NextJs-starter"],
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl after:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Terminal className="size-4" />,
      title: "Turborepo",
      description: ["> Turborepo with shadcn", "> Turborepo with tailwind"],
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10 before:rounded-xl after:rounded-xl",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center duration-700 relative z-50 -translate-y-12">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
