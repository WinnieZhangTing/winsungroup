import { defineField, defineType, defineArrayMember } from 'sanity'
import { VscPerson } from 'react-icons/vsc'
import imageBlock from '../fragments/image-block'

export default defineType({
  name: 'team-member',
  title: 'Team member',
  icon: VscPerson,
  type: 'document',
  groups: [
    { name: 'content', default: true },
    { name: 'options' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    }),
    defineField({
			name: 'shortCredentials', 
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'credentials', 
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'shortTitle',
			type: 'string',
			group: 'content',
		}),
    defineField({
      name: 'position',
      type: 'string',
      group: 'content',
    }),
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
      name: 'profileImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'content',
    }),
    // defineField({
    //   name: 'socialLinks',
    //   type: 'array',
    //   of: [{ type: 'link' }],
    //   group: 'content',
    // }),
    // defineField({
    //   name: 'featured',
    //   type: 'boolean',
    //   group: 'options',
    //   initialValue: false,
    // }),
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
		// defineField({
		// 	name: 'ctas',
		// 	title: 'Call-to-actions',
		// 	type: 'array',
		// 	of: [{ type: 'cta' }],
		// 	group: 'content',
		// }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'profileImage',
      // featured: 'featured',
    },
    prepare: ({ title, subtitle, media }) => ({
      title: title,
      subtitle: subtitle || 'Team member',
      media,
    }),
  },
  orderings: [
    {
      title: 'Name',
      name: 'name',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
})