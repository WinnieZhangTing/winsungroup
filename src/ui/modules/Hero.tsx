import Img, { Source } from '@/ui/Img'
import { PortableText, stegaClean } from 'next-sanity'
import CTAList from '@/ui/CTAList'
import Pretitle from '@/ui/Pretitle'
import Reputation from '@/ui/Reputation'
import { cn } from '@/lib/utils'

export default function Hero({
	pretitle,
	content,
	ctas,
	bgImage,
	bgImageMobile,
	textAlign = 'center',
	alignItems,
}: Partial<{
	pretitle: string
	content: any
	ctas: Sanity.CTA[]
	bgImage: Sanity.Image
	bgImageMobile: Sanity.Image
	textAlign: React.CSSProperties['textAlign']
	alignItems: React.CSSProperties['alignItems']
}>) {
	const hasImage = !!bgImage?.asset

	return (
		<section
			className={cn(
				hasImage &&
					'grid overflow-hidden bg-ink text-canvas *:col-span-full *:row-span-full',
			)}
		>
			<div className="bg-secondary inset-0 opacity-60" />
			{hasImage && (
				<picture>
					<Source image={bgImageMobile} imageWidth={1200} />
					<Img
						className="size-full max-h-fold object-cover"
						image={bgImage}
						imageWidth={1800}
						draggable={false}
					/>
				</picture>
			)}

			{content && (
				<div
					className="section flex w-full flex-col"
					data-aos="fade-up"
					data-aos-duration="800"
					data-aos-easing="ease-in-out"
				>
					<div
						className={cn(
							'richtext relative isolate max-w-xl [&_:is(h1,h2)]:text-balance',
							hasImage && 'text-shadow',
							{
								'mb-8': stegaClean(alignItems) === 'start',
								'my-auto': stegaClean(alignItems) === 'center',
								'mt-auto': stegaClean(alignItems) === 'end',
							},
							{
								'mr-auto': stegaClean(textAlign) === 'left',
								'mx-auto': stegaClean(textAlign) === 'center',
								'ml-auto': stegaClean(textAlign) === 'right',
							},
						)}
						style={{ textAlign: stegaClean(textAlign) }}
					>
						<Pretitle className={cn(hasImage && 'text-primary text-4xl')}>
							{pretitle}
						</Pretitle>

						<PortableText
							value={content}
							components={{
								types: {
									'reputation-block': ({ value }) => (
										<Reputation
											className={cn(
												'!mt-4',
												hasImage && '[&_strong]:text-amber-400',
												{
													'justify-start': stegaClean(textAlign) === 'left',
													'justify-center': stegaClean(textAlign) === 'center',
													'justify-end': stegaClean(textAlign) === 'right',
												},
											)}
											reputation={value.reputation}
										/>
									),
								},
							}}
						/>

						<CTAList
							ctas={ctas}
							className={cn('!mt-4', {
								'justify-start': stegaClean(textAlign) === 'left',
								'justify-center': stegaClean(textAlign) === 'center',
								'justify-end': stegaClean(textAlign) === 'right',
							})}
						/>
					</div>
				</div>
			)}
		</section>
	)
}
