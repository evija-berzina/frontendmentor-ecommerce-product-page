"use client";
import { useState } from "react";
import Image from "next/image";
import ProductImage1 from "../public/image-product-1.jpg";
import ProductImage2 from "../public/image-product-2.jpg";
import ProductImage3 from "../public/image-product-3.jpg";
import ProductImage4 from "../public/image-product-4.jpg";
import IconPrevious from "../public/icon-previous.svg";
import IconNext from "../public/icon-next.svg";

export function ProductImageCarousel() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    { id: 1, src: ProductImage1 },
    { id: 2, src: ProductImage2 },
    { id: 3, src: ProductImage3 },
    { id: 4, src: ProductImage4 },
  ];

  function handleCarouselNavigation(direction: "previous" | "next") {
    setSelectedImageIndex(prev => {
      if (direction === "previous") {
        return prev === 0 ? images.length - 1 : prev - 1;
      } else {
        return prev === images.length - 1 ? 0 : prev + 1;
      }
    });
  }

  return (
    <div className="w-screen -ml-8 mb-8 relative">
      <button 
        onClick={() => handleCarouselNavigation("previous")}
        className="flex justify-center items-center bg-[hsl(var(--white))] w-12 h-12 rounded-full absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer md:hidden">
        <Image className="w-3 h-4.5" src={IconPrevious} alt="Previous image" />
      </button>
      <Image src={images[selectedImageIndex].src} alt={`Product image ${selectedImageIndex + 1}`} className="h-100 object-none" />
      <div className="hidden md:flex md:flex-row md:justify-start md:items-center md:gap-6 mt-4">
        <button
          className={`rounded-lg cursor-pointer ${selectedImageIndex === 0 ? "ring-2 ring-[hsl(var(--orange))] relative overflow-hidden" : ""}`}
          onClick={() => setSelectedImageIndex(0)}
        >
          <Image src={ProductImage1} alt="Thumbnail 1" className="w-16 h-16 object-cover rounded-lg"  />
          <div className="absolute w-16 h-16 inset-0 bg-[hsl(var(--light-grayish-blue)/0.7)] z-100"></div>
        </button>
        <button className={`rounded-lg cursor-pointer ${selectedImageIndex === 1 ? "ring-2 ring-[hsl(var(--orange))] relative overflow-hidden" : ""}`} onClick={() => setSelectedImageIndex(1)}>
          <Image src={ProductImage2} alt="Thumbnail 2" className="w-16 h-16 object-cover rounded-lg" />
          <div className="absolute w-16 h-16 inset-0 bg-[hsl(var(--light-grayish-blue)/0.7)] z-100"></div>
        </button>
        <button className={`rounded-lg cursor-pointer ${selectedImageIndex === 2 ? "ring-2 ring-[hsl(var(--orange))] relative overflow-hidden" : ""}`} onClick={() => setSelectedImageIndex(2)}>
          <Image src={ProductImage3} alt="Thumbnail 3" className="w-16 h-16 object-cover rounded-lg" />
          <div className="absolute w-16 h-16 inset-0 bg-[hsl(var(--light-grayish-blue)/0.7)] z-100"></div>
        </button>
        <button className={`rounded-lg cursor-pointer ${selectedImageIndex === 3 ? "ring-2 ring-[hsl(var(--orange))] relative overflow-hidden" : ""}`} onClick={() => setSelectedImageIndex(3)}>
          <Image src={ProductImage4} alt="Thumbnail 4" className="w-16 h-16 object-cover rounded-lg" />
          <div className="absolute w-16 h-16 inset-0 bg-[hsl(var(--light-grayish-blue)/0.7)] z-100"></div>
        </button>
      </div>
      <button 
        onClick={() => handleCarouselNavigation("next")}
        className="flex justify-center items-center bg-[hsl(var(--white))] w-12 h-12 rounded-full absolute top-1/2 -translate-y-1/2 right-8 z-10 cursor-pointer md:hidden">
        <Image className="w-3 h-4.5" src={IconNext} alt="Next image" />
      </button>
    </div>
  );
}