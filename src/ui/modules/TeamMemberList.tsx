import { PortableText } from 'next-sanity'
import Img from '@/ui/Img'
import Link from 'next/link'
import { CgArrowRight } from 'react-icons/cg'

export default function TeamMemberList({
	title,
	intro,
	members
}: Partial<{
	title: string
	intro: any
	members: Sanity.TeamMember[]
}>) {
	return (
		<section className="section space-y-8">
			{(title || intro) && (
				<header className="richtext mx-auto max-w-xl text-center">
					{title && (
						<h2 className="">{title}</h2>
					)}
					{intro && <PortableText value={intro} />}
				</header>
			)}

			<div className="grid gap-x-12 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{members?.map((member) => (

					<article className="space-y-4 p-6">
						{member.profileImage && (
							<Link
								href={`/team-member/${member.metadata.slug.current}`}
								key={member._id}
							>
								<figure className="overflow-hidden rounded-lg group">
									<Img
										className="aspect-[3/4] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
										image={member.profileImage}
										imageWidth={400}
										alt={member.name}
									/>
								</figure>
							</Link>
						)}

						<div className="richtext text-center">
							<Link
								href={`/team-member/${member.metadata.slug.current}`}
								key={member._id}
							>
								<p className="font-bold text-xl hover:underline">
									<strong>{member.name}</strong>
								</p>
							</Link>
							{(member.shortTitle || member.position) && (
								<p className="">{member.shortTitle || member.position}</p>
							)}
							{/* {member.credentials && (
								<p className="text-sm text-gray-600">{member.credentials}</p>
							)} */}
						</div>

						{/* <div className="space-y-1 bg-white p-2 rounded-lg shadow-md -mt-6 mx-4 relative">
								<h3 className="font-bold text-xl">{member.name}</h3>
								{member.position && (
									<p className="text-primary font-medium">{member.position}</p>
								)}
							</div> */}
						{/* <div className="flex items-center justify-between bg-white p-2 rounded-lg shadow-md -mt-6 mx-4 relative">
							<div className="space-y-1 min-w-0 flex-1 ">
								{member.position && (
									<p className="text-gray-500 text-sm">{member.position}</p>
								)}
								<h3 className="font-medium text-xl truncate">{member.name}</h3>
							</div>
							<Link
								href={`/team-member/${member.metadata.slug.current}`}
								key={member._id}
								className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-primary/80 transition-colors"
							>
								<CgArrowRight className="w-5 h-5" />
							</Link>
						</div> */}
					</article>
				))}
			</div>
		</section>
	)
}