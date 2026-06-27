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
}
