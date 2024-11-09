import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md'

import { getSite } from '@/lib/sanity/queries'
import CTA from '@/ui/CTA'
import { cn } from '@/lib/utils'
import { stegaClean } from 'next-sanity'
import Img from '../Img'

function getIcon(url?: string) {
	if (!url) return null

	if (url.includes('maps.google.com') || url.includes('address') || url.includes('maps.app')) {
		return <MdLocationOn className="mr-2" />
	}
	if (url.includes('tel:') || url.includes('phone')) {
		return <MdPhone className="mr-2" />
	}
	if (url.includes('mailto:') || url.includes('email')) {
		return <MdEmail className="mr-2" />
	}
	if (url.includes('hours') || url.includes('schedule')) {
		return <MdAccessTime className="mr-2" />
	}
	return null
}

export default async function Menu() {
	const { footerMenu, qrCodes } = await getSite()

	return (
		<nav className="flex flex-wrap items-start gap-x-12 gap-y-6 max-sm:flex-col">
			{footerMenu?.items?.map((item, key) => {
				switch (item._type) {
					case 'link':
						return <CTA className="hover:link" link={item} key={key} />

					case 'link.list':
						return (
							<div className="space-y-5 text-left" key={key}>
								<div className="technical text-lg">
									<CTA link={item.link}>
										{stegaClean(item.link?.label) || item.link.internal?.title}
									</CTA>
								</div>

								<ul className="flex flex-col gap-1.5">
									{item.links?.map((link, key) => (
										<li key={key} className="flex items-center gap-2">
											{getIcon(link.external)}
											<CTA
												className={cn(
													'inline-block py-px hover:underline',
													link.external?.startsWith('http') && 'is-external',
												)}
												link={link}
											/>
										</li>
									))}
								</ul>

								{/* QR Codes row */}
								{qrCodes && (key + 1) === footerMenu?.items?.length && (
									<div className="flex gap-4">

										{qrCodes?.map((qrCode) => (
											<div className="flex flex-col items-center gap-2">
												<Img
													className="size-32 rounded bg-white p-2"
													image={qrCode}
													alt="QR Code"
												/>
											</div>
										))}

									</div>
								)}
							</div>
						)

					default:
						return null
				}
			})}
		</nav>
	)
}
