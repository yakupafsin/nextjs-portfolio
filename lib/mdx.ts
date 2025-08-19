// Re-export from the new content loaders for backward compatibility
export {
  loadProjects as getProjects,
  loadProject as getProject,
  loadPosts as getPosts,
  loadPost as getPost,
  type Project,
  type Post,
} from './content/loaders'

export function getAllProjectTags(): string[] {
  // This will be populated when projects are loaded
  return []
}

export function getAllProjectStack(): string[] {
  // This will be populated when projects are loaded
  return []
}
