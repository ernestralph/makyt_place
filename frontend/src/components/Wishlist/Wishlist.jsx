import React from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import WishlistSingle from "./WishlistSingle";
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max 256gb ssd and 8gb ram silver color",
      description: "text",
      price: 661,
    },
    {
      name: "Iphone X pro max 256gb ssd and 8gb ram silver color",
      description: "text",
      price: 285,
    },
    {
      name: "Iphone 15 pro max 256gb ssd and 8gb ram silver color",
      description: "text",
      price: 999,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              className="cursor-pointer"
              size={20}
              onClick={() => setOpenWishlist(false)}
            />
          </div>

          {/* Cart Length */}
          <div className={`${styles.normalFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 Items</h5>
          </div>

          {/* Cart Single Item */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => (
                <WishlistSingle key={index} data={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
