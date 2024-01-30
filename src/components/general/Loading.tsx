type LoadingProps = {
	size: 'small' | 'medium' | 'large';
};

const Loading = ({ size }: LoadingProps) => {
	const sizeClass = {
		small: 'w-4 h-4 border-2',
		medium: 'w-12 h-12 border-4',
		large: 'w-20 h-20 border-4',
	}[size];

	return (
		<div className={`flex justify-center items-center`}>
			<div className={`${sizeClass} border-gray-200 rounded-full loader border-t-blue-600 animate-spin`}></div>
		</div>
	);
};

export default Loading;
