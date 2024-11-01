import { defineField, defineType } from 'sanity'
import { VscTag } from 'react-icons/vsc'

export default defineType({
  name: 'news.category',
  title: 'News category',
  type: 'document',
  icon: VscTag,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
})
