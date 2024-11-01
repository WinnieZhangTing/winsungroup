import moduleProps from '@/lib/moduleProps'

import TableOfContents from '@/ui/modules/RichtextModule/TableOfContents'
import Content from '@/ui/modules/RichtextModule/Content'
import { cn } from '@/lib/utils'
import css from './PostContent.module.css'
import RichtextModule from '@/ui/modules/RichtextModule'

export default function PostContent({
	post,
	...props
}: { post?: Sanity.BasePost } & Sanity.Module) {
	if (!post) return null

	const showTOC = !post.hideTableOfContents && !!post.headings?.length

	return (
		<article {...moduleProps(props)}>
			<header className="section space-y-6 text-center">
				<h1 className="h1 text-balance">{post.metadata.title}</h1>
				<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">

				</div>
			</header>

			<RichtextModule
				content={post.body}
				tableOfContents={showTOC}
				tocPosition="right"
				headings={post.headings}
				stretch={true}
				{...props}
			/>
			{/* <div
				className={cn(
					'section grid gap-8',
					showTOC && 'lg:grid-cols-[1fr,auto]',
				)}
			>
				{showTOC && (
					<aside className="lg:sticky-below-header mx-auto w-full max-w-lg self-start [--offset:1rem] lg:order-1 lg:w-[250px]">
						<TableOfContents headings={post.headings} />
					</aside>
				)}

				<Content
					value={post.body}
					className={cn(css.body, 'grid max-w-screen-md')}
				>
					<hr />
				</Content>
			</div> */}
		</article>
	)
}
