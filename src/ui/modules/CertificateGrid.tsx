import Img from '@/ui/Img'
import { cn } from '@/lib/utils'

export type CertificateType = {
	image: Sanity.Image
}

export default function CertificateGrid({
	certificates,
	...props
}: Partial<{
	certificates: CertificateType[]
}> & Sanity.Module) {
	return (
		<section
			className="section"
		// data-aos="fade-up"
		// data-aos-duration="800"
		// data-aos-easing="ease-in-out"
		>
			<div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
				{certificates?.map((certificate, index) => (
					<div
						key={index}
						className="group relative overflow-hidden bg-white p-0 shadow-sm transition-all duration-300 "
					>
						<figure className="aspect-[4/3] w-full overflow-hidden">
							<Img
								image={certificate.image}
								className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
								imageWidth={400}
							/>
						</figure>
					</div>
				))}
			</div>
		</section>
	)
}
