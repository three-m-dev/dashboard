import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

const images = [image1, image2, image3];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <section className="relative bg-background mt-16">
      {images.map((image: string, index: number) => (
        <div
          key={index}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-500 ease-in-out ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      <div className="absolute w-full h-full bg-primary opacity-60"></div>

      <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-12 lg:py-20 lg:pb-56 lg:px-12">
        <Link
          to="/bulletin"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <span className="text-xs bg-primary-600 rounded-full text-gray-700 px-4 py-1.5 mr-3">
            New Updates!
          </span>
          <span className="text-sm font-medium">Check out our Bulletin</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Quality Precision for Industry Leaders
        </h1>
        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
          Unlocking new frontiers of excellence with innovative solutions for
          enhanced productivity, unparalleled precision, and sustainable
          performance
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
          >
            Learn more
          </a>
          <Link
            to="https://my.matterport.com/show/?m=Df9MzYKA3zF"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border-2 border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
          >
            Virtual Tour
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-3 pb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full bg-white opacity-50 ${
              activeIndex === index ? "opacity-100" : ""
            }`}
          ></button>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-0 ml-4 text-white"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-0 mr-4 text-white"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
