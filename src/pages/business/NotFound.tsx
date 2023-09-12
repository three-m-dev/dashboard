import { Link } from "react-router-dom";
import { Navbar } from "../../components/business";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-12">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{" "}
            </p>
            <Link
              to="/"
              className="inline-flex text-white bg-primary hover:bg-secondary focus:ring-2 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
            >
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
