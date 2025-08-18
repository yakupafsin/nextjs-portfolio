import { notFound } from 'next/navigation'
import { allProjects } from 'contentlayer/generated'
import { Mdx } from '@/components/mdx-components'
import { ProjectHeader } from '@/components/project-header'
import { ProjectLinks } from '@/components/project-links'
import { ProjectImpact } from '@/components/project-impact'
import { ProjectStack } from '@/components/project-stack'
import { Section } from '@/components/section'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

async function getProjectFromParams(params: ProjectPageProps['params']) {
  const project = allProjects.find((project) => project.slug === params.slug)

  if (!project) {
    null
  }

  return project
}

export async function generateMetadata({
  params,
}: ProjectPageProps) {
  const project = await getProjectFromParams(params)

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
      url: `https://yourportfolio.com/projects/${project.slug}`,
      images: [
        {
          url: project.cover || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: [project.cover || '/og-image.jpg'],
    },
  }
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams(params)

  if (!project) {
    notFound()
  }

  return (
    <article className="container py-12">
      <ProjectHeader project={project} />
      
      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Section>
            <div className="prose prose-lg dark:prose-invert">
              <Mdx code={project.body.code} />
            </div>
          </Section>
        </div>
        
        <div className="space-y-8">
          <ProjectLinks links={project.links} />
          <ProjectStack stack={project.stack} />
          {project.impact && <ProjectImpact impact={project.impact} />}
        </div>
      </div>
    </article>
  )
}
