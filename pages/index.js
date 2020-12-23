import Head from 'next/head';
import Nav from '../components/nav';

const issues = [
	{ href: '#', label: 'All', value: 36, active: true },
	{ href: '#', label: 'Assigned to me', value: 3 },
	{ href: '#', label: 'Created by me', value: 11 },
	{ href: '#', label: 'Archived' },
];

const tags = [
	{ href: '#', label: 'Bug' },
	{ href: '#', label: 'Feature request' },
	{ href: '#', label: 'Marketing' },
	{ href: '#', label: 'v2.0' },
	{ href: '#', label: 'Enhancement' },
	{ href: '#', label: 'Design' },
];

export default function IndexPage() {
	return (
		<>
			<Head>
				<link
					rel='shortcut icon'
					href='/logo.svg'
					type='image/svg'
					sizes='16x16'
				/>
				<link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
			</Head>
			<div className='flex h-screen'>
				<aside className='w-64 px-8 py-4 bg-gray-100 border-r'>
					<img className='w-9 h-9' src='/logo.svg' alt='task manager logo' />
					<nav>
						<h2 className='mt-6 text-xs font-bold tracking-wide text-gray-600 uppercase'>
							Issues
						</h2>
						<Nav links={issues} />
						<h2 className='mt-6 text-xs font-bold tracking-wide text-gray-600 uppercase'>
							Tags
						</h2>
						<Nav links={tags} />
						<div className='mt-4 -ml-1'>
							<button className='flex items-center w-full py-2 text-gray-600 rounded-lg hover:bg-gray-200 focus:bg-gray-200'>
								<svg
									className='w-4 h-4 text-gray-500'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 6v6m0 0v6m0-6h6m-6 0H6'
									/>
								</svg>
								<span className='ml-2 text-sm font-medium tracking-wide'>
									New Project
								</span>
							</button>
						</div>
					</nav>
				</aside>
				<div className='flex-1 min-w-0 bg-white'>
					<header className='border-b-2 border-gray-200'></header>
					<main></main>
				</div>
			</div>
		</>
	);
}
