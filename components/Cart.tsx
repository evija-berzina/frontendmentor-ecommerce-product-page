import Image from "next/image";
import ProductImage from "../public/image-product-1-thumbnail.jpg";
import IconDelete from "../public/icon-delete.svg";

type AddToCartProps = {
  cartQuantity: number;
};

const product = {
  name: "Fall Limited Edition Sneakers",
  price: 125.00,
  picture: ProductImage,
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
            <div className="rounded-lg overflow-hidden">
              <Image src={product.picture} alt="Empty cart" loading="eager" className="w-14 h-14" />
            </div>
            <div className="flex flex-col justify-center items-start gap-1">
              <p>{product.name}</p>
              <p>${product.price.toFixed(2)}  x {cartQuantity} <span className="font-bold text-[hsl(var(--black))]">${(product.price * cartQuantity).toFixed(2)}</span></p>
            </div>
            <Image src={IconDelete} alt="Product" loading="eager" className="w-4" />
          </div>
        )}
    </div>
  );
}