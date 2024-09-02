import React from 'react'
import { experience } from '@/data/experience'
import ExperienceCard from './components/ExperienceCard'
import Animation from '@/components/Animation';

export const metadata = {
    title: "Experience | Harman Shienh",
    description: "Harman Shienh - Experience tab",
  };  

export default function page() {
    return (
      <section className='py-24'>
          <div className='container max-w-5xl flex flex-col gap-4'>
              <h1 className='text-3xl font-bold text-foreground'>Experience</h1>
              <Animation>
              {experience && experience.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} />
              ))}
              </Animation>
          </div>
      </section>
    )
  }
  
