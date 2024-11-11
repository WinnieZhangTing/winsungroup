import { defineField, defineType } from 'sanity'
import { VscEdit } from 'react-icons/vsc'

export default defineType({
	name: 'team-member-content',
	title: 'Team member content',
	icon: VscEdit,
	type: 'object',
	fields: [
		defineField({
			name: 'uid',
			title: 'Unique Identifier',
			type: 'uid',
		}),
		// defineField({
		// 	name: 'goBackButton',
		// 	title: 'Go Back Button',
		// 	type: 'object',
		// 	fields: [
		// 		{
		// 			name: 'label',
		// 			title: 'Label',
		// 			type: 'string',
		// 			validation: (Rule) => Rule.required(),
		// 		},
		// 		{
		// 			name: 'goBackUid',
		// 			title: 'Go Back Unique Identifier',
		// 			type: 'uid',
		// 			validation: (Rule) => Rule.required(),
		// 		}
		// 	],
		// 	validation: (Rule) => Rule.required(),
		// }),

		defineField({
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }]
		}),
	],
	preview: {
		prepare: () => ({
			title: 'Team member content',
		}),
	},
})
