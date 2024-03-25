import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import styles from '../../styles/styles'
import { IoBagOutline } from "react-icons/io5";
import CartSingle from "./CartSingle.jsx";
import { Link } from 'react-router-dom';

const Cart = ({setOpenCart}) => {
 const cartData = [
  {
   name:"Iphone 14 pro max 256gb ssd and 8gb ram silver color", 
   description:'text', 
   price:661
  },
  {
   name:"Iphone X pro max 256gb ssd and 8gb ram silver color", 
   description:'text', 
   price:285
  },
  {
   name:"Iphone 15 pro max 256gb ssd and 8gb ram silver color", 
   description:'text', 
   price:999
  },
 ]
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              className="cursor-pointer"
              size={20}
              onClick={() => setOpenCart(false)}
            />
          </div>

          {/* Cart Length */}
          <div className={`${styles.normalFlex} p-4`}>
            <IoBagOutline size={25} />
            <h5 className='pl-2 text-[20px] font-[500]'>3 Items</h5>
          </div>

          {/* Cart Single Item */}
          <br />
          <div className='w-full border-t'>
           {
            cartData && cartData.map((i, index) => (
             <CartSingle key={index} data={i} />
            ))
           }
          </div>
        </div>
        <div className="px-5 mb-5">
         {/* checkout btn lin */}
         <Link to="/checkout">
           <div className="h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]">
            <h1 className='text-[#fff] text-[18px] font-[600]'>Checkout Now (USD$1109)</h1>
           </div>
         </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart
