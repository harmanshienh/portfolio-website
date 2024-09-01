"use client"
import { ProjectDataProps } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { extractURLParams } from '@/lib/utils'

interface projectImageProps {
  project: ProjectDataProps
}

export default function ProjectImage({ project }: projectImageProps) {
  const [hover, setHover] = useState(false);
  const websiteProjectURL = extractURLParams(project.title)

  const handleInnerLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="relative max-w-fit overflow-hidden rounded-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={project.logo}
        alt={project.title}
        quality={100}
        className={`rounded-lg w-auto h-auto transition-transform duration-150 
          ${hover ? 'scale-110 blur-sm' : ''}`}
        style={{ transformOrigin: 'center' }}
      />

        <Link href={`/projects/${websiteProjectURL}`} className={`cursor-pointer rounded-lg absolute inset-0 bg-zinc-600 
                        bg-opacity-70 items-center justify-center flex flex-col 
                        text-white transition-all duration-150
                        ${hover ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`flex flex-col justify-center items-center 
                          transition-transform duration-150 
                          ${hover ? 'translate-y-0' : '-translate-y-full'}`}>
            <span onClick={handleInnerLinkClick}
              className="text-lg font-semibold hover:underline">
              {project.title}
            </span>
            <span className="text-md text-center">
              {project.summary}
            </span>
          </div>
        </Link>
    </div>
  )
}
