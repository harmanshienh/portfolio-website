import React from 'react'
import { ExperienceDataProps } from '@/data/experience'
import Image from 'next/image'

interface ExperienceCardProps {
    experience: ExperienceDataProps,
    index: number
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
    const { company, jobTitle, summary, startDate, endDate, logo } = experience

    return (
        <>
            {index % 2 == 0 ? (
                <div className='flex flex-col sm:flex-row w-full gap-3 items-center'>
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
                        className='rounded-md shadow-sm max-sm:w-full sm:w-2/5 h-auto' />
                </div>
            )
            : (
                <div className='flex flex-col sm:flex-row w-full gap-3 items-center'>
                    <div className='order-1 sm:order-2 flex flex-col'>
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
                        className='order-2 sm:order-1 rounded-md shadow-sm max-sm:w-full sm:w-2/5 h-auto' />
                </div>
                )
            }
        </>
    )
}
