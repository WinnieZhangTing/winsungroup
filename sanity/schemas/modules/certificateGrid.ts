import { defineType, defineField } from 'sanity'
import { VscVerified } from 'react-icons/vsc'

export default defineType({
  name: 'certificate-grid',
  title: 'Certificate Grid',
  type: 'object',
  icon: VscVerified,
  fields: [
    defineField({
      name: 'certificates',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
							options: {
								hotspot: true,
							},
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    })
  ],
  preview: {
    select: {
      certificates: 'certificates'
    },
    prepare({ certificates }) {
      return {
        title: 'Certificate Grid',
        subtitle: `${certificates?.length || 0} certificates`
      }
    }
  }
})
