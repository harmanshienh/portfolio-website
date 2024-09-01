import { projects } from '@/data/projects';
import { extractURLParams } from './page';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  console.log('Slug:', params.slug); // Log the received slug

  const project = projects.find((project) => {
    const extractedParams = extractURLParams(project.title);
    console.log('Project title:', project.title);
    console.log('Extracted params:', extractedParams);
    return extractedParams === params.slug;
  });

  if (!project) {
    console.log('Project not found');
    return {
      title: 'Project Not Found', // Fallback title
    };
  }

  console.log('Found project:', project.title);

  return {
    title: project.title,
    description: project.summary,
  };
}