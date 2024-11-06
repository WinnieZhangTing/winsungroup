import { defineField, defineType } from 'sanity'
import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { reputationBlock } from '../documents/reputation'
import { getBlockText } from '@sanity/src/utils'

export default defineType({
	name: 'hero.slider',
	title: 'Hero (Slider)',
	icon: TfiLayoutCtaCenter,
	type: 'object',
	groups: [
		{ name: 'content', default: true },
		{ name: 'image' },
		{ name: 'options' },
	],
	fields: [
		defineField({
			name: 'pretitle',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }, reputationBlock],
			group: 'content',
		}),
		defineField({
			name: 'slides',
			title: 'Slides',
			type: 'array',
			of: [{ type: 'image' }],
			group: 'image',
		}),
	],
	preview: {
		select: {
			content: 'content',
			media: 'bgImage',
		},
		prepare: ({ content, media }) => ({
			title: getBlockText(content),
			subtitle: 'Hero (slider)',
			media,
		}),
	},
})
