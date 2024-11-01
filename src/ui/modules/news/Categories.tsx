import Category from './Category'

export default function Categories({
	categories,
	...props
}: {
	categories?: Sanity.PostCategory[]
} & React.ComponentProps<'ul'>) {
	if (!categories?.length) return null

	return (
		<ul {...props}>
			{categories.map((category, key) => (
				<li key={key}>
					<Category value={category} />
				</li>
			))}
		</ul>
	)
}
