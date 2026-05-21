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
        className="flex justify-center items-center bg-[hsl(var(--white))] w-12 h-12 rounded-full absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer">
        <Image className="w-3 h-4.5" src={IconPrevious} alt="Previous image" />
      </button>
      <Image src={images[selectedImageIndex].src} alt={`Product image ${selectedImageIndex + 1}`} className="h-100 object-none" /> 
      <button 
        onClick={() => handleCarouselNavigation("next")}
        className="flex justify-center items-center bg-[hsl(var(--white))] w-12 h-12 rounded-full absolute top-1/2 -translate-y-1/2 right-8 z-10 cursor-pointer">
        <Image className="w-3 h-4.5" src={IconNext} alt="Next image" />
      </button>
    </div>
  );
}