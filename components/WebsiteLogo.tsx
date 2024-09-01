'use client'
import Image from 'next/image';
import WebsiteDarkLogo from '@/public/logos/website-logo-dark.png'
import WebsiteLightLogo from '@/public/logos/website-logo-light.png'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const WebsiteLogo = () => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className='h-12 w-auto'></div>
    }

    const websiteLogo = resolvedTheme === 'dark' ? WebsiteDarkLogo : WebsiteLightLogo
    return (
        <Image 
            src={websiteLogo}
            height={0}
            width={0}
            alt='Harman Shienh'
            className='max-h-12 w-auto'/>
    )
}

export default dynamic(() => Promise.resolve(WebsiteLogo), { ssr: false })