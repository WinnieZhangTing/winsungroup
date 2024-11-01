import { PortableText, stegaClean } from 'next-sanity'
import CTAsSubModule, { type CTAsSubModuleType } from './CTAsSubModule'
import CustomHTMLSubmodule, {
	type CustomHTMLSubmoduleType,
} from './CustomHTMLSubmodule'
import IconSubModule, { type IconSubModuleType } from './IconSubModule'
import ImageSubModule, { type ImageSubModuleType } from './ImageSubModule'
import RichtextSubModule, {
	type RichtextSubModuleType,
} from './RichtextSubModule'
import { cn } from '@/lib/utils'
import Pretitle from '@/ui/Pretitle'

export default function CreativeModule({
	pretitle,
	intro,
	modules,
	columns,
	bordered,
	textAlign,
	alignItems,
	hoverEffect,
	background,
}: Partial<{
	pretitle: string
	intro: any
	modules: Partial<{
		subModules: Array<
			| CTAsSubModuleType
			| CustomHTMLSubmoduleType
			| IconSubModuleType
			| ImageSubModuleType
			| RichtextSubModuleType
		>
		colSpan: number
		background: boolean
	}>[]
	columns: number
	bordered: boolean
	textAlign: React.CSSProperties['textAlign']
	alignItems: React.CSSProperties['alignItems']
	hoverEffect: boolean
	background: boolean
}>) {
	const imageWidth = Math.round((1200 / (modules?.length || 1)) * 1.5)

	return (
		<section className={cn(background && 'bg-bgPrimary py-12')}>
			<div className="section space-y-8">
				{pretitle && (
					<Pretitle className="text-primary mx-auto text-center text-lg">
						{pretitle}
					</Pretitle>
				)}
				{intro && (
					<header className="richtext mx-auto max-w-xl text-center">
						<PortableText value={intro} />
					</header>
				)}

				<div
					className={cn(
						'mt-12 grid items-center md:grid-cols-[repeat(var(--col,1),minmax(0px,1fr))]',
						bordered ? 'gap-4' : 'gap-x-12 gap-y-8',
					)}
					style={
						{
							'--col': columns || modules?.length,
							textAlign: stegaClean(textAlign),
							alignItems: bordered ? 'stretch' : stegaClean(alignItems),
						} as React.CSSProperties
					}
				>
					{modules?.map(({ subModules, colSpan = 1 }, i) => (
						<article
							className={cn(
								(hoverEffect && 'hover:bg-primary space-y-4') || 'space-y-4',
								background && 'bg-white',
								colSpan > 1 && 'md:col-[var(--col-span,1)]',
								bordered ? 'border p-6' : 'rounded-xl p-6',
							)}
							style={
								{
									'--col-span': colSpan > 1 && `span ${colSpan}`,
								} as React.CSSProperties
							}
							key={i}
						>
							{subModules?.map((subModule, ii) => {
								switch (subModule._type) {
									case 'ctas':
										return (
											<CTAsSubModule
												module={subModule}
												className={cn(
													stegaClean(textAlign) === 'center' &&
														'justify-center',
												)}
												key={ii}
											/>
										)

									case 'custom-html':
										return <CustomHTMLSubmodule module={subModule} />

									case 'icon':
										return (
											<IconSubModule
												module={subModule}
												className={cn(
													stegaClean(textAlign) === 'center' &&
														'[&_img]:mx-auto',
												)}
												key={ii}
											/>
										)

									case 'image':
										return (
											<ImageSubModule
												module={subModule}
												imageWidth={imageWidth * colSpan}
												key={ii}
											/>
										)

									case 'richtext':
										return <RichtextSubModule module={subModule} key={ii} />
								}
							})}
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
