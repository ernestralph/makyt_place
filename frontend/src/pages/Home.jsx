import React from "react";
import {
  Header,
  Hero,
  Categories,
  BestDeals,
  FeatureProduct,
  Events,
} from "../components";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <FeatureProduct />
      <Events />
    </div>
  );
};

export default HomePage;
