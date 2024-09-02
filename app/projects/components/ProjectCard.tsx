import React from 'react'
import { ProjectDataProps } from '@/data/projects'
import { extractURLParams } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

interface projectCardProps {
    project: ProjectDataProps
}

export default function ProjectCard({ project }: projectCardProps) {
    const { title, summary, logo } = project
    const websiteProjectURL = extractURLParams(title)
  
    return (
      <Link href={`projects/${websiteProjectURL}`} className='w-full h-32 rounded-lg border-foreground border-1 shadow-sm'>
        <div className='flex h-full hover:bg-popover rounded-lg transition-colors duration-150'>
          <div className='flex flex-col gap-2 p-3 flex-grow'>
            <span className='text-xl font-bold text-foreground'>
              {title}
            </span>
            <span className='font-medium hidden sm:inline md:text-md text-foreground'>
              {summary}
            </span>
          </div>
          <div className='p-3 flex items-center border-l-foreground border-r-1'>
            <div className='rounded-lg overflow-hidden'>
              <Image
                src={logo}
                height={0}
                width={0}
                alt={title}
                className='max-w-48 h-auto w-auto'
              />
            </div>
          </div>
        </div>
      </Link>
    )
  }