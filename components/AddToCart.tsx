import {AddToCartButton} from "./AddToCartButton";
import {QuantityCounter} from "./QuantityCounter";

type AddToCartProps = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  addToCart: () => void;
};

export function AddToCart({quantity, setQuantity, addToCart}: AddToCartProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <QuantityCounter
        quantity={quantity} 
        setQuantity={setQuantity}
      />
      <AddToCartButton
        addToCart={addToCart}
      />
    </div>
  )
}