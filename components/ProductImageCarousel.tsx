import Image from "next/image";
import ProductImage1 from "../public/image-product-1.jpg";
import IconPrevious from "../public/icon-previous.svg";
import IconNext from "../public/icon-next.svg";

export function ProductImageCarousel() {
  return (
    <div className="w-screen -ml-8 mb-8 relative">
      <button className="flex justify-center items-center bg-[hsl(var(--white))] w-12 h-12 rounded-full absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer">
        <Image className="w-3 h-4.5" src={IconPrevious} alt="Previous image" />
      </button>
      <Image src={ProductImage1} alt="Product image 1" className="h-100 object-none" /> 
      <button className="flex justify-center items-center bg-[hsl(var(--white))] w-12 h-12 rounded-full absolute top-1/2 -translate-y-1/2 right-8 z-10 cursor-pointer">
        <Image className="w-3 h-4.5" src={IconNext} alt="Next image" />
      </button>
    </div>
  );
}