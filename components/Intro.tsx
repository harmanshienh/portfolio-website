import Link from "next/link";
import { SiGithub } from "react-icons/si";
import linkedInLogo from "@/public/images/linkedin.png"
import gmailLogo from "@/public/images/gmail.png"
import Image from "next/image";

export default function Intro() {
  return (
    <section className='flex flex-col items-start gap-x-10 gap-y-4 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='font-bold text-4xl sm:text-5xl no-underline'>Hi, I&#39;m Harman!</h1>
        <p className='mt-3 font-light text-lg sm:text-3xl text-muted-foreground'>
          I&#39;m an aspiring Software Engineer, currently studying
          Computer Engineering at the University of Waterloo.
        </p>
        <p className='mt-3 font-light text-lg sm:text-3xl text-muted-foreground'>
          My interests are in Web/App development and UI/UX design. I&#39;m also
          exploring the field of Embedded Software.
        </p>
        <div className="flex w-full flex-col sm:flex-row gap-3">
          <p className='mt-3 font-light text-lg sm:text-3xl text-muted-foreground'>
            Feel free to reach out! I&#39;m always open to meeting new people and
            exploring different fields!
          </p>
          <div className="flex sm:flex-col gap-4 sm:gap-2 max-sm:items-center mt-3
          select-none">
            <div className="group flex gap-2">
              <Link href="mailto:harmanshienh01@gmail.com" className="min-w-fit">
                <Image
                  src={gmailLogo}
                  height={0}
                  width={0}
                  alt='harmanshienh01@gmail.com'
                  className="w-9 h-auto" />
              </Link>
              <div className="rounded-full border-2 border-primary opacity-0 
              group-hover:opacity-100 transition-opacity duration-300 max-sm:hidden">
                <span className="p-2 text-lg font-semibold text-foreground hover:cursor-default
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  harmanshienh01@gmail.com
                </span>
              </div>
            </div>
            <div className="group flex gap-2">
              <Link href="https://www.linkedin.com/in/harman-shienh-1a7aa8281/" 
              target="_blank" className="min-w-fit">
                <Image
                  src={linkedInLogo}
                  height={0}
                  width={0}
                  alt='Harman Shienh'
                  className="w-9 h-auto" />
              </Link>
              <div className="rounded-full border-2 border-primary opacity-0 
              group-hover:opacity-100 transition-opacity duration-300 max-sm:hidden">
                <span className="p-2 text-lg font-semibold text-foreground hover:cursor-default
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Harman Shienh
                </span>
              </div>
            </div>
            <div className="group flex gap-2">
              <Link href="https://github.com/harmanshienh" 
              target="_blank" className="min-w-fit">
                <SiGithub className="w-9 h-auto" />
              </Link>
              <div className="rounded-full border-2 border-primary opacity-0 
              group-hover:opacity-100 transition-opacity duration-300 max-sm:hidden">
                <span className="p-2 text-lg font-semibold text-foreground hover:cursor-default
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  harmanshienh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}