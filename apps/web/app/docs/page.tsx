
import FileTreeDemo from '@/components/docs/file-tree-demo'
import { ChevronRight } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='px-20 py-8 flex gap-4 flex-col w-[60%]'>
     <div className='text-sm flex gap-1 items-center text-muted-foreground'>
        <p >Docs</p>
        <ChevronRight className='h-4 w-4' />
        <p className='text-white'>Introduction</p>
        </div>

        <h1 className='text-3xl font-medium'>Introduction</h1>
        
        <p className='text-muted-foreground'>
        Collection of beautifully crafted, ready-to-use project templates that you can copy and paste into your development environment. Designed to save you time and eliminate the hassle of setting up projects.
        </p>

        <FileTreeDemo />

    </div>
  )
}

export default page