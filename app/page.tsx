import Animation from '@/components/Animation'
import Intro from '@/components/Intro'
import ProjectsDisplay from '@/components/ProjectsDisplay'
import Technologies from '@/components/Technologies'
import React from 'react'

export default function page() {
  return (
    <section className='py-24'>
      <div className='container max-w-5xl flex flex-col gap-8'>
        <Animation>
          <Intro />
          <Technologies />
          <ProjectsDisplay />
        </Animation>
      </div>
    </section>
  )
}
