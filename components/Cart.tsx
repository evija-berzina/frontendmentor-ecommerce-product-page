import Image from "next/image";
import ProductImage from "../public/image-product-1-thumbnail.jpg";
import IconDelete from "../public/icon-delete.svg";

type AddToCartProps = {
  cartQuantity: number;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const product = {
  name: "Fall Limited Edition Sneakers",
  price: 125.00,
  picture: ProductImage,
};

export function Cart({cartQuantity, setCartQuantity}: AddToCartProps) {

  function deleteCartItem() {
    setCartQuantity(0);
  }

  return (
    <div className="flex flex-col absolute top-30 left-4 right-4 rounded-xl bg-[hsl(var(--white))] z-39 lg:right-12 lg:left-auto lg:shadow-lg/20">
      <h1 className="text-[hsl(var(--black))] font-bold py-6 px-4 border-b border-[hsl(var(--grayish-blue))]">Cart</h1>
      {cartQuantity === 0
        ? (
          <div className="flex flex-row justify-center items-center p-4 min-h-40 min-w-[348.75px]">
            <p className="text-[hsl(var(--dark-grayish-blue))] flex flex-col justify-center items-center h-full">Your cart is empty.</p>
          </div>
        )
        : (
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-row justify-center items-center gap-4">
              <div className="rounded-lg overflow-hidden">
                <Image src={product.picture} alt="Empty cart" loading="eager" className="w-14 h-14" />
              </div>
              <div className="flex flex-col justify-center items-start gap-1">
                <p>{product.name}</p>
                <p>${product.price.toFixed(2)}  x {cartQuantity} <span className="font-bold text-[hsl(var(--black))]">${(product.price * cartQuantity).toFixed(2)}</span></p>
              </div>
              <button type="button" onClick={deleteCartItem}>
                <Image src={IconDelete} alt="Delete icon" loading="eager" className="w-4 cursor-pointer" />
              </button>
            </div>
            <button type="button" className="bg-[hsl(var(--orange))] text-[hsl(var(--black))] font-bold py-4 rounded-lg cursor-pointer lg:flex-2 hover:bg-[hsl(var(--orange)/0.6)] transition-colors duration-200">
              Checkout
            </button>
          </div>
        )}
    </div>
  );
}