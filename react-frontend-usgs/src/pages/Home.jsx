import React from "react";
import FeatureList from "../components/FeatureList";

const Home = () => {
  return (
    <>
        <div className="bg-black/65 p-6 text-black font-semibold text-center">
          <h1 className="text-white text-xl">Earthquakes, Past 30 days. USGS </h1>
        </div>
      <FeatureList />
    </>
  );
};

export default Home;
