import { Layout } from "../components";

type Props = {};

const TeamTest = (props: Props) => {
  return (
    <Layout>
      <div className="h-12 text-center">Button</div>
      <div className="grid h-full max-h-full w-full grid-cols-5 gap-4">
        <div className="col-span-4 h-full bg-red-100"></div>
        <div className="col-span-1 flex h-full flex-col gap-4">
          <div className="h-full w-full bg-blue-100"></div>
          <div className="h-full w-full bg-green-100"></div>
        </div>
      </div>
    </Layout>
  );
};

export default TeamTest;
