import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

export function formatDateRange(start: string, end?: string) {
  // Handle YYYY-MM format by adding day
  const parseDate = (dateStr: string) => {
    if (dateStr === 'Present') return null
    if (dateStr.match(/^\d{4}-\d{2}$/)) {
      return new Date(dateStr + '-01')
    }
    return new Date(dateStr)
  }

  const startDate = parseDate(start)
  const endDate = end && end !== 'Present' ? parseDate(end) : null

  const formatOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    year: 'numeric',
  }

  const startFormatted = startDate ? new Intl.DateTimeFormat('en-US', formatOptions).format(startDate) : start
  const endFormatted = endDate
    ? new Intl.DateTimeFormat('en-US', formatOptions).format(endDate)
    : (end || 'Present')

  return `${startFormatted} - ${endFormatted}`
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncate(str: string, length: number) {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}

export function getReadingTime(content: string) {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
