"use client";
import { useState } from "react";
import Image from "next/image";
import ProductImage1 from "../public/image-product-1.jpg";
import ProductImage2 from "../public/image-product-2.jpg";
import ProductImage3 from "../public/image-product-3.jpg";
import ProductImage4 from "../public/image-product-4.jpg";
import IconPrevious from "../public/icon-previous.svg";
import IconNext from "../public/icon-next.svg";
import IconClose from "../public/icon-close.svg";

export function ProductImageCarousel() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageBoxOpened, setImageBoxOpened] = useState(false);
  const [selectedOverlayImageIndex, setSelectedOverlayImageIndex] = useState(0);

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

  const openOverlay = () => {
    if (window.innerWidth >= 1024) {
      setImageBoxOpened(true);
    }
  };

  return (
    <>
    <div className="w-screen -ml-8 mb-8 relative lg:w-full lg:ml-0 lg:flex lg:flex-col lg:max-w-115">
      <button 
        onClick={() => handleCarouselNavigation("previous")}
        className="flex justify-center items-center bg-[hsl(var(--white))] w-12 h-12 rounded-full absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer lg:hidden">
        <Image className="w-3 h-4.5" src={IconPrevious} alt="Previous image" />
      </button>
      <button 
        onClick={openOverlay}
        className="lg:rounded-xl lg:overflow-hidden lg:h-auto lg:cursor-pointer">
          <Image src={images[selectedImageIndex].src} alt={`Product image ${selectedImageIndex + 1}`}  />
      </button>
      <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-6 mt-4">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setSelectedImageIndex(index)}
            className={`relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-lg cursor-pointer overflow-hidden ${selectedImageIndex === index ? "ring-2 ring-[hsl(var(--orange))]" : ""}`}
          >
          <Image
            src={image.src}
            alt={`Thumbnail ${index + 1}`}
            className={`w-full h-full object-cover hover:brightness-70 transition duration-200 ${selectedImageIndex === index ? "brightness-70" : ""}`}  />
          </button>
        ))}
      </div>
      <button 
        onClick={() => handleCarouselNavigation("next")}
        className="flex justify-center items-center bg-[hsl(var(--white))] w-12 h-12 rounded-full absolute top-1/2 -translate-y-1/2 right-8 z-10 cursor-pointer lg:hidden">
        <Image className="w-3 h-4.5" src={IconNext} alt="Next image" />
      </button>
    </div>

    {imageBoxOpened && (
      <div onClick={() => setImageBoxOpened(false)} className="fixed inset-0 bg-[hsl(var(--very-dark-blue)/0.7)] z-40 flex flex-col justify-center items-center py-14">
        <div onClick={(e) => e.stopPropagation()} className="w-full max-w-125 px-4">
          <div className="w-full max-w-125 flex justify-end mb-6">
            <button 
              onClick={() => setImageBoxOpened(false)}
              className="relative right-0 text-[hsl(var(--white))] hover:text-[hsl(var(--orange))] transition-colors duration-200"
            >
              <svg width="14" height="15" className="fill-[hsl(var(--white))] hover:fill-[hsl(var(--orange))] transition-colors duration-200 cursor-pointer" xmlns="http://www.w3.org/2000/svg">
                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
              </svg>
            </button>
          </div>
          <div
            className="rounded-xl overflow-hidden h-auto w-full max-w-125">
              <Image src={images[selectedOverlayImageIndex].src} alt={`Product image ${selectedOverlayImageIndex + 1}`}  />
          </div>
          <div className="flex flex-row justify-between items-center gap-6 mt-4">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedOverlayImageIndex(index)}
                className={`relative w-24 h-24 rounded-lg cursor-pointer overflow-hidden ${selectedOverlayImageIndex === index ? "ring-2 ring-[hsl(var(--orange))]" : ""}`}
              >
              <Image
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-full object-cover hover:brightness-70 transition duration-200 ${selectedOverlayImageIndex === index ? "brightness-70" : ""}`}  />
              </button>
            ))}
          </div>
        </div>
      </div>
    )}
    </>
  );
}