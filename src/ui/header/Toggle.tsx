import { CgMenu, CgClose } from 'react-icons/cg'

export default function Toggle() {
	return (
		<label className="[grid-area:toggle] md:hidden">
			<input id="header-open" type="checkbox" hidden />
			<span className="header-closed:hidden">
				<CgClose size={24} />
			</span>
			<span className="header-open:hidden">
				<CgMenu size={24} />
			</span>
		</label>
	)
}
