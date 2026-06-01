"use client";
import { useState } from "react";
import {Header} from "../components/Header";
import {ProductImageCarousel} from "../components/ProductImageCarousel";
import {ProductDetails} from "../components/ProductDetails";
import {AddToCart} from "../components/AddToCart";

export default function Home() {
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  function addToCart() {
    setCartQuantity(quantity);
  }

  return (
    <>
      <Header
        quantity={quantity} 
        setQuantity={setQuantity}
        addToCart={addToCart}
        cartQuantity={cartQuantity}
      />
      <main className="md:grid md:grid-cols-2 md:gap-28 md:px-12 md:max-w-300 md:mx-auto">
        <div className="">
          <ProductImageCarousel />
        </div>
        <div className="md:flex md:flex-col md:justify-center">
          <ProductDetails />
          <AddToCart 
            quantity={quantity} 
            setQuantity={setQuantity}
            addToCart={addToCart}
            cartQuantity={cartQuantity}
          />
        </div>
      </main>
    </>
  );
}
