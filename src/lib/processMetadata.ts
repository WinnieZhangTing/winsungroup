import { getSite } from '@/lib/sanity/queries'
import processUrl from './processUrl'
import type { Metadata } from 'next'
import { getSegment } from './utils'

export default async function processMetadata(
	page: Sanity.Page | Sanity.BasePost,
): Promise<Metadata> {
	const site = await getSite()

	const url = processUrl(page)
	const { title, description, ogimage, noIndex } = page.metadata

	return {
		metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
		title,
		description,
		openGraph: {
			type: 'website',
			url,
			title,
			description,
			images: ogimage || site.ogimage,
		},
		robots: {
			index: !noIndex,
		},
		alternates: {
			canonical: url,
			types: {
				'application/rss+xml': `/${getSegment(page) || 'blog'}/rss.xml`,
			},
		},
	}
}
