export default function Category({
	value,
	label,
}: {
	value?: Sanity.PostCategory
	label?: string
}) {
	return (
		<>
			<span className="text-accent/40">#</span>
			{label || value?.title}
		</>
	)
}
