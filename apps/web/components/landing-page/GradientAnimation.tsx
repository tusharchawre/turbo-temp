"use client";
import { motion } from "motion/react";

export const GradientAnimation = () => {
  const pathVariants_yellow = {
    initial: {
      d: "M516 949C584 855 31 368 -302 204C-635 41 -548 519 -257 729C-16 904 448 1044 516 949Z",
      opacity: 0.86,
    },
    animate: {
      d: "M516 949C584 855 31 368 -302 204C-635 41 -548 519 -257 729C-16 904 448 1044 516 949Z",
      opacity: 0.4,
    },
  };

  const pathVariants_pink = {
    initial: {
      d: "M507 391C154 179 -196 88 -372 65C-634 25 -620 643 -352 909C-100 1158 1747 1387 1320 885C1093 618 807 572 507 391Z",
    },
    animate: {
      d: "M544 867C191 655 -226 188 -372 165C-634 125 -604 786 -336 1052C-84 1301 1747 1587 1320 1085C1093 818 844 1048 544 867Z",
    },
  };

  const pathVariants_purple = {
    initial: {
      d: "M587 381C211 252 100 269 -38 252C-283 222 -363 742 -103 993C141 1228 1695 1469 1281 993C1180 878 1175 929 1041 869C881 798 757 440 587 381Z",
    },
    animate: {
      d: "M619 657C283 462 -57 92 -194 75C-440 45 -404 746 -144 996C99 1231 1790 1472 1375 996C1154 743 905 823 619 657Z",
    },
  };

  return (
    <div className="w-full absolute top-[170px] h-[1700px] overflow-hidden">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="1520"
        viewBox="0 0 1440 1520"
        fill="none"
        className="absolute z-0"
        style={{ willChange: "transform" }}
      >
        <g filter="url(#filter0_f_purple)">
          <motion.path
            variants={pathVariants_purple}
            initial="initial"
            animate="animate"
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            fill="#280075"
            fillOpacity="0.66"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_purple"
            x="-610"
            y="-176"
            width="2300"
            height="1696"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="100" />
          </filter>
        </defs>
      </motion.svg>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="2000"
        viewBox="0 0 1440 2000"
        fill="none"
        className="absolute z-10"
        style={{ willChange: "transform" }}
      >
        <g filter="url(#filter0_f_pink)">
          <motion.path
            className="translate-y-[160px]"
            variants={pathVariants_pink}
            initial="initial"
            animate="animate"
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            fill="#CF00A3"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_pink"
            x="-861"
            y="-136"
            width="2498"
            height="1871"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="120" />
          </filter>
        </defs>
      </motion.svg>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="692"
        height="2000"
        viewBox="0 0 692 2000"
        fill="none"
        className="absolute z-20 translate-y-[400px]"
        style={{ willChange: "transform" }}
      >
        <g filter="url(#filter0_f_yellow)">
          <motion.path
            variants={pathVariants_yellow}
            initial="initial"
            animate="animate"
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            fill="#FF8993"
            fillOpacity="0.86"
          />
          <path
            d="M516 949C584 855 31 368 -302 204C-635 41 -548 519 -257 729C-16 904 448 1044 516 949Z"
            stroke="#FF1D74"
            strokeWidth="40"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_yellow"
            x="-686"
            y="1"
            width="1378"
            height="1149"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="60" />
          </filter>
        </defs>
      </motion.svg>
    </div>
  );
};
