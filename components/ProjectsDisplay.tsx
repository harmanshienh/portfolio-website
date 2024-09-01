import React from 'react'
import { projects } from '@/data/projects'
import ProjectImage from './ProjectImage'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

export default function ProjectsDisplay({ }) {
  return (
    <>
      <h1 className='text-2xl sm:text-4xl font-semibold'>
        Some projects I&#39;ve completed:
      </h1>
      <div className='flex gap-3 overflow-x-scroll select-none'>
        <Carousel opts={{ align: 'start', loop: true}}>
          <CarouselContent className='-ml-3'>
            {projects.map((project, index) => (
              <CarouselItem key={index} className='pl-3 basis-3/4 sm:basis-2/5'>
                <ProjectImage key={index} project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}
