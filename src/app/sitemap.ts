import { fetchSanity, groq } from '@/lib/sanity/fetch'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const allPages = await fetchSanity<Record<string, MetadataRoute.Sitemap>>(
		groq`{
			'pages': *[
				_type == 'page' &&
				!(metadata.slug.current in ['404', 'blog/*', 'news/*', 'case-study/*', 'team-member/*']) &&
				metadata.noIndex != true
			]|order(metadata.slug.current){
				'url': $baseUrl + select(metadata.slug.current == 'index' => '', metadata.slug.current),
				'lastModified': _updatedAt,
				'priority': select(
					metadata.slug.current == 'index' => 1,
					0.5
				),
			},
			'posts': *[_type == 'blog.post' && metadata.noIndex != true]|order(name){
				'url': $baseUrl + 'blog/' + metadata.slug.current,
				'lastModified': _updatedAt,
				'priority': 0.4
			},
			'newsPosts': *[_type == 'news.post' && metadata.noIndex != true]|order(name){
				'url': $baseUrl + 'news/' + metadata.slug.current,
				'lastModified': _updatedAt,
				'priority': 0.4
			},
			'caseStudies': *[_type == 'case-study.post' && metadata.noIndex != true]|order(name){
				'url': $baseUrl + 'case-study/' + metadata.slug.current,
				'lastModified': _updatedAt,
				'priority': 0.4
			},
			'teamMembers': *[_type == 'team-member' && metadata.noIndex != true]|order(name){
				'url': $baseUrl + 'team-member/' + metadata.slug.current,
				'lastModified': _updatedAt,
				'priority': 0.4
			}
		}`,
		{
			params: {
				baseUrl: process.env.NEXT_PUBLIC_BASE_URL + '/',
			},
		},
	)

	return Object.values(allPages).flat()
}
