import React, { useState } from 'react'
import styles from '../../styles/styles';
import {HiOutlineMinus, HiPlus} from "react-icons/hi"
import { RxCross1 } from 'react-icons/rx';

const CartSingle = ({data}) => {
 const [value, setValue] = useState(1);
 const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.normalFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value + 1)}
          >
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="pl-[10px]">{value}</span>
          <div
            className={`bg-[#a7abb14f] rounded-full w-[25px] h-[25px] ${styles.normalFlex} justify-center cursor-pointer`}
            onClick={() => setValue(value === 1 ? 1 : value - 1)}
          >
            <HiOutlineMinus size={18} color="#7d879c" />
          </div>
        </div>
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" className='w-[80px] h-[80px] ml-2'/>
        <div className='pl-[5px]'>
         <h1>{data.name}</h1>
         <h4 className='font-[400] text-[15px] text-[#00000082]'>${data.price} * {value}</h4>
         <h4 className='font-[600] text-[17px] text-[#d02222] font-Roboto'>${totalPrice}</h4>
        </div>

        <RxCross1 className='cursor-pointer'/>
      </div>
    </div>
  );
}

export default CartSingle
