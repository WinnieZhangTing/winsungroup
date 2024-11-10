import { PortableText } from 'next-sanity'
import Pretitle from '@/ui/Pretitle'
import Reputation from '@/ui/Reputation'
import CTAList from '@/ui/CTAList'
import Img from '@/ui/Img'
import { cn } from '@/lib/utils'
import moduleProps from '@/lib/moduleProps'

export default function HeroSplit({
	pretitle,
	content,
	ctas,
	image,
	...props
}: Partial<{
	pretitle: string
	content: any
	ctas: Sanity.CTA[]
	image: Sanity.Image & {
		onRight?: boolean
		onBottom?: boolean
	}
}> & Sanity.Module) {
	return (
		<section className="section grid items-center gap-8 md:grid-cols-2 md:gap-x-12" {...moduleProps(props)}>
			<figure
				className={cn(
					'max-md:full-bleed',
					image?.onRight && 'md:order-1',
					image?.onBottom && 'max-md:order-last',
				)}
			>
				<Img image={image} imageWidth={1200} />
			</figure>

			<div className="richtext mx-auto w-full max-w-lg [&_:is(h1,h2)]:text-balance">
				<Pretitle className="text-primary text-2xl">{pretitle}</Pretitle>
				<PortableText
					value={content}
					components={{
						types: {
							'reputation-block': ({ value }) => (
								<Reputation className="!mt-4" reputation={value.reputation} />
							),
						},
					}}
				/>
				<CTAList ctas={ctas} className="!mt-4" />
			</div>
		</section>
	)
}
