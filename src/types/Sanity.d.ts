import type { SanityImageObject } from '@sanity/image-url/lib/types/types'
import type { SanityDocument } from 'next-sanity'

declare global {
	namespace Sanity {
		// documents

		type Site = SanityDocument<{
			title: string
			logo?: Logo
			announcements?: Announcement[]
			ctas?: CTA[]
			headerMenu?: Navigation
			footerMenu?: Navigation
			social?: Navigation
			qrCodes?: Image[]
			footerDescription?: string
			copyright?: any
			ogimage?: string
		}>

		type Navigation = SanityDocument<{
			title: string
			items?: (Link | LinkList)[]
		}>

		type Announcement = SanityDocument<{
			content: any
			cta?: Link
			start?: string
			end?: string
		}>

		// pages

		type PageBase = SanityDocument<{
			title?: string
			metadata: Metadata
		}>

		type Page = PageBase & {
			readonly _type: 'page'
			modules?: Module[]
		}


		type PostCategory = SanityDocument<{
			title: string
		}>

		interface BasePost extends PageBase {
			body: any
			readTime: number
			headings?: { style: string; text: string }[]
			categories: PostCategory[]
			authors: Person[]
			featured: boolean
			hideTableOfContents: boolean
			publishDate: string
		}

		interface BlogPost extends BasePost {
			readonly _type: 'blog.post'
			categories: BlogCategory[]
		}

		type BlogCategory = PostCategory

		// type BlogPost = PageBase & {
		// 	readonly _type: 'blog.post'
		// 	body: any
		// 	readTime: number
		// 	headings?: { style: string; text: string }[]
		// 	categories: BlogCategory[]
		// 	authors: Person[]
		// 	featured: boolean
		// 	hideTableOfContents: boolean
		// 	publishDate: string
		// }

		// type BlogCategory = SanityDocument<{
		// 	title: string
		// }>

		interface NewsPost extends BasePost {
			readonly _type: 'news.post'
			categories: NewsCategory[]
		}

		type NewsCategory = PostCategory

		type CaseStudyPost = BasePost & {
			readonly _type: 'case-study.post'
		}

		type TeamMember = BasePost & {
			readonly _type: 'team-member'
			name: string
			shortTitle: string
			credentials: string
			position: string
			profileImage?: Image
			ctas?: CTA[]
		}

		// miscellaneous

		type Logo = SanityDocument<{
			name: string
			image?: Partial<{
				default: Image
				light: Image
				dark: Image
			}>
		}>

		type Person = SanityDocument<{
			name: string
			image?: Image
		}>

		type Pricing = SanityDocument<{
			title: string
			highlight?: string
			price: {
				base?: number
				strikethrough?: number
				suffix?: string
			}
			ctas?: CTA[]
			content?: any
		}>

		type Reputation = SanityDocument<{
			title?: string
			subtitle?: string
			repo?: string
			limit?: number
			avatars?: Image[]
		}>

		type Testimonial = SanityDocument<{
			content: any
			author?: {
				name: string
				title?: string
				image?: Image
			}
		}>

		// objects

		type CTA = {
			readonly _type?: 'cta'
			_key?: string
			link?: Link
			style?: string
		}

		type Image = SanityImageObject &
			Partial<{
				alt: string
				loading: 'lazy' | 'eager'
			}>

		type Link = {
			readonly _type: 'link'
			label: string
			type: 'internal' | 'external'
			internal?: Page | BlogPost | NewsPost | BasePost
			external?: string
			params?: string
		}

		type LinkList = {
			readonly _type: 'link.list'
			link: Link
			links?: Link[]
		}

		type Metadata = {
			slug: { current: string }
			title: string
			description: string
			image?: Image
			ogimage?: string
			noIndex: boolean
		}

		type Module<T = string> = {
			_type: T
			_key: string
			uid?: string
		}
	}
}

export {}
