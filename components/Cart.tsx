import Image from "next/image";
import ProductImage from "../public/image-product-1-thumbnail.jpg";
import IconDelete from "../public/icon-delete.svg";

type AddToCartProps = {
  cartQuantity: number;
};

export function Cart({cartQuantity}: AddToCartProps) {
  return (
    <div className="flex flex-col items-stretch absolute top-30 left-4 right-4 h-90 rounded-xl bg-[hsl(var(--white))] z-1000 lg: lg:h-60 lg:w-80 lg:right-12 lg:left-auto lg:shadow-lg/20">
      <h1 className="text-[hsl(var(--black))] font-bold py-6 px-4 border-b border-[hsl(var(--grayish-blue))]">Cart</h1>
      {cartQuantity === 0
        ? (
          <p className="text-[hsl(var(--dark-grayish-blue))] flex flex-col justify-center items-center h-full">Your cart is empty.</p>
        )
        : (
          <div className="flex flex-row justify-center items-center gap-4 h-full">
          <Image src={ProductImage} alt="Empty cart" loading="eager" className="w-20 h-20 p-4" />
          <div className="flex flex-col justify-center items-start gap-1">
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x 3 <span className="font-bold text-[hsl(var(--black))]">$375.00</span></p>
          </div>
          <Image src={IconDelete} alt="Product" loading="eager" className="w-12 p-4" />
        </div>
        )}
    </div>
  );
}