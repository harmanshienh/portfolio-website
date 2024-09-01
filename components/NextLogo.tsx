'use client'
import Image from 'next/image';
import NextDarkLogo from '../public/images/next-dark.png'
import NextLightLogo from '../public/images/next-light.png'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const NextLogo = () => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className='h-12 w-auto'></div>
    }

    const nextJsLogo = resolvedTheme === 'dark' ? NextLightLogo : NextDarkLogo

    return (
        <Image
            src={nextJsLogo}
            width={0}
            height={0}
            alt='Next.js'
            quality={100}
            priority
            className='w-auto h-8 sm:h-14 my-auto'
        />
    )
}

export default dynamic(() => Promise.resolve(NextLogo), { ssr: false })