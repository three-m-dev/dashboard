import { Layout } from '../components';

const Home = () => {
	return (
		<Layout>
			<div className="flex flex-col h-full gap-4">
				<div className="flex flex-row flex-grow gap-4">
					<div className="flex-grow bg-white rounded-lg p-4 shadow-md">Events</div>
					<div className="flex-grow bg-white rounded-lg p-4 shadow-md">Meetings</div>
					<div className="flex-grow bg-white rounded-lg p-4 shadow-md">Birthdays</div>
				</div>

				<div className="flex flex-row flex-grow gap-4">
					<div className="flex-grow bg-white rounded-lg p-4 shadow-md">Image Slide</div>
					<div className="flex-grow bg-white rounded-lg p-4 shadow-md">Meme</div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
