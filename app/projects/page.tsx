import React from 'react'
import { projects } from '@/data/projects'
import ProjectCard from '@/app/projects/components/ProjectCard'
import Animation from '@/components/Animation';

export const metadata = {
    title: "Projects | Harman Shienh",
    description: "Harman Shienh - Projects",
  };  

export default function page() {
  return (
    <section className='py-24'>
        <div className='container max-w-5xl flex flex-col gap-4'>
            <h1 className='text-3xl font-bold'>Projects</h1>
            <Animation>
            {projects && projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
            </Animation>
        </div>
    </section>
  )
}
