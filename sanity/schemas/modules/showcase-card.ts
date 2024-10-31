import { defineField, defineType } from 'sanity'
import { VscMilestone } from 'react-icons/vsc'
import { TfiLayoutMediaLeft } from 'react-icons/tfi'


export default defineType({
  name: 'showcase-card',
  title: 'Showcase Card',
  icon: TfiLayoutMediaLeft,
  type: 'object',
  groups: [
    { name: 'content', default: true },
    { name: 'image', title: 'Image' },
    { name: 'options', title: 'Options' }
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'content'
    }),
    defineField({
      name: 'description',
      type: 'text',
      group: 'content'
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'content'
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string'
        })
      ],
      group: 'image'
    }),
    defineField({
      name: 'ctas',
      title: 'Call-to-actions',
      type: 'array',
      of: [{ type: 'cta' }],
      group: 'content'
    }),
    defineField({
      name: 'imageOnLeft',
      title: 'Image position',
      type: 'boolean',
      description: 'Display image on the left side',
      initialValue: false,
      group: 'options'
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare: ({ title, media }) => ({
      title: title || 'Showcase Card',
      media
    })
  }
})