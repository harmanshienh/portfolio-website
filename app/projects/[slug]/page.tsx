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

export const extractURLParams = (slug: string) => {
  return slug.toLowerCase().replaceAll(" ", "-")
}

export default function page({ params }: { params: { slug: string } }) {

  const project = projects.find((project) => extractURLParams(project.title) === params.slug)

  if (!project) {
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
        <div className='flex flex-wrap items-start justify-between gap-2'>
          <div className='flex flex-wrap items-start gap-2'>
            <div className='flex items-start gap-2'>
              <Link href={link} target='_blank' className='text-3xl hover:cursor-pointer hover:underline'>
                {title}
              </Link>
              <Link href={repoLink} target='_blank' className='mt-1'>
                <SiGithub className='text-3xl' />
              </Link>
            </div>
          </div>
          <span className='text-xl'>
            {date}
          </span>
        </div>
        <div className='flex flex-wrap gap-2'>
          {tags && tags.map((tag, index) => (
            <Badge key={index} variant="destructive" className='text-md'>{tag}</Badge>
          ))}
        </div>
        <p className='text-md text-muted-foreground'>
          {description}
        </p>
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
      </div>
    </section>
  )
}
