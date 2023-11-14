import { Layout } from "../components";

const Home = () => {
  return (
    <Layout>
      <section>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <div className="h-24 w-full rounded-md bg-white shadow"></div>
            <div className="h-24 w-full rounded-md bg-white shadow"></div>
            <div className="h-24 w-full rounded-md bg-white shadow"></div>
            <div className="h-24 w-full rounded-md bg-white shadow"></div>
          </div>
          <div className="flex gap-4">
            <div className="h-96 w-full rounded-md bg-white shadow"></div>
            <div className="h-96 w-2/3 rounded-md bg-white shadow"></div>
          </div>
          <div className="flex gap-4">
            <div className="h-96 w-full rounded-md bg-white shadow"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
