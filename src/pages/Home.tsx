import { Layout } from "../components";

const Home = () => {
  return (
    <Layout>
      <section className="px-6 py-2">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex w-full items-center lg:mb-0 lg:w-auto">
            <h2 className="text-2xl font-bold">Dashboard</h2>
          </div>
          <button
            onClick={() => {}}
            className="flex w-auto items-center rounded border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
          >
            <span className="mr-1 inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 text-blue-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </span>
            <span>Full Screen</span>
          </button>
        </div>
        <div className="flex flex-wrap py-6 text-center text-sm">
          <a
            className="mb-4 inline-block w-full border-b-2 border-blue-500 px-4 pb-2 text-blue-500 md:w-1/2 lg:mb-0 lg:w-auto"
            href="#"
          >
            Overview
          </a>
          <a
            className="mb-4 inline-block w-full border-b-2 border-transparent px-4 pb-2 text-gray-300 hover:border-gray-300 md:w-1/2 lg:mb-0 lg:w-auto"
            href="#"
          >
            Calendar
          </a>
          <a
            className="mb-4 inline-block w-full border-b-2 border-transparent px-4 pb-2 text-gray-300 hover:border-gray-300 md:w-1/2 lg:mb-0 lg:w-auto"
            href="#"
          >
            Improvements
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
