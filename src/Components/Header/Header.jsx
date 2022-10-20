import { useState } from "react";
import LogoSneakers from "@/assets/images/logo.svg";
import Avatar from "@/assets/images/image-avatar.png";
import MenuIcon from "@/Components/icons/MenuIcon";
import CartIcon from "@/Components/icons/CartIcon";
import CloseIcon from "@/Components/icons/CloseIcon";
import NavLink from "./NavLink";
import Cart from "./Cart";

import { useContext } from "react";
import { useCartDetails } from "@/context/useCartDetails";

const Header = () => {
  const { totalProducts } = useContext(useCartDetails);
  const [activeMenu, setActiveMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleMenuClick = () => {
    setActiveMenu(!activeMenu);
  };

  const handleCartClick = () => {
    setOpenCart(!openCart);
  };
  return (
    <div className="px-4">
      <header className="mx-auto relative py-4 md:py-0 flex items-center gap-4 md:container">
        <button className="md:hidden mr-3" onClick={handleMenuClick}>
          <MenuIcon />
        </button>
        <img
          src={LogoSneakers}
          alt="Logo Sneakers"
          className="mr-auto md:mr-12"
        />
        <nav
          className={`font-bold md:mr-auto md:flex md:flex-row md:gap-5 md:text-sm md:font-light md:text-gray-600 
            ${
              activeMenu
                ? " z-10 absolute top-0 -translate-x-4 left-0 flex h-screen w-3/5 flex-col space-y-10 bg-white px-6 font-bold"
                : "hidden"
            }`}
        >
          <button className="my-8 md:hidden" onClick={handleMenuClick}>
            <CloseIcon />
          </button>
          <NavLink name="Collection" />
          <NavLink name="Men" />
          <NavLink name="Woman" />
          <NavLink name="About" />
          <NavLink name="Contact" />
        </nav>
        <div className="flex gap-9">
          <button className="mr-6 relative" onClick={handleCartClick}>
            <CartIcon className="fill-[#69707D] hover:fill-black" />
            <span className="bg-orange-primary text-xs rounded-full px-1 text-white font-bold absolute top-0 left-4">
              {totalProducts}
            </span>
          </button>
          <img
            src={Avatar}
            alt=""
            className="w-10 h-10 backdrop-grayscale hover:border-orange-primary hover:rounded-[50%] hover:border-2"
          />
          {openCart && <Cart />}
        </div>
      </header>
      <span className="hidden md:block h-[1px] mx-auto container bg-gray-200"></span>
    </div>
  );
};

export default Header;
