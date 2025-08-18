import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { glob } from 'glob'
import readingTime from 'reading-time'
import {
  SiteConfigSchema,
  SkillsSchema,
  ExperiencesSchema,
  EducationsSchema,
  ProjectFrontmatterSchema,
  PostFrontmatterSchema,
  type SiteConfig,
  type Skill,
  type Experience,
  type Education,
  type ProjectFrontmatter,
  type PostFrontmatter,
} from './schemas'

// Re-export types for external use
export type {
  SiteConfig,
  Skill,
  Experience,
  Education,
  ProjectFrontmatter,
  PostFrontmatter,
}

const contentDirectory = path.join(process.cwd(), 'content')

// Helper function to read and validate JSON files
function readAndValidateJson<T>(filePath: string, schema: any, fileName: string): T {
  try {
    const fullPath = path.join(contentDirectory, filePath)
    
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Content file not found: ${fileName}`)
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const data = JSON.parse(fileContents)
    
    const result = schema.safeParse(data)
    if (!result.success) {
      const errors = result.error.errors.map((err: any) => `${err.path.join('.')}: ${err.message}`).join('\n')
      throw new Error(`Validation failed for ${fileName}:\n${errors}`)
    }
    
    return result.data
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`Invalid JSON in ${fileName}: ${error.message}`)
    }
    throw error
  }
}

// Site configuration loader
export function loadSiteConfig(): SiteConfig {
  return readAndValidateJson<SiteConfig>('site.json', SiteConfigSchema, 'site.json')
}

// Skills loader
export function loadSkills(): Skill[] {
  return readAndValidateJson<Skill[]>('skills.json', SkillsSchema, 'skills.json')
}

// Experience loader
export function loadExperience(): Experience[] {
  return readAndValidateJson<Experience[]>('experience.json', ExperiencesSchema, 'experience.json')
}

// Education loader
export function loadEducation(): Education[] {
  return readAndValidateJson<Education[]>('education.json', EducationsSchema, 'education.json')
}

// Project interfaces with computed fields
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

// Projects loader
export async function loadProjects(): Promise<Project[]> {
  const projectsDirectory = path.join(contentDirectory, 'projects')
  
  if (!fs.existsSync(projectsDirectory)) {
    console.warn('Projects directory not found, returning empty array')
    return []
  }

  try {
    const files = await glob('**/*.mdx', { cwd: projectsDirectory })
    
    const projects = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(projectsDirectory, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)
        
        // Validate frontmatter
        const result = ProjectFrontmatterSchema.safeParse(data)
        if (!result.success) {
          const errors = result.error.errors.map((err: any) => `${err.path.join('.')}: ${err.message}`).join('\n')
          throw new Error(`Validation failed for project ${file}:\n${errors}`)
        }
        
        const frontmatter = result.data
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
  } catch (error) {
    throw new Error(`Failed to load projects: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

// Single project loader
export async function loadProject(slug: string): Promise<Project | null> {
  try {
    const projects = await loadProjects()
    return projects.find((project) => project.slug === slug) || null
  } catch (error) {
    throw new Error(`Failed to load project "${slug}": ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

// Posts loader
export async function loadPosts(): Promise<Post[]> {
  const postsDirectory = path.join(contentDirectory, 'blog')
  
  if (!fs.existsSync(postsDirectory)) {
    console.warn('Blog directory not found, returning empty array')
    return []
  }

  try {
    const files = await glob('**/*.mdx', { cwd: postsDirectory })
    
    const posts = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(postsDirectory, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)
        
        // Validate frontmatter
        const result = PostFrontmatterSchema.safeParse(data)
        if (!result.success) {
          const errors = result.error.errors.map((err: any) => `${err.path.join('.')}: ${err.message}`).join('\n')
          throw new Error(`Validation failed for post ${file}:\n${errors}`)
        }
        
        const frontmatter = result.data
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
  } catch (error) {
    throw new Error(`Failed to load posts: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

// Single post loader
export async function loadPost(slug: string): Promise<Post | null> {
  try {
    const posts = await loadPosts()
    return posts.find((post) => post.slug === slug) || null
  } catch (error) {
    throw new Error(`Failed to load post "${slug}": ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
