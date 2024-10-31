import { defineArrayMember, defineField, defineType } from 'sanity'
import { VscProject } from 'react-icons/vsc'

export default defineType({
  name: 'current-project-slider',
  title: 'Current Project Slider',
  type: 'object',
  icon: VscProject,
  fields: [
    defineField({
      name: 'projects',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'description',
              type: 'text',
              validation: Rule => Rule.required()
            }),
            
            defineField({
              name: 'image',
              type: 'image',
              options: {
                hotspot: true
              },
              validation: Rule => Rule.required()
            }),
						
          ]
        })
      ]
    }),

		defineField({
			name: 'imageOnLeft',
			title: 'Image position',
			type: 'boolean',
			description: 'Display image on the left side',
			initialValue: false,
		})
  ],
  preview: {
    select: {
      projects: 'projects'
    },
    prepare: ({ projects }) => ({
      title: `Current Projects (${projects?.length || 0})`,
      subtitle: 'Project Slider'
    })
  }
})
