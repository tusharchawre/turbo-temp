import { Features } from '@/components/Features'
import { GradientAnimation } from '@/components/GradientAnimation'
import { Hero } from '@/components/Hero'
import { LogoCrate } from '@/components/LogoCrate'
import { Navbar } from '@/components/Navbar'
import { Video } from '@/components/Video'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const inter = Inter({
  subsets: ["latin"]
})

const page = () => {
  return (
    <div className={`bg-foreground w-full h-fit relative ${inter.className}`}>
      <Navbar />
      <Hero />
      <Video />
      <GradientAnimation />

      
      <Features />
    </div>
  )
}

export default page