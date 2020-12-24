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
				<title>Jira - Clone</title>
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
					<div className='border-b-2 border-gray-200'>
						<header className='px-6'>
							<div className='flex items-center justify-between py-3 border-b border-gray-200'>
								<div className='relative'>
									<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
										<svg
											className='w-6 h-6 text-gray-600'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
											/>
										</svg>
									</span>
									<label htmlFor='search' className='sr-only'>
										Search
									</label>
									<input
										type='text'
										name='search'
										id='serach'
										placeholder='Search'
										autoComplete='off'
										className='py-2 pl-12 pr-4 placeholder-gray-400 border border-gray-400 rounded-md'
									/>
								</div>
								<div className='flex items-center'>
									<button>
										<svg
											className='w-6 h-6 text-gray-600'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
											/>
										</svg>
									</button>
									<button className='ml-6'>
										<img
											className='object-cover rounded-full w-9 h-9'
											src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3.5&w=144&h=144&q=80'
											alt='man smiling'
										/>
									</button>
								</div>
							</div>
						</header>
					</div>
					<main></main>
				</div>
			</div>
		</>
	);
}
