import { Features } from "@/components/landing-page/Features";
import { Footer } from "@/components/landing-page/Footer";
import { GradientAnimation } from "@/components/landing-page/GradientAnimation";
import { Hero } from "@/components/landing-page/Hero";
import { Navbar } from "@/components/landing-page/Navbar";
import { Video } from "@/components/landing-page/Video";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className={`bg-background w-full h-fit relative ${inter.className}`}>
      <Navbar />
      <Hero />
      <Video />
      <GradientAnimation />
      <Features />
      <Footer />
    </div>
  );
};

export default page;
