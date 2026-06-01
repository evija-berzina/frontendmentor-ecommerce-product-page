"use client";
import { useState } from "react";
import Image from "next/image";
import IconMenu from "../public/icon-menu.svg";
import IconClose from "../public/icon-close.svg";
import Logo from "../public/logo.svg";
import IconCart from "../public/icon-cart.svg";
import ImageAvatar from "../public/image-avatar.png";

// type HeaderProps = {
//     navbarOpen: boolean;
//     openNavbar: React.Dispatch<React.SetStateAction<boolean>>;
//   };

type AddToCartProps = {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    addToCart: () => void;
    cartQuantity: number;
  };

export function Header({cartQuantity}: AddToCartProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function openNavbar() {
    setNavbarOpen(!navbarOpen);
  }


  return (
    <header className="flex flex-row justify-between items-center mb-8 md:border-b md:border-b-[hsl(var(--grayish-blue))] ">
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
              <ul className="font-bold ">
                <li className="mb-6"><a href="#" className="text-[hsl(var(--black))] hover:text-[hsl(var(--dark-grayish-blue))] transition-colors duration-200 ">Collections</a></li>
                <li className="mb-6"><a href="#" className="text-[hsl(var(--black))] hover:text-[hsl(var(--dark-grayish-blue))] transition-colors duration-200">Men</a></li>
                <li className="mb-6"><a href="#" className="text-[hsl(var(--black))] hover:text-[hsl(var(--dark-grayish-blue))] transition-colors duration-200">Women</a></li>
                <li className="mb-6"><a href="#" className="text-[hsl(var(--black))] hover:text-[hsl(var(--dark-grayish-blue))] transition-colors duration-200">About</a></li>
                <li className="mb-6"><a href="#" className="text-[hsl(var(--black))] hover:text-[hsl(var(--dark-grayish-blue))] transition-colors duration-200">Contact</a></li>
              </ul>
            </nav>
          </>
        )
      }

      <div className="flex flex-row items-end md:items-center gap-4 md:gap-12">
        <button 
          onClick={() => openNavbar()}
          className="cursor-pointer md:hidden"
        >
          <Image src={IconMenu} alt="Menu icon" loading="eager" className="w-[16] h-[15]" />
        </button>
        <div className="md:pb-8">
          <Image src={Logo} alt="Logo" loading="eager" className="w-[138] h-[20]" />
        </div>
        
        
        <ul className="hidden md:flex md:flex-row md:gap-6 md:justify-center md:items-center md:font-normal ">
          <li>
            <a href="#collections" className="inline-block text-[hsl(var(--black))] md:text-[hsl(var(--dark-grayish-blue))] md:pb-8 md:border-b-3 md:border-transparent hover:text-[hsl(var(--black))] transition-colors hover:border-b-[hsl(var(--orange))] transition-border duration-200 cursor-pointer">Collections</a>
          </li>
          <li>
            <a href="#men" className="inline-block text-[hsl(var(--black))] md:text-[hsl(var(--dark-grayish-blue))] md:pb-8 md:border-b-3 md:border-transparent hover:text-[hsl(var(--black))] transition-colors hover:border-b-[hsl(var(--orange))] transition-border duration-200 cursor-pointer">Men</a>
          </li>
          <li>
            <a href="#women" className="inline-block text-[hsl(var(--black))] md:text-[hsl(var(--dark-grayish-blue))] md:pb-8 md:border-b-3 md:border-transparent hover:text-[hsl(var(--black))] transition-colors hover:border-b-[hsl(var(--orange))] transition-border duration-200 cursor-pointer">Women</a>
          </li>
          <li>
            <a href="#about" className="inline-block text-[hsl(var(--black))] md:text-[hsl(var(--dark-grayish-blue))] md:pb-8 md:border-b-3 md:border-transparent hover:text-[hsl(var(--black))] transition-colors hover:border-b-[hsl(var(--orange))] transition-border duration-200 cursor-pointer">About</a>
          </li>
          <li>
            <a href="#contact" className="inline-block text-[hsl(var(--black))] md:text-[hsl(var(--dark-grayish-blue))] md:pb-8 md:border-b-3 md:border-transparent hover:text-[hsl(var(--black))] transition-colors hover:border-b-[hsl(var(--orange))] transition-border duration-200 cursor-pointer">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center gap-4 md:pb-8">
        <div className="relative">
          {cartQuantity > 0 && (
            <div className="absolute -top-2 -right-2 bg-[hsl(var(--orange))] text-[hsl(var(--white))] w-5 h-4 rounded-lg flex items-center justify-center text-xs font-bold z-50">
              {cartQuantity}
            </div>
          )}

          <Image src={IconCart} alt="Cart icon" loading="eager" className="w-[22] h-[20] cursor-pointer" />
        </div>
        <Image src={ImageAvatar} alt="Avatar" loading="eager" className="w-[25] h-[25] rounded-full hover:border hover:border-[hsl(var(--orange))] cursor-pointer" />
      </div>
    </header>
  );
}
