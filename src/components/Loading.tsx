import { Layout } from ".";

const Loading = () => {
  return (
    <Layout>
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-4 border-t-4 border-blue-500"></div>
      </div>
    </Layout>
  );
};

export default Loading;
