import {Header} from "../components/Header";
import {ProductImageCarousel} from "../components/ProductImageCarousel";
import {ProductDetails} from "../components/ProductDetails";
import {AddToCart} from "../components/AddToCart";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ProductImageCarousel />
        <ProductDetails />
        <AddToCart />
      </main>
    </>
  );
}
