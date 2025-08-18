import fs from 'fs'
import path from 'path'
import { z } from 'zod'

// Schema definitions for type safety
export const SiteConfigSchema = z.object({
  name: z.string(),
  role: z.string(),
  location: z.string(),
  headline: z.string(),
  summary: z.string(),
  email: z.string().email(),
  website: z.string().url().optional(),
  cvUrl: z.string().url().optional(),
  social: z.object({
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    twitter: z.string().url().optional(),
  }),
  avatar: z.string(),
  seo: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
  }).optional(),
})

export const SkillSchema = z.object({
  category: z.string(),
  items: z.array(z.string()),
})

export const ExperienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  location: z.string(),
  type: z.string(),
  start: z.string(),
  end: z.string(),
  summary: z.string(),
  achievements: z.array(z.string()),
  stack: z.array(z.string()),
})

export const EducationSchema = z.object({
  school: z.string(),
  degree: z.string(),
  location: z.string(),
  start: z.string(),
  end: z.string(),
  gpa: z.string().optional(),
  honors: z.array(z.string()).optional(),
  relevant_courses: z.array(z.string()).optional(),
  credential_id: z.string().optional(),
  skills: z.array(z.string()).optional(),
})

export type SiteConfig = z.infer<typeof SiteConfigSchema>
export type Skill = z.infer<typeof SkillSchema>
export type Experience = z.infer<typeof ExperienceSchema>
export type Education = z.infer<typeof EducationSchema>

// Helper function to read and parse JSON files
function readJsonFile<T>(filePath: string, schema: z.ZodSchema<T>): T {
  try {
    const fullPath = path.join(process.cwd(), 'content', filePath)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const data = JSON.parse(fileContents)
    return schema.parse(data)
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error)
    throw new Error(`Failed to load ${filePath}`)
  }
}

// Data fetching functions
export function getSiteConfig(): SiteConfig {
  return readJsonFile('site.json', SiteConfigSchema)
}

export function getSkills(): Skill[] {
  return readJsonFile('skills.json', z.array(SkillSchema))
}

export function getExperience(): Experience[] {
  return readJsonFile('experience.json', z.array(ExperienceSchema))
}

export function getEducation(): Education[] {
  return readJsonFile('education.json', z.array(EducationSchema))
}

// Utility functions
export function getUniqueProjectTags() {
  // This would be implemented with contentlayer data
  // For now, return empty array as placeholder
  return []
}

export function getUniqueProjectStack() {
  // This would be implemented with contentlayer data
  // For now, return empty array as placeholder
  return []
}
