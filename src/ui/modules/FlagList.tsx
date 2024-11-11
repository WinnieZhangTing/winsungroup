import { PortableText, stegaClean } from 'next-sanity'
import Img from '@/ui/Img'
import { cn } from '@/lib/utils'
import Pretitle from '../Pretitle'

export default function FlagList({
	pretitle,
	intro,
	items,
	iconSize = 40,
	iconPosition,
	columns,
	bordered,
	hoverEffect,
}: Partial<{
	pretitle: string
	intro: any
	items: {
		icon: Sanity.Image
		content: any
	}[]
	iconSize: number
	iconPosition: 'top' | 'left'
	columns: number
	bordered: boolean
	hoverEffect: boolean
}>) {
	return (
		<section
			className="section space-y-8"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-easing="ease-in-out"
		>
			{pretitle && (
				<Pretitle
					className="text-primary text-center text-lg"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="200"
				>
					{pretitle}
				</Pretitle>
			)}

			{intro && (
				<header
					className="richtext text-center"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-delay="400"
				>
					<PortableText value={intro} />
				</header>
			)}

			<div
				className={cn(
					'mt-12 grid items-center md:grid-cols-[repeat(var(--col,1),minmax(0px,1fr))]',
					bordered ? 'gap-8' : 'gap-x-12 gap-y-8',
				)}
				style={
					{
						'--col': columns || items?.length,
					} as React.CSSProperties
				}
				data-aos="fade-up"
				data-aos-duration="800"
				data-aos-delay="600"
			>
				{items?.map((item, key) => (
					<article
						className={cn(
							'grid gap-4',
							stegaClean(iconPosition) === 'left' && 'grid-cols-[auto,1fr]',
							hoverEffect && 'hover:bg-primary',
							bordered && 'border p-8',
						)}
						key={key}
					>
						<figure>
							<Img
								image={item.icon}
								imageWidth={iconSize}
								style={{ maxHeight: iconSize }}
							/>
						</figure>

						<div className="richtext">
							<PortableText value={item.content} />
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
