import React from 'react'
import {
    SiMongodb,
    SiExpress,
    SiReact,
    SiTailwindcss,
    SiNodedotjs
  } from "react-icons/si";
import FirebaseLogo from '../public/images/firebase.png'
import TypeScriptLogo from '../public/images/typescript.png'
import NextLogo from './NextLogo';
import Image from 'next/image';

export default function Technologies() {
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-2xl sm:text-4xl font-semibold'>Technologies I&#39;ve worked with:</h1>
        <div className='flex gap-2 sm:gap-8 select-none'>
            <Image
                src={FirebaseLogo}
                width={0}
                height={0}
                alt='Firebase'
                quality={100}
                priority
                className='w-auto h-8 sm:h-14 my-auto'
             />
            <SiMongodb className='text-6xl text-green-800' />
            <SiExpress className='text-6xl' />
            <SiReact className='text-6xl text-sky-400' />
            <SiNodedotjs className='text-6xl text-green-600' />
            <Image
                src={TypeScriptLogo}
                width={0}
                height={0}
                alt='Typescript'
                quality={100}
                priority
                className='w-auto h-8 sm:h-14 my-auto'
             />
            <SiTailwindcss className='text-6xl text-sky-400' />
            <NextLogo />
        </div>
    </div>
  )
}
