import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function nl2br(str?: string) {
	if (!str) return ''
	return str.split('\n').join('<br>')
}

export function slug(str: string) {
	return str
		.toLowerCase()
		.replace(/[\s\W]+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '')
}

export function getSegment(page: Sanity.PageBase) {
	return typeToSegment[page._type] || null
}

export const typeToSegment: Record<string, string> = {
	'blog.post': 'blog',
	'news.post': 'news',
	'case-study.post': 'case-study',
}
