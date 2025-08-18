import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'The slug of the project',
      required: true,
    },
    period: {
      type: 'string',
      description: 'The time period when the project was worked on',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'A brief summary of the project',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Tags for categorizing the project',
      required: true,
    },
    stack: {
      type: 'list',
      of: { type: 'string' },
      description: 'Technologies used in the project',
      required: true,
    },
    links: {
      type: 'nested',
      of: {
        repo: { type: 'string' },
        demo: { type: 'string' },
        case_study: { type: 'string' },
      },
      description: 'Links related to the project',
    },
    cover: {
      type: 'string',
      description: 'Cover image for the project',
    },
    featured: {
      type: 'boolean',
      description: 'Whether the project is featured',
      default: false,
    },
    impact: {
      type: 'list',
      of: {
        type: 'nested',
        of: {
          metric: { type: 'string', required: true },
          value: { type: 'string', required: true },
          context: { type: 'string' },
        },
      },
      description: 'Impact metrics for the project',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (project) => `/projects/${project.slug}`,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    slug: {
      type: 'string',
      description: 'The slug of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'A brief summary of the post',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Tags for categorizing the post',
    },
    published: {
      type: 'boolean',
      description: 'Whether the post is published',
      default: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post.slug}`,
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Project, Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeHighlight,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
})
