import React, { useEffect, useState } from 'react'
import {Header, ProductCard } from '../components'
import styles from '../styles/styles';
import { useSearchParams } from 'react-router-dom';
import { productData } from '../static/data';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get('category');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      const d =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(d ? d : []);
     } else {
      let d =
      productData && productData.filter((i) => i.category === categoryData);
      setData(d ? d : []);
    }
  }, [categoryData]);
  
  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />

      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
        {data && data.length === 0 ? (
          <h1 className="text-center w-full pb-[110px] text-[20px]">
            No Products Found
          </h1>
        ) : null}
      </div>
    </div>
  );
}

export default Products
