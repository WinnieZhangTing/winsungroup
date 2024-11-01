import { fetchSanity, groq } from '@/lib/sanity/fetch'
import processUrl from '@/lib/processUrl'
import { Feed } from 'feed'
import { escapeHTML, toHTML } from '@portabletext/to-html'
import { urlFor } from '@/lib/sanity/urlFor'

export async function GET() {
  const { news, posts, copyright } = await fetchSanity<{
    news: Sanity.Page
    posts: Array<Sanity.NewsPost & { image?: string }>
    copyright: string
  }>(
    groq`{
      'news': *[_type == 'page' && metadata.slug.current == 'news'][0]{
        _type,
        title,
        metadata,
        'image': metadata.image.asset->url
      },
      'posts': *[_type == 'news.post']{
        _type,
        body,
        publishDate,
        authors[]->,
        metadata
      },
      'copyright': pt::text(*[_type == 'site'][0].copyright)
    }`,
    { tags: ['news-rss'] },
  )

  if (!news || !posts) {
    return new Response(
      'Missing either a news page or news posts in Sanity Studio',
      { status: 500 },
    )
  }

  const url = processUrl(news)

  const feed = new Feed({
    title: news?.title || news.metadata.title,
    description: news.metadata.description,
    link: url,
    id: url,
    copyright,
    favicon: process.env.NEXT_PUBLIC_BASE_URL + 'favicon.ico',
    language: 'en',
    generator: 'https://sanitypress.dev',
  })

  posts.map((post) =>
    feed.addItem({
      title: escapeHTML(post.metadata.title),
      description: post.metadata.description,
      id: processUrl(post),
      link: processUrl(post),
      date: new Date(post.publishDate),
      author: post.authors?.map((author) => ({
        name: author.name,
      })),
      content: toHTML(post.body, {
				components: {
					types: {
						image: ({ value }) => {
							const img = `<img src="${urlFor(value).url()}" alt="${value.alt}" />`
							const figcaption =
								value.caption && `<figcaption>${value.caption}</figcaption>`
							const source =
								value.source && `<a href="${value.source}">(Source)</a>`

							return `<figure>${[img, figcaption, source].filter(Boolean).join(' ')}</figure>`
						},
						code: ({ value }) =>
							`<pre><code>${escapeHTML(value.code)}</code></pre>`,
					},
				},
			}),
			image: post.image,
    }),
  )

  return new Response(feed.atom1(), {
    headers: {
      'Content-Type': 'application/atom+xml',
    },
  })
}