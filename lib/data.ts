// Re-export from the new content loaders for backward compatibility
export {
  loadSiteConfig as getSiteConfig,
  loadSkills as getSkills,
  loadExperience as getExperience,
  loadEducation as getEducation,
  type SiteConfig,
  type Skill,
  type Experience,
  type Education,
} from './content/loaders'
