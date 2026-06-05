"use client";
import { useState } from "react";
import Image from "next/image";
import IconMenu from "../public/icon-menu.svg";
import IconClose from "../public/icon-close.svg";
import Logo from "../public/logo.svg";
import ImageAvatar from "../public/image-avatar.png";
import { Cart } from "./Cart";

type AddToCartProps = {
  cartQuantity: number;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const navLinks = [
  "Collections",
  "Men",
  "Women",
  "About",
  "Contact"
];

export function Header({cartQuantity, showCart, setShowCart}: AddToCartProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function openNavbar() {
    setNavbarOpen(!navbarOpen);
  }

  function showCartNow() {
    setShowCart(prev => !prev);
  }

  return (
    <header className="flex flex-row justify-between items-center h-26 lg:mb-8 lg:border-b lg:border-b-[hsl(var(--grayish-blue))] ">
      {showCart && <Cart cartQuantity={cartQuantity} />}
      {navbarOpen
        && (
          <>
            <div className="inset-0 fixed bg-[hsl(var(--very-dark-blue)/0.7)] z-40"></div>
            <nav className="absolute top-0 left-0 bottom-0 right-1/3 h-screen bg-[hsl(var(--white))] z-50 p-8 transform transition-transform duration-300 ease-out">
              <button
                onClick={() => openNavbar()}
                className="mb-18">
                <Image src={IconClose} alt="Close icon" loading="eager" className="w-[16] h-[15] cursor-pointer" />
              </button>
              <ul className="font-bold">
                {navLinks.map((link) => (
                  (<li className="mb-6" key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-[hsl(var(--black))] hover:text-[hsl(var(--dark-grayish-blue))] transition-colors duration-200">{link}</a>
                  </li>)
                ))}
              </ul>
            </nav>
          </>
        )
      }

      <div className="flex flex-row items-center justify-center h-full gap-4 lg:gap-12">
        <button 
          onClick={() => openNavbar()}
          className="cursor-pointer lg:hidden"
        >
          <Image src={IconMenu} alt="Menu icon" loading="eager" className="w-[16] h-[15]" />
        </button>
        <div className="">
          <Image src={Logo} alt="Logo" loading="eager" className="w-[138] h-[20]" />
        </div>
        
        <ul className="hidden h-full lg:flex lg:flex-row lg:gap-8 lg:justify-center lg:items-center lg:font-normal">
          {navLinks.map((link) => (
            <li className="h-full" key={link}>
              <a href={`#${link.toLowerCase()}`} className="h-full flex items-center text-[hsl(var(--black))] lg:text-[hsl(var(--dark-grayish-blue))] lg:border-b-3 lg:border-transparent hover:text-[hsl(var(--black))] hover:border-b-[hsl(var(--orange))] transition-all duration-200 cursor-pointer">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row items-center justify-center gap-8 h-full">
        <div className="relative">
          {cartQuantity > 0 && (
            <div className="absolute -top-2 -right-2 bg-[hsl(var(--orange))] text-[hsl(var(--white))] w-5 h-4 rounded-lg flex items-center justify-center text-xs font-bold z-50">
              {cartQuantity}
            </div>
          )}
          <button 
            onClick={showCartNow}
            type="button"
            className="group cursor-pointer">
            <svg width="22" height="20">
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" className="fill-[hsl(var(--dark-grayish-blue))] group-hover:fill-[hsl(var(--black))] transition-all duration-200" />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="rounded-full overflow-hidden border-2 border-transparent hover:border-[hsl(var(--orange))] transition-all duration-200 cursor-pointer">
            <Image
              src={ImageAvatar}
              alt="Avatar"
              loading="eager"
              className="w-6.25 h-6.25 lg:w-12.5 lg:h-12.5" />
        </button>
      </div>
    </header>
  );
}
