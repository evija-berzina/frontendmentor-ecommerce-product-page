import {AddToCartButton} from "./AddToCartButton";
import {QuantityCounter} from "./QuantityCounter";

type AddToCartProps = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  addToCart: () => void;
  cartQuantity: number;
};

export function AddToCart({quantity, setQuantity, addToCart, cartQuantity}: AddToCartProps) {
  return (
    <div className="flex flex-col gap-4">
      <QuantityCounter
        quantity={quantity} 
          setQuantity={setQuantity}
          addToCart={addToCart}
          cartQuantity={cartQuantity}
      />
      <AddToCartButton
        quantity={quantity} 
        setQuantity={setQuantity}
        addToCart={addToCart}
        cartQuantity={cartQuantity} />
    </div>
  )
}