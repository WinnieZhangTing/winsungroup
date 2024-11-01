import { defineField, defineType } from 'sanity'
import { VscEdit } from 'react-icons/vsc'

export default defineType({
	name: 'case-study-post-content',
	title: 'Case study post content',
	icon: VscEdit,
	type: 'object',
	fields: [
		defineField({
			name: 'uid',
			title: 'Unique Identifier',
			type: 'uid',
		}),
	],
	preview: {
		prepare: () => ({
			title: 'Case study post content',
		}),
	},
})
