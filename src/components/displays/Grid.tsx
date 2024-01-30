type GridItem = {
	title: string;
	imageUrl: string;
};

type GridProps = {
	items: GridItem[];
};

const Grid = ({ items }: GridProps) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{items.map((item, index) => (
				<div key={index} className="border rounded p-4 shadow">
					<img src={item.imageUrl} alt={item.title} className="w-full h-40 object-cover mb-2" />
					<h2 className="text-lg font-semibold">{item.title}</h2>
				</div>
			))}
		</div>
	);
};

export default Grid;
