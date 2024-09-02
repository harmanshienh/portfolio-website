import React from 'react'
import { projects } from '@/data/projects'
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Link from 'next/link'
import { SiGithub } from "react-icons/si";
import { extractURLParams } from '@/lib/utils'
import NotFound from '@/app/not-found'
import Animation from '@/components/Animation'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => {
    const extractedParams = extractURLParams(project.title);
    return extractedParams === params.slug;
  });

  if (!project) {
    return null;
  }

  return {
    title: `${project.title} | Harman Shienh`,
    description: project.summary,
  };
}

export default function page({ params }: { params: { slug: string } }) {

  const project = projects.find((project) => extractURLParams(project.title) === params.slug)

  if (!project) {
    NotFound()
    return;
  }

  const { title, description, date, link, repoLink, tags, images } = project

  return (
    <section className='py-24'>
      <div className='container max-w-5xl flex flex-col gap-4'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Animation>
        <div className='flex flex-wrap items-start justify-between gap-2'>
          <div className='flex flex-wrap items-start gap-2'>
            <div className='flex items-start gap-2'>
              <Link href={link} target='_blank' className='text-3xl hover:cursor-pointer hover:underline text-foreground'>
                {title}
              </Link>
              <Link href={repoLink} target='_blank' className='mt-1'>
                <SiGithub className='text-3xl text-foreground' />
              </Link>
            </div>
          </div>
          <span className='text-xl'>
            {date}
          </span>
        </div>
        </Animation>
        <Animation>
        <div className='flex flex-wrap gap-2'>
          <Animation direction='X'>
          {tags && tags.map((tag, index) => (
            <Badge key={index} variant="destructive" className='text-md'>{tag}</Badge>
          ))}
          </Animation>
        </div>
        </Animation>
        <Animation initialDelay={400}>
        <p className='text-md text-muted-foreground'>
          {description}
        </p>
        </Animation>
        <Animation initialDelay={800}>
        <Carousel>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <Image
                  key={index}
                  src={image}
                  alt={title}
                  quality={100}
                  className='rounded-lg w-full h-auto' />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden lg:flex' />
          <CarouselNext className='hidden lg:flex' />
        </Carousel>
        </Animation>
      </div>
    </section>
  )
}
