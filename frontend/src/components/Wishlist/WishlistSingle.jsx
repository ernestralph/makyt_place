import React from "react";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";

const WishlistSingle = ({ data }) => {

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer" />
        <img
          src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
          alt=""
          className="w-[80px] h-[80px] ml-2"
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>

          <h4 className="font-[600] text-[17px] text-[#d02222] font-Roboto">
            ${data.price}
          </h4>
        </div>

        <div>
          <BsCartPlus
            size={20}
            className="cursor-pointer ml-4"
            title="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default WishlistSingle;
