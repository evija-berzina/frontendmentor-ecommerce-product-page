import {AddToCartButton} from "./AddToCartButton";
import {QuantityCounter} from "./QuantityCounter";

export function AddToCart() {
  return (
    <div className="flex flex-col gap-4">
      <QuantityCounter />
      <AddToCartButton />
    </div>
  )
}