import Link from 'next/link';

export default function Nav({ links }) {
	return links.map(link => (
		<div className='mt-1 -mx-3' key={link.label}>
			<a
				href='#'
				className={`flex items-center justify-between px-3 py-2 mt-2 text-sm font-medium text-gray-700 rounded-lg ${
					link.active ? 'bg-gray-200' : 'hover:bg-gray-200'
				}`}
			>
				{link.label}
				<span className='text-xs font-semibold text-gray-700'>
					{link.value}
				</span>
			</a>
		</div>
	));
}
