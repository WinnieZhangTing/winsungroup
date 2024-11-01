import { fetchSanity, groq } from '@/lib/sanity/fetch'
import FilterList from '../NewsList/FilterList'
import PostPreviewLarge from '../PostPreviewLarge'
import Paginated from './Paginated'
import sortFeaturedPosts from './sortFeaturedPosts'
import { stegaClean } from 'next-sanity'

export default async function NewsFrontpage({
	mainPost,
	showFeaturedPostsFirst,
	itemsPerPage,
}: Partial<{
	mainPost: 'recent' | 'featured'
	showFeaturedPostsFirst: boolean
	itemsPerPage: number
}>) {
	const posts = await fetchSanity<Sanity.NewsPost[]>(
		groq`*[_type == 'news.post']|order(publishDate desc){
				_type,
				_id,
				featured,
				metadata,
				categories[]->,
				authors[]->,
				publishDate,
			}
		`,
	)

	const [firstPost, ...otherPosts] =
		stegaClean(mainPost) === 'featured' ? sortFeaturedPosts(posts) : posts

	return (
		<section className="section space-y-12">
			<PostPreviewLarge post={firstPost} />
			<hr />
			<FilterList />
			<Paginated
				posts={sortFeaturedPosts(otherPosts, showFeaturedPostsFirst)}
				itemsPerPage={itemsPerPage}
			/>
		</section>
	)
}
