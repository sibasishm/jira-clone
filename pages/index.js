import Nav from '../components/nav';

export default function IndexPage() {
	return (
		<div>
			<Nav />
			<div className='py-20'>
				<h1 className='text-5xl text-center text-gray-700 dark:text-gray-100'>
					Kanban Board
				</h1>
			</div>
		</div>
	);
}
