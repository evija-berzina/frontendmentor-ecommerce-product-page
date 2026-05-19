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

export function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  function openNavbar() {
    setNavbarOpen(!navbarOpen);
  }


  return (
    <header className="flex flex-row justify-between items-center mb-8 md:border-b md:border-b-[hsl(var(--grayish-blue))] md:pb-8">
      {navbarOpen
        &&
        <div className="inset-0 fixed bg-[hsl(var(--very-dark-blue)/0.7)] z-100"></div>
      }
      <div className="flex flex-row items-end md:items-center gap-4 md:gap-12">
        <button 
          onClick={() => openNavbar()}
          className={`cursor-pointer md:hidden ${navbarOpen && "z-1001"}`}
        >
          {navbarOpen
            ? <Image src={IconClose} alt="Close icon" loading="eager" className="w-[16] h-[15] cursor-pointer" />
            : <Image src={IconMenu} alt="Menu icon" loading="eager" className="w-[16] h-[15]" />
          }
        </button>
        <Image src={Logo} alt="Logo" loading="eager" className="w-[138] h-[20]" />
        
        <ul className={`md:flex md:flex-row md:gap-6 md:justify-center md:items-center md:font-normal ${navbarOpen ? "absolute top-0 left-0 bottom-0 right-1/3 h-screen bg-[hsl(var(--white))] z-1000 p-8 font-bold pt-24" : "hidden"}`}>
          <li className={`${navbarOpen && "mb-8"}`}><a href="#" className="text-[hsl(var(--black))] md:text-[hsl(var(--dark-grayish-blue))] hover:text-[hsl(var(--black))]">Collections</a></li>
          <li className={`${navbarOpen && "mb-8"}`}><a href="#" className="text-[hsl(var(--black))] md:text-[hsl(var(--dark-grayish-blue))] hover:text-[hsl(var(--black))]">Men</a></li>
          <li className={`${navbarOpen && "mb-8"}`}><a href="#" className="text-[hsl(var(--black))] md:text-[hsl(var(--dark-grayish-blue))] hover:text-[hsl(var(--black))]">Women</a></li>
          <li className={`${navbarOpen && "mb-8"}`}><a href="#" className="text-[hsl(var(--black))] md:text-[hsl(var(--dark-grayish-blue))] hover:text-[hsl(var(--black))]">About</a></li>
          <li className={`${navbarOpen && "mb-8"}`}><a href="#" className="text-[hsl(var(--black))] md:text-[hsl(var(--dark-grayish-blue))] hover:text-[hsl(var(--black))]">Contact</a></li>
        </ul>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Image src={IconCart} alt="Cart icon" loading="eager" className="w-[22] h-[20]" />
        <Image src={ImageAvatar} alt="Avatar" loading="eager" className="w-[25] h-[25] rounded-full" />
      </div>
    </header>
  );
}
