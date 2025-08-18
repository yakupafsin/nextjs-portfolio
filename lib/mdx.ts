import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { glob } from 'glob'
import readingTime from 'reading-time'

export interface ProjectFrontmatter {
  title: string
  slug: string
  period: string
  summary: string
  tags: string[]
  stack: string[]
  links?: {
    repo?: string
    demo?: string
    case_study?: string
  }
  cover?: string
  featured?: boolean
  impact?: Array<{
    metric: string
    value: string
    context?: string
  }>
}

export interface Project extends ProjectFrontmatter {
  content: string
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
  url: string
}

export interface PostFrontmatter {
  title: string
  slug: string
  date: string
  summary: string
  tags?: string[]
  published?: boolean
}

export interface Post extends PostFrontmatter {
  content: string
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
  url: string
}

const contentDirectory = path.join(process.cwd(), 'content')

export async function getProjects(): Promise<Project[]> {
  const projectsDirectory = path.join(contentDirectory, 'projects')
  
  if (!fs.existsSync(projectsDirectory)) {
    return []
  }

  const files = await glob('**/*.mdx', { cwd: projectsDirectory })
  
  const projects = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(projectsDirectory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      const frontmatter = data as ProjectFrontmatter
      const readingTimeResult = readingTime(content)
      
      return {
        ...frontmatter,
        content,
        readingTime: readingTimeResult,
        url: `/projects/${frontmatter.slug}`,
      } as Project
    })
  )

  // Sort by featured first, then by period (newest first)
  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return b.period.localeCompare(a.period)
  })
}

export async function getProject(slug: string): Promise<Project | null> {
  const projects = await getProjects()
  return projects.find((project) => project.slug === slug) || null
}

export async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(contentDirectory, 'blog')
  
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const files = await glob('**/*.mdx', { cwd: postsDirectory })
  
  const posts = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(postsDirectory, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      const frontmatter = data as PostFrontmatter
      const readingTimeResult = readingTime(content)
      
      return {
        ...frontmatter,
        content,
        readingTime: readingTimeResult,
        url: `/blog/${frontmatter.slug}`,
      } as Post
    })
  )

  // Filter published posts and sort by date (newest first)
  return posts
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await getPosts()
  return posts.find((post) => post.slug === slug) || null
}

export function getAllProjectTags(): string[] {
  // This will be populated when projects are loaded
  return []
}

export function getAllProjectStack(): string[] {
  // This will be populated when projects are loaded
  return []
}
