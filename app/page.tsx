"use client";
import { useState } from "react";
import {Header} from "../components/Header";
import {ProductImageCarousel} from "../components/ProductImageCarousel";
import {ProductDetails} from "../components/ProductDetails";
import {AddToCart} from "../components/AddToCart";

export default function Home() {
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [showCart, setShowCart] = useState(false);

  function addToCart() {
    setCartQuantity(quantity + cartQuantity);
  }

  return (
    <div>
      <Header
        cartQuantity={cartQuantity}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      <main className="lg:grid lg:grid-cols-[auto_1fr] lg:gap-28 lg:max-w-280 lg:mx-auto">
        <div className="">
          <ProductImageCarousel />
        </div>
        <div className="lg:flex lg:flex-col lg:justify-center">
          <ProductDetails />
          <AddToCart 
            quantity={quantity} 
            setQuantity={setQuantity}
            addToCart={addToCart}
          />
        </div>
      </main>
    </div>
  );
}
