import { defineField, defineType } from 'sanity'
import { TfiLayoutMediaLeft } from 'react-icons/tfi'

export default defineType({
	name: 'page-title',
	title: 'Page Title',
	icon: TfiLayoutMediaLeft,
	type: 'object',
	groups: [
    { name: 'content', default: true },
    { name: 'options' }
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'content'
    }),
    // defineField({
    //   name: 'breadcrumbs',
    //   type: 'breadcrumbs',
    //   group: 'options'
    // }),
    defineField({
      name: 'background',
      type: 'boolean',
      description: 'Add gradient background',
      initialValue: true,
      group: 'options'
    })
  ]
})