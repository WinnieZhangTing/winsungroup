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
			name: 'location',
			title: 'Location',
			type: 'geopoint',
			description: 'Select the location on the map',
		}),
		defineField({
			name: 'zoomLevel',
			title: 'Zoom Level',
			type: 'number',
			initialValue: 12,
			description: 'Set the initial zoom level of the map',
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
