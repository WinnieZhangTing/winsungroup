import moduleProps from '@/lib/moduleProps'

import TableOfContents from '@/ui/modules/RichtextModule/TableOfContents'
import Content from '@/ui/modules/RichtextModule/Content'
import { cn } from '@/lib/utils'
import css from './PostContent.module.css'
import RichtextModule from '@/ui/modules/RichtextModule'
import Img from '@/ui/Img'
import CTAList from '@/ui/CTAList'

export default function PostContent({
	post,
	...props
}: { post?: Sanity.TeamMember, ctas?: Sanity.CTA[] } & Sanity.Module) {
	if (!post) return null

	const showTOC = !post.hideTableOfContents && !!post.headings?.length

	return (
		<article {...moduleProps(props)}>
			<header className="relative overflow-hidden bg-accent">
				<div className="section py-12 space-y-4 text-center h-80">
					<h1 className="h1 text-balance text-4xl md:text-5xl lg:text-6xl font-bold text-canvas">{post.metadata.title || post.name}</h1>
					{/* <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">

				</div> */}
					{post.credentials && (
						<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
							<h2 className="text-lg md:text-xl font-medium text-canvas">{post.credentials}</h2>
						</div>
					)}
				</div>

			</header>

			<div className="relative section -mt-48 flex flex-col items-center">
				{post.profileImage && (
					<figure className="mb-1">
						<Img
							className="aspect-square h-96 w-96 rounded-2xl  bg-canvas object-cover"
							image={post.profileImage}
							imageWidth={500}
							alt={post.name}
						/>
					</figure>
				)}

				{post.position && (
					<h2 className="text-xl md:text-2xl font-bold text-primary font-serif">{post.position}</h2>
				)}
			</div>

			{/* <RichtextModule
				content={post.body}
				tableOfContents={showTOC}
				tocPosition="right"
				headings={post.headings}
				stretch={false}
				{...props}
			/> */}
			<div
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
					className={cn(css.body, 'grid max-w-screen-md text-center')}
				>
					<hr />
				</Content>
				{post.ctas && <CTAList ctas={post.ctas.map(cta => ({ ...cta, className: 'text-flame' }))} className="flex justify-center" />}
			</div>

		</article>
	)
}
