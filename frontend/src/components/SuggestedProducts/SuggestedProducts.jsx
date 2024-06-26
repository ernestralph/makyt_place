import React, { useEffect, useState } from 'react'
import { productData } from '../../static/data';
import styles from '../../styles/styles';
import ProductCard from '../Route/ProductCard/ProductCard';

const SuggestedProducts = ({data}) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
      const d = productData && productData.filter((i) => i.category === data.category);

      setProducts(d);
    }, [data])
    
  return (
    <div>
      {data ? (
        <div className={`p-4 ${styles.section}`}>
          <h2 className={`${styles.heading}`}>Related Product</h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
           {
            products && products.map((i, index) => (
             <ProductCard data={i} key={index}/>
            ))
           }
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SuggestedProducts
