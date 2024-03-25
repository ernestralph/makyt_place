import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
const ProductDetailsInfo = ({data}) => {
  const [active, SetActive] = useState(1);

  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => SetActive(1)}
          >
            Product Details
          </h5>

          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => SetActive(2)}
          >
            Product Reviews
          </h5>

          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => SetActive(3)}
          >
            Seller Information
          </h5>

          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>

      {active === 1 ? (
        <>
          <p className="py-2 text-[16px] leading-8 pb-10 whitespace-pre-line">
            Product details are crucial part of any eCormmerce website or online
            markeplace. These details help a potential customer to make an
            informed decision about the product they are intrested in buying. A
            well written product details can be a powerful marketing tool that
            can help to increase sales. Product details typically includes
            information about the product's feature, specification, dimensions,
            weight, materials and other relevant information than can help
            language, and be honest and transparent about the product features
            and limitations.
          </p>
          <p className="py-2 text-[16px] leading-8 pb-10 whitespace-pre-line">
            The product details section should also include high-quality images
            and videos of the produc, as well as customer reviews and ratings.
            When writing product details, it is essential to put the target
            audience in mind. The language used should be clear and easy to
            understand, and technical terms should be explained in simple
            language. The tone of the product detail should be persuasive,
            highlighting the unique features of the product.
          </p>
          <p className="py-2 text-[16px] leading-8 pb-10 whitespace-pre-line">
            The product details section should also include high-quality images
            and videos of the produc, as well as customer reviews and ratings.
            When writing product details, it is essential to put the target
            audience in mind. The language used should be clear and easy to
            understand, and technical terms should be explained in simple
            language. The tone of the product detail should be persuasive,
            highlighting the unique features of the product.
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full flex justify-center items-center h-[40vh]">
          <p>No reviews yet</p>
        </div>
      ) : null}
      {active === 3 && (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <div className="flex items-center">
              <img
                src={data.shop.shop_avatar.url}
                className="w-[50px] h-[50px] rounded-full"
                alt=""
              />

              <div className="pl-3">
                <h3 className={`${styles.shop_name} py-1`}>{data.shop.name}</h3>
                <h5 className="pb-2 text-[15px]">
                  ({data.shop.ratings})Ratings
                </h5>
              </div>
            </div>
            <p className="pt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              autem delectus at neque consequatur sit sunt corrupti vero
              voluptatum. Asperiores deserunt ut omnis, magnam laborum nobis
              odit molestias nulla consectetur.
            </p>
          </div>

          <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined on: <span className="font-[500]">25 March, 2024</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Products: <span className="font-[500]">1,223</span>
              </h5>
              <h5 className="font-[600] pt-3">
                Total Reviews: <span className="font-[500]">324</span>
              </h5>

              <Link to="/">
                <div
                className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                >
                  <h4 className="text-white">Visit Shop</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsInfo;
