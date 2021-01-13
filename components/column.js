function Column({ children }) {
	return (
		<section className='flex flex-col flex-shrink-0 bg-gray-100 rounded-md w-80'>
			{children}
		</section>
	);
}

Column.Header = function ColumnHeader({ children }) {
	return (
		<h3 className='flex-shrink-0 p-3 pb-1 text-sm font-medium text-gray-700'>
			{children}
		</h3>
	);
};

Column.Body = function ColumnBody({ children }) {
	return (
		<div className='flex-1 overflow-y-auto'>
			<ol className='p-3 pt-1 space-y-3'>{children}</ol>
		</div>
	);
};

export default Column;
