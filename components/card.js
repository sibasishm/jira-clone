export default function Card() {
	return (
		<a href='#' className='block p-5 bg-white rounded-md shadow'>
			<div className='flex items-center justify-between space-x-4'>
				<h4 className='text-sm font-medium leading-snug'>
					Provide documentations on integrations and get them reviewed
				</h4>
				<img
					className='object-cover w-6 h-6 rounded-full'
					src='https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=72&h=72&q=80'
					alt=''
				/>
			</div>
			<div className='flex items-baseline justify-between mt-4'>
				<p className='text-sm text-gray-600'>
					<time dateTime='2020-07-07'>July 7</time>
				</p>
				<div className='inline-flex items-center p-2 py-1 text-green-700 bg-green-100 rounded'>
					<svg className='w-2 h-2' viewBox='0 0 8 8' fill='currentColor'>
						<circle cx='4' cy='4' r='3' />
					</svg>
					<span className='ml-1 text-xs font-medium'>Enhancement</span>
				</div>
			</div>
		</a>
	);
}
