import DisplayCards from "../ui/display-cards";

export const Features = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center py-8 sm:py-24 relative px-2 sm:px-32 gap-8 z-[100]">
      {/* Mobile: stacked cards, Desktop: grid */}
      <div className="flex flex-col gap-4 w-full lg:w-[50%] sm:hidden">
        <div className="bg-background/80 border border-white/30 rounded-xl p-4">
          <h1 className="font-semibold text-xl mb-1">Turborepo</h1>
          <p className="text-sm font-[400] text-foreground/70">
            Save hours of configuration headaches. Our templates instantly set
            up Turborepo projects with Tailwind, shadcn/ui, and other popular
            tools - all pre-configured and ready to build.
          </p>
        </div>
        <div className="bg-background/80 border border-white/30 rounded-xl p-4">
          <h1 className="font-semibold text-xl mb-1">NextJs</h1>
          <p className="text-sm font-[400] text-foreground/70">
            Our templates seamlessly integrate shadcn/ui, Tailwind, and other
            must-have tools, so you can stop debugging setups and start building
            your next big idea.
          </p>
        </div>
        <div className="bg-background/80 border border-white/30 rounded-xl p-4">
          <h1 className="font-semibold text-xl mb-1">ReactJs</h1>
          <p className="text-sm font-[400] text-foreground/70">
            Accelerate your React.js development. Our templates handle the heavy
            lifting of configuring React with Tailwind and other essential
            tools, saving you of setup time.
          </p>
        </div>
      </div>
      <div className="hidden sm:grid grid-cols-12 w-full lg:w-[50%] grid-rows-14 relative z-50 h-[320px] sm:h-[500px]">
        <div className="... row-span-1  border-b border-white/60" />
        <div className="col-span-10 row-span-1 border-b border-x border-white/60" />
        <div className="... row-span-1 border-b border-white/60" />

        <div className="... row-span-4" />
        <div className="row-span-4 col-span-10 border-x border-white/60 p-2 flex flex-col justify-center">
          <h1 className="font-semibold text-3xl mb-1">Turborepo</h1>
          <p className="text-base font-[400] text-foreground/70">
            Save hours of configuration headaches. Our templates instantly set
            up Turborepo projects with Tailwind, shadcn/ui, and other popular
            tools - all pre-configured and ready to build.
          </p>
        </div>
        <div className="... row-span-4 " />

        <div className="... row-span-4 " />
        <div className="row-span-4 col-span-10  border border-white/60 p-2 flex flex-col justify-center">
          <h1 className="font-semibold text-3xl mb-1">NextJs</h1>
          <p className="text-base font-[400] text-foreground/70">
            Our templates seamlessly integrate shadcn/ui, Tailwind, and other
            must-have tools, so you can stop debugging setups and start building
            your next big idea.
          </p>
        </div>
        <div className="... row-span-4 " />

        <div className="... row-span-4 " />
        <div className="row-span-4 col-span-10  border-x border-white/60 p-2 flex flex-col justify-center">
          <h1 className="font-semibold text-3xl mb-1">ReactJs</h1>
          <p className="text-base font-[400] text-foreground/70">
            Accelerate your React.js development. Our templates handle the heavy
            lifting of configuring React with Tailwind and other essential
            tools, saving you of setup time.
          </p>
        </div>
        <div className="... row-span-4 " />

        <div className="... row-span-1 border-t border-white/60" />
        <div className="col-span-10 row-span-1 border-t border-x border-white/60"></div>
        <div className="... row-span-1 border-t border-white/60" />
      </div>

      <div className="w-full lg:w-[50%] mt-8 lg:mt-0 hidden sm:block">
        <DisplayCards />
      </div>
    </div>
  );
};
