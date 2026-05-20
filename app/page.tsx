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
      <main>
        <ProductImageCarousel />
        <ProductDetails />
        <AddToCart 
          quantity={quantity} 
          setQuantity={setQuantity}
          addToCart={addToCart}
          cartQuantity={cartQuantity}
        />
      </main>
    </>
  );
}
