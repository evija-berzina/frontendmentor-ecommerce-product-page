import {AddToCartButton} from "./AddToCartButton";
import {QuantityCounter} from "./QuantityCounter";

type Product = {
  id: number;
  brand: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number | null;
  discount?: number | null;
  image: string;
};

type AddToCartProps = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  addToCart: (productId: number) => void;
  products: Product[];
};

export function AddToCart({quantity, setQuantity, addToCart, products}: AddToCartProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <QuantityCounter
        quantity={quantity} 
        setQuantity={setQuantity}
      />
      <AddToCartButton
        addToCart={addToCart}
        products={products}
      />
    </div>
  )
}