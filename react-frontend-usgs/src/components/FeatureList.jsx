import { useFeaturesContex } from "../context/FeaturesContex";
import { Link } from "react-router-dom";

const FeatureList = () => {
  const { features, handlePrevPage, handleNextPage, currentPage, totalPages } =
    useFeaturesContex();

  return (
    <>
      <ul>
        {features.map((feature) => (
          <li key={feature.id}>
            <Link to={`/feature/${feature.id}`}>
              <h3>{feature.title}</h3>
              <p>{feature.place}</p>
            </Link>
          </li>
        ))}

        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </ul>
    </>
  );
};

export default FeatureList;
