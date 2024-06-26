import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown  from "./DropDown";
import Navbar  from "./Navbar";
import {useSelector} from  'react-redux';
import { backend_url } from "../../server";
import Cart from "../Cart/Cart"
import Wishlist from "../Wishlist/Wishlist";

const Header = ({activeHeading}) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false)
  const [openWishlist, setOpenWishlist] = useState(false)

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <>
      <div className={styles.section}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt="logo icon"
            />
          </Link>
          <div className="w-[50%] relative">
            <input
              onChange={handleSearchChange}
              type="search"
              placeholder="Search Product..."
              className="h-[40px] w-full px-2 border[#3957db] border-[2px] rounded"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    const d = i.name;

                    const product_name = d.replace(/\s+/g, "-");
                    return (
                      <Link key={index} to={`/products/${product_name}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={i.image_Url[0].url}
                            alt=""
                            className="w-[40px] h-[40px] mr=[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          <div className={`${styles.button}`}>
            <Link to="/seller"cd>
              <h2 className="flex items-center text-[#fff]">
                Become Seller
                <IoIosArrowForward className="ml-1" />
              </h2>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.normalFlex} justify-between`}
        >
          {/* categories */}
          <div
            className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block"
            onClick={() => setDropDown(!dropDown)}
          >
            <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
            <button
              className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
            >
              All Categories
            </button>
            <IoIosArrowDown
              size={20}
              className="absolute right-2 top-4 cursor-pointer"
            />
            {dropDown ? (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            ) : null}
          </div>

          {/* nav item */}
          <div className={`${styles.normalFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div
              className="relative cursor-pointer mr-[15px]"
              onClick={() => setOpenWishlist(true)}
            >
              <AiOutlineHeart size={30} color="rgb(255 255 255 /83%)" />
              <span className="right-0 top-0 absolute rounded-full bg-[#3bc177] w-4 h-4  top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                0
              </span>
            </div>
            <div
              className="relative cursor-pointer mr-[15px]"
              onClick={() => {
                setOpenCart(true);
              }}
            >
              <AiOutlineShoppingCart size={30} color="rgb(255 255 255 /83%)" />
              <span className="right-0 top-0 absolute rounded-full bg-[#3bc177] w-4 h-4  top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                0
              </span>
            </div>
            <div className="relative cursor-pointer mr-[15px]">
              {isAuthenticated ? (
                <Link to={"/profile"}>
                  <img
                    src={`${backend_url}/${user?.avatar.url}`}
                    alt=""
                    className="w-[35px] h-[35px] rounded-full"
                  />
                </Link>
              ) : (
                <Link to={"/login"}>
                  <CgProfile size={30} color="rgb(255 255 255 /83%)" />
                </Link>
              )}
            </div>
          </div>

          {/* Cart Pop Modal */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* Wishlist Pop Modal */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>
      </div>
    </>
  );
};

export default Header;
