import Head from 'next/head';
import Avatar from '../components/avatar';
import Card from '../components/card';
import Column from '../components/column';
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
	{ href: '#', label: 'Design 1' },
	{ href: '#', label: 'Design 2' },
];

const users = [
	{
		name: 'Emily',
		avatar:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.75&w=72&h=72&q=80',
	},
	{
		name: 'John',
		avatar:
			'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=72&h=72&q=80',
	},
	{
		name: 'Rohit',
		avatar:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=72&h=72&q=80',
	},
	{
		name: 'Marenda',
		avatar:
			'https://images.unsplash.com/photo-1581055990573-73e74f8115b8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=facearea&facepad=3&w=72&h=72&q=80',
	},
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
				<aside className='w-64 px-8 py-4 overflow-auto bg-gray-100 border-r'>
					<img className='w-9 h-9' src='/logo.svg' alt='task manager logo' />
					<nav>
						<h3 className='mt-6 text-xs font-bold tracking-wide text-gray-600 uppercase'>
							Issues
						</h3>
						<Nav links={issues} />
						<h3 className='mt-6 text-xs font-bold tracking-wide text-gray-600 uppercase'>
							Tags
						</h3>
						<Nav links={tags} />
						<div className='mt-4 -ml-1'>
							<button className='flex items-center w-full py-2 text-gray-600 rounded-lg hover:bg-gray-200 focus:bg-gray-200'>
								<svg
									className='w-5 h-5 text-gray-500'
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
				<div className='flex flex-col flex-1 min-w-0 overflow-hidden bg-white'>
					<div className='border-b-2 border-gray-200'>
						<header className='px-6'>
							<div className='flex items-center justify-between py-3 border-b border-gray-200'>
								<div className='relative'>
									<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
										<svg
											className='w-6 h-6 text-gray-500'
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
										className='py-2 pl-12 pr-4 placeholder-gray-400 border border-gray-300 rounded-md'
									/>
								</div>
								<div className='flex items-center'>
									<button>
										<svg
											className='w-6 h-6 text-gray-400'
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
							<div className='flex items-center justify-between py-3'>
								<div className='flex items-center'>
									<h2 className='text-2xl font-semibold leading-tight'>
										All Issues
									</h2>
									<div className='flex items-center ml-6'>
										<Avatar users={users} />
									</div>
								</div>
								<div className='flex items-center'>
									<span className='inline-flex p-0.5 bg-gray-200 border rounded-md'>
										<button className='px-3 py-1'>
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
													d='M4 6h16M4 10h16M4 14h16M4 18h16'
												/>
											</svg>
										</button>
										<button className='px-3 py-1 ml-1 bg-white rounded shadow'>
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
													d='M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2'
												/>
											</svg>
										</button>
									</span>
									<button className='flex items-center py-2 pl-3 pr-4 ml-5 text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:bg-gray-900'>
										<svg
											className='w-5 h-5'
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
										<span className='ml-1 text-sm font-medium tracking-wide'>
											New Issue
										</span>
									</button>
								</div>
							</div>
						</header>
					</div>
					<main className='flex-1 overflow-auto'>
						<div className='inline-flex h-full p-3 space-x-3 overflow-hidden'>
							<Column>
								<Column.Header>Backlog</Column.Header>
								<Column.Body>
									{users.map(user => (
										<li key={user.name}>
											<Card />
										</li>
									))}
									{users.map(user => (
										<li key={user.name}>
											<Card />
										</li>
									))}
								</Column.Body>
							</Column>
							<Column>
								<Column.Header>On Progress</Column.Header>
								<Column.Body>
									{users.map(user => (
										<li key={user.name}>
											<Card />
										</li>
									))}
								</Column.Body>
							</Column>
							<Column>
								<Column.Header>Testing</Column.Header>
								<Column.Body>
									{users.map(user => (
										<li key={user.name}>
											<Card />
										</li>
									))}
								</Column.Body>
							</Column>
							<Column>
								<Column.Header>Deployed</Column.Header>
								<Column.Body>
									{users.map(user => (
										<li key={user.name}>
											<Card />
										</li>
									))}
									{users.map(user => (
										<li key={user.name}>
											<Card />
										</li>
									))}
								</Column.Body>
							</Column>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}
