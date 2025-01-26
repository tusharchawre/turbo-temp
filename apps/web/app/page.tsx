import React from "react";

const page = () => {
  return (
    <div className="bg-black w-full h-screen overflow-hidden flex items-center justify-center text-white relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-[300px] h-[300px] bg-blue-500/30 rounded-full absolute top-1/4 left-2/5 blur-3xl animate-pulse -translate-x-16"></div>
        <div className="w-[200px] h-[200px] bg-purple-500/30 rounded-full absolute bottom-1/4 left-2/4 blur-3xl animate-pulse -translate-y-10"></div>
        <div className="w-[150px] h-[150px] bg-pink-500/30 rounded-full absolute top-3/5 left-2/5 blur-3xl animate-pulse"></div>
      </div>

      <div className="w-4/5 h-4/5 bg-gradient-to-br from-white/[0.01] to-white/[0.03] rounded-xl border-[0.5px] border-white/5 flex items-center justify-center flex-col gap-2 relative z-10 backdrop-blur-3xl text-center">
        <div>
          <p className="font-semibold text-6xl mb-2">turbo_tpl</p>
          <p className="text-white/30">
            This template was generated with turbo_tpl
          </p>
        </div>

        <div className="w-80 h-10 rounded-md bg-white/5 absolute top-5 left-5 flex items-center justify-center text-white/50 scale-90">
          <p>
            Get started by editing{" "}
            <span className="font-bold bg-white/10 px-2 py-1 rounded-sm">
              app/page.tsx
            </span>
          </p>
        </div>

        <div className="w-fit px-4 h-10 rounded-md bg-white/5 absolute top-5 right-5 flex items-center justify-center text-white/50 scale-90">
          <p>By</p>

          <a href="">
            <div className="group/link font-bold ml-2 bg-white/10 px-2 py-1 rounded-sm  transition-all flex gap-2 items-center h-7">
              <p className="group-hover/link:underline">Tushar</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 512 512"
                id="twitter"
                className="opacity-45"
              >
                <g clip-path="url(#clip0_84_15697)">
                  <rect width="512" height="512" fill="#000" rx="60"></rect>
                  <path
                    fill="#fff"
                    d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_84_15697">
                    <rect width="512" height="512" fill="#fff"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </a>
        </div>

        <div className="w-fit px-4 h-10 rounded-md bg-white/5 absolute bottom-5 left-[50%] -translate-x-[50%] flex items-center justify-center text-white/50 scale-90">
          <p>More info:</p>
          <a href="">
            <div className="group/link font-bold ml-2 bg-white/10 px-2 py-1 rounded-sm  transition-all flex gap-2 items-center h-7">
              <p className="group-hover/link:underline">turbo-tpl.vercel.com</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-external-link h-4 w-4"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
