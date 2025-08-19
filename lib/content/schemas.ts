import { z } from 'zod'

// Site configuration schema
export const SiteConfigSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  role: z.string().min(1, 'Role is required'),
  location: z.string().min(1, 'Location is required'),
  headline: z.string().min(1, 'Headline is required'),
  summary: z.string().min(10, 'Summary must be at least 10 characters'),
  email: z.string().email('Valid email is required'),
  website: z.string().url('Valid website URL is required').optional(),
  cvUrl: z.string().url('Valid CV URL is required').optional(),
  social: z.object({
    github: z.string().url('Valid GitHub URL is required').optional(),
    linkedin: z.string().url('Valid LinkedIn URL is required').optional(),
    twitter: z.string().url('Valid Twitter URL is required').optional(),
  }),
  avatar: z.string().min(1, 'Avatar path is required'),
  seo: z.object({
    title: z.string().min(1, 'SEO title is required'),
    description: z.string().min(10, 'SEO description must be at least 10 characters'),
    keywords: z.array(z.string()).min(1, 'At least one keyword is required'),
  }).optional(),
})

// Skills schema
export const SkillSchema = z.object({
  category: z.string().min(1, 'Category is required'),
  items: z.array(z.string().min(1, 'Skill item cannot be empty')).min(1, 'At least one skill item is required'),
})

export const SkillsSchema = z.array(SkillSchema).min(1, 'At least one skill category is required')

// Experience schema
export const ExperienceSchema = z.object({
  title: z.string().min(1, 'Job title is required'),
  company: z.string().min(1, 'Company name is required'),
  location: z.string().min(1, 'Location is required'),
  type: z.string().min(1, 'Job type is required'),
  start: z.string().min(1, 'Start date is required'),
  end: z.string().min(1, 'End date is required'),
  summary: z.string().min(10, 'Summary must be at least 10 characters'),
  achievements: z.array(z.string().min(1, 'Achievement cannot be empty')).min(1, 'At least one achievement is required'),
  stack: z.array(z.string().min(1, 'Stack item cannot be empty')).min(1, 'At least one stack item is required'),
})

export const ExperiencesSchema = z.array(ExperienceSchema).min(1, 'At least one experience is required')

// Education schema
export const EducationSchema = z.object({
  school: z.string().min(1, 'School name is required'),
  degree: z.string().min(1, 'Degree is required'),
  location: z.string().min(1, 'Location is required'),
  start: z.string().min(1, 'Start date is required'),
  end: z.string().min(1, 'End date is required'),
  gpa: z.string().optional(),
  honors: z.array(z.string()).optional(),
  relevant_courses: z.array(z.string()).optional(),
  credential_id: z.string().optional(),
  skills: z.array(z.string()).optional(),
})

export const EducationsSchema = z.array(EducationSchema)

// Project frontmatter schema
export const ProjectFrontmatterSchema = z.object({
  title: z.string().min(1, 'Project title is required'),
  slug: z.string().min(1, 'Project slug is required').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  period: z.string().min(1, 'Period is required'),
  summary: z.string().min(10, 'Summary must be at least 10 characters'),
  tags: z.array(z.string().min(1, 'Tag cannot be empty')).min(1, 'At least one tag is required'),
  stack: z.array(z.string().min(1, 'Stack item cannot be empty')).min(1, 'At least one stack item is required'),
  links: z.object({
    repo: z.string().url('Valid repository URL is required').optional(),
    demo: z.string().url('Valid demo URL is required').optional(),
    case_study: z.string().url('Valid case study URL is required').optional(),
  }).optional(),
  cover: z.string().optional(),
  featured: z.boolean().optional().default(false),
  impact: z.array(z.object({
    metric: z.string().min(1, 'Metric name is required'),
    value: z.string().min(1, 'Metric value is required'),
    context: z.string().optional(),
  })).optional(),
})

// Post frontmatter schema
export const PostFrontmatterSchema = z.object({
  title: z.string().min(1, 'Post title is required'),
  slug: z.string().min(1, 'Post slug is required').regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  date: z.string().min(1, 'Date is required'),
  summary: z.string().min(10, 'Summary must be at least 10 characters'),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional().default(true),
})

// Export types
export type SiteConfig = z.infer<typeof SiteConfigSchema>
export type Skill = z.infer<typeof SkillSchema>
export type Experience = z.infer<typeof ExperienceSchema>
export type Education = z.infer<typeof EducationSchema>
export type ProjectFrontmatter = z.infer<typeof ProjectFrontmatterSchema>
export type PostFrontmatter = z.infer<typeof PostFrontmatterSchema>
