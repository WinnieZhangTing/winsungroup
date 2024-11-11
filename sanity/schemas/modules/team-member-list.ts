import { defineField, defineType } from 'sanity'
import { VscOrganization } from 'react-icons/vsc'
import { getBlockText } from '@sanity/src/utils'

export default defineType({
  name: 'team-member-list',
  title: 'Team Member List',
  type: 'object',
  icon: VscOrganization,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'options', title: 'Options' }
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'content'
    }),
    defineField({
      name: 'intro',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content'
    }),
    defineField({
      name: 'members',
      title: 'Team Members',
      type: 'array',
      of: [{ 
        type: 'reference',
        to: [{ type: 'team-member' }]
      }],
      group: 'content'
    }),
    defineField({
			name: 'uid',
			title: 'Unique Identifier',
			type: 'uid',
			group: 'options',
		}),
  ],
  preview: {
    select: {
      title: 'title',
      intro: 'intro'
    },
    prepare: ({ title, intro }) => ({
      title: title || getBlockText(intro),
      subtitle: 'Team Member List'
    })
  }
})