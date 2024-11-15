import { group, singleton } from './utils'
import type { StructureResolver } from 'sanity/structure'

import { VscMultipleWindows, VscServerProcess } from 'react-icons/vsc'
import { BsDatabaseAdd } from 'react-icons/bs'

const structure: StructureResolver = (S, context) =>
	S.list()
		.title('Content')
		.items([
			singleton(S, 'site', 'Site settings').icon(VscServerProcess),
			S.divider(),

			S.documentTypeListItem('page').title('Pages').icon(VscMultipleWindows),
			S.documentTypeListItem('blog.post').title('Blog posts'),
			S.documentTypeListItem('blog.category').title('Blog categories'),
			S.documentTypeListItem('news.post').title('News posts'),
			S.documentTypeListItem('news.category').title('News categories'),
			S.documentTypeListItem('case-study.post').title('Case study posts'),
			S.documentTypeListItem('team-member').title('Team members'),
			S.divider(),

			S.documentTypeListItem('announcement').title('Announcements'),
			S.documentTypeListItem('navigation'),
			S.documentTypeListItem('redirect').title('Redirects'),
			S.divider(),

			group(S, 'Miscellaneous', [
				S.documentTypeListItem('logo').title('Logos'),
				S.documentTypeListItem('person').title('People'),
				S.documentTypeListItem('pricing').title('Pricing tiers'),
				S.documentTypeListItem('reputation'),
				S.documentTypeListItem('testimonial').title('Testimonials'),
			]).icon(BsDatabaseAdd),
		])

export default structure
