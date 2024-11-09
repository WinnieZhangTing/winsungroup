import { defineField, defineType } from 'sanity'
import { MdMap } from 'react-icons/md'

export default defineType({
	name: 'map',
	title: 'Map',
	icon: MdMap,
	type: 'object',
	fields: [
		defineField({
			name: 'pretitle',
			title: 'Pre Title',
			type: 'string',
			description: 'Add a title above the map',
		}),
		defineField({
			name: 'locations',
			title: 'Locations',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{ name: 'lat', title: 'Latitude', type: 'number' },
						{ name: 'lng', title: 'Longitude', type: 'number' },
						{ name: 'title', title: 'Title', type: 'string' },
						{ name: 'address', title: 'Address', type: 'string' },
					],
				},
			],
			description: 'Select up to 3 locations on the map',
			options: {
				layout: 'tags',
			},
			validation: (Rule) =>
				Rule.max(3).error('You can only add up to 3 locations'),
		}),
		defineField({
			name: 'zoomLevel',
			title: 'Zoom Level',
			type: 'number',
		}),
	],
	preview: {
		select: {
			location: 'location',
			pretitle: 'pretitle',
		},
		prepare: ({ location, pretitle }) => ({
			title: pretitle || `Map at ${location?.lat}, ${location?.lng}`,
		}),
	},
})
