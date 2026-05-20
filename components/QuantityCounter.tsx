"use client";
import { useState } from "react";
import Image from "next/image";
import IconMinus from "../public/icon-minus.svg";
import IconPlus from "../public/icon-plus.svg";


export function QuantityCounter() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex items-center justify-between bg-[hsl(var(--light-grayish-blue))] px-4 py-4 rounded-lg">
      <button className="cursor-pointer" onClick={() => setQuantity( prev => Math.max(0, prev-1))}>
        <Image src={IconMinus} alt="Minus icon" width={12} height={4} />
      </button>
      <span className="text-[hsl(var(--black))] font-bold">{quantity}</span>
      <button className="cursor-pointer" onClick={() => setQuantity(prev => prev + 1)}>
        <Image src={IconPlus} alt="Plus icon" width={12} height={4} />
      </button>
    </div>
  );
}