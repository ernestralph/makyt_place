import React, { useEffect, useState } from 'react'
import {
  Footer,
  Header,
  ProductDetails,
  SuggestedProducts,
} from "../components";
import { useParams } from 'react-router-dom';
import { productData } from '../static/data';

const ProductDetail = () => {
  const {name} = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, ' ');

  useEffect(() => {
    const d = productData.find((i) => i.name === productName);
    setData(d);
  }, [productName]);
  return (
    <>
      <Header />
      <ProductDetails data={data}/>
      {
        data && <SuggestedProducts data={data} />
      }
      <Footer />
    </>
  )
}

export default ProductDetail
