import React from "react";
import {
  Header,
  Hero,
  Categories,
  BestDeals,
  Events,
  FeatureProduct,
  Sponsored,
  Footer,
} from "../components";



const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeatureProduct />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;
