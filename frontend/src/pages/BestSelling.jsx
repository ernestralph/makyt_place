import React, { useEffect, useState } from "react";
import { Header, ProductCard } from "../components";
import styles from "../styles/styles";
import { productData } from "../static/data";


const BestSelling = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    setData(d ? d : []);
    
  }, []);

  return (
    <div>
      <Header activeHeading={2} />
      <br />
      <br />

      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
