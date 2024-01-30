import { Layout } from '../components';

const Home = () => {
	return (
		<Layout>
			<div className="flex flex-col h-full gap-4">
				<div className="flex flex-row flex-grow gap-4">
					<div className="flex-grow bg-white rounded-lg p-4">Events</div>
					<div className="flex-grow bg-white rounded-lg p-4">Meetings</div>
					<div className="flex-grow bg-white rounded-lg p-4">Birthdays</div>
				</div>

				<div className="flex flex-row flex-grow gap-4">
					<div className="flex-grow bg-white rounded-lg p-4">Image Slide</div>
					<div className="flex-grow bg-white rounded-lg p-4">Meme</div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
