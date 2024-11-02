import { defineArrayMember, defineField, defineType } from 'sanity'
import { VscEdit } from 'react-icons/vsc'
import imageBlock from '../fragments/image-block'

export default defineType({
	name: 'case-study.post',
	title: 'Case study post',
	icon: VscEdit,
	type: 'document',
	groups: [
		{ name: 'content', default: true },
		{ name: 'options' },
		{ name: 'seo', title: 'SEO' },
	],
	fields: [
		defineField({
			name: 'body',
			type: 'array',
			of: [
				{ type: 'block' },
				imageBlock,
				defineArrayMember({
					type: 'code',
					options: {
						withFilename: true,
					},
				}),
				{ type: 'custom-html' },
			],
			group: 'content',
		}),
		defineField({
			name: 'hideTableOfContents',
			type: 'boolean',
			group: 'options',
			initialValue: false,
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
			group: 'seo',
		}),
	],
	preview: {
		select: {
			title: 'metadata.title',
		
			slug: 'metadata.slug.current',
			media: 'metadata.image',
		},
		prepare: ({ title, slug, media }) => ({
			title,
			subtitle: [slug && `/${slug}`]
				.filter(Boolean)
				.join(' — '),
			media,
		}),
	},
	orderings: [
		{
			title: 'Title',
			name: 'metadata.title',
			by: [{ field: 'title', direction: 'asc' }],
		},
	],
})
