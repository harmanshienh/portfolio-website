import React from 'react'
import { experience } from '@/data/experience'
import ExperienceCard from './components/ExperienceCard'

export const metadata = {
    title: "Experience | Harman Shienh",
    description: "Harman Shienh - Experience tab",
  };  

export default function page() {
    return (
      <section className='py-24'>
          <div className='container max-w-5xl flex flex-col gap-4'>
              <h1 className='text-3xl font-bold'>Experience</h1>
              {experience && experience.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} />
              ))}
          </div>
      </section>
    )
  }
  
