import React from 'react'
import styles from '../../styles/styles'
import Countdown from "./Countdown";

const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${active ? 'unset': 'mb-12'} lg:flex p-2`}>
      <div className="w-full m-auto lg:w-[50%]">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>

      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256gb</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias animi,
          et temporibus voluptas dolor earum tempora consectetur numquam optio
          minus nihil! Aut asperiores sit recusandae autem veniam, magnam
          tenetur quaerat. adipisicing elit. Alias animi, et temporibus voluptas
          dolor earum tempora consectetur numquam optio minus nihil! Aut
          asperiores sit recusandae autem veniam, magnam tenetur quaerat.
        </p>
        <div className="flex py-2 justify-between">
         <div className="flex">
          <h5 className="font-[500] text-[18px] text-[#d55] pr-3 line-through">1099$</h5>
          <h5 className="font-bold text-[20px] text-[#333] font-roboto">999$</h5>
         </div>
         <span className="pr-3 font-[400] text-[17px] text-[44a44e]">
          120 sold
          </span>
        </div>

        <Countdown />
      </div>
    </div>
  );
}

export default EventCard
