import { useFeaturesContex } from "../context/FeaturesContex";
import { Link } from "react-router-dom";

const FeatureList = () => {
  const { features, handlePrevPage, handleNextPage, currentPage, totalPages } =
    useFeaturesContex();

  return (
    <>
      <div className="flex flex-col mt-6 items-center gap-y-4 ">
        <div className="flex flex-wrap gap-6 justify-center items-center ">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="max-w-[350px] w-full p-6 bg-gray-700 border border-gray-200 rounded-lg shadow  text-white text-sm flex flex-col gap-y-6"
            >
              <h2 className="md:text-md lg:text-xl font-bold">{feature.place}</h2>
              <h2 className="uppercase">
                <span className="font-bold">Magnitud</span>: {feature.magnitude}
                {feature.mag_type}
              </h2>
              <Link to={`/feature/${feature.id}`}>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex gap-x-5 mb-2">
          <button
            className="rounded-full border-black text-sm w-20 h-10 bg-blue-700  hover:bg-blue-800 text-white "
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="rounded-full border-black text-sm w-20 h-10 bg-blue-700  hover:bg-blue-800 text-white "
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default FeatureList;
