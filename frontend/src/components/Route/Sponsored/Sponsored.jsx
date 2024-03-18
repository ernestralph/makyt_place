import React from "react";
import styles from "../../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex items-start">
        <div className="flex justify-between w-full">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            alt="logo"
            style={{ width: "150px", objectFit: "container" }}
          />
        </div>
        <div className="flex justify-between w-full">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
            alt="logo"
            style={{ width: "150px", objectFit: "container" }}
          />
        </div>
        <div className="flex justify-between w-full">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png"
            alt="logo"
            style={{ width: "150px", objectFit: "container" }}
          />
        </div>
        <div className="flex justify-between w-full">
          <img
            src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
            alt="logo"
            style={{ width: "150px", objectFit: "container" }}
          />
        </div>
        <div className="flex justif-between w-full">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-microsoft-1868944-1583108.png"
            alt="logo"
            style={{ width: "150px", objectFit: "container", height:"90px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
