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
	],
	preview: {
		prepare: () => ({
			title: 'Team member content',
		}),
	},
})
