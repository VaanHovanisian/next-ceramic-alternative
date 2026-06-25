"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Trash2, Plus, Minus, X } from "lucide-react";
import Link from "next/link";

const BasketCartItems = [
  {
    id: 1,
    title: "PORCELAIN DINNER PLATE (27CM)",
    price: 59,
    img: "/products/1.jpg",
    quantity: 2,
  },
  {
    id: 2,
    title: "OPHELIA MATTE NATURAL VASE",
    price: 168,
    img: "/products/2.jpg",
    quantity: 1,
  },
  {
    id: 3,
    title: "PORCELAIN DINNER PLATE",
    price: 70,
    img: "/products/3.jpg",
    quantity: 1,
  },
];

export default function BasketCartPage() {
  const [cartItems, setCartItems] = useState(BasketCartItems);

  const updateQuantity = (id: number, amount: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item,
      ),
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white text-[#3a3845]">
      <div className="text-sm text-gray-400 mb-2">
        Home / <span className="text-gray-600">Shopping Cart</span>
      </div>
      <h1 className="text-2xl font-medium mb-6">
        Cart ({cartItems.length} item)
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12 text-gray-500">Basket is empty:</div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-3/4 overflow-x-auto">
            <table className="w-full border-collapse text-left min-w-150">
              <thead></thead>
              <tbody>
                {cartItems.map((item) => (
  
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
