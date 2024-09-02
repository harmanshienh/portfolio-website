import React from 'react'
import { ExperienceDataProps } from '@/data/experience'
import Image from 'next/image'

interface ExperienceCardProps {
    experience: ExperienceDataProps
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    const { company, jobTitle, summary, startDate, endDate, logo } = experience

    return (
        <div className='flex max-sm:flex-col w-full gap-3 items-center'>
            <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-1'>
                        <span className='font-semibold text-lg sm:text-xl italic text-foreground'>
                            {jobTitle}
                        </span>
                        <span className='font-bold text-lg sm:text-xl text-foreground'>
                            {company}
                        </span>
                    </div>
                    <span className='text-sm sm:text-md text-foreground'>
                        {startDate} - {endDate}
                    </span>
                </div>
                <span className='font-medium text-primary'>
                    {summary}
                </span>

            </div>
            <Image
                src={logo}
                height={0}
                width={0}
                alt={company}
                style={{ height: 'auto', width: '40%' }}
                className='rounded-md shadow-sm' />
        </div>
    )
}
