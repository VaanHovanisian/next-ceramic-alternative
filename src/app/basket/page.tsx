"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Trash2, Plus, Minus, X } from "lucide-react";

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
              <thead>
                <tr className="bg-[#1a1a1a] text-white text-xs tracking-wider uppercase">
                  <th className="p-3 text-center w-12">
                    <Trash2 className="w-4 h-4 mx-auto cursor-pointer" />
                  </th>
                  <th className="p-3 uppercase text-xs font-semibold">Photo</th>
                  <th className="p-3 uppercase text-xs font-semibold">
                    Product
                  </th>
                  <th className="p-3 uppercase text-xs font-semibold">Price</th>
                  <th className="p-3 uppercase text-xs font-semibold text-center">
                    Quantity
                  </th>
                  <th className="p-3 uppercase text-xs font-semibold">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 align-middle"
                  >
                    <td className="p-4 text-center">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-600 transition"
                      >
                        <X className="w-4 h-4 mx-auto" />
                      </button>
                    </td>

                    <td className="p-4">
                      <div className="w-16 h-20 bg-[#f7f7f7] rounded overflow-hidden flex items-center justify-center">
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={64}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </td>

                    <td className="p-4 font-medium text-xs tracking-wide max-w-50">
                      {item.title}
                    </td>

                    <td className="p-4 text-sm font-medium text-gray-600">
                      ${item.price}
                    </td>

                    <td className="p-4">
                      <div className="flex items-center justify-center border border-gray-300 rounded w-24 mx-auto h-8 bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 text-gray-500 hover:text-black"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="flex-1 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 text-gray-500 hover:text-black"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </td>

                    <td className="p-4 text-sm font-semibold text-gray-700">
                      ${item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full lg:w-1/4 bg-[#fcfcfc] border border-gray-100 p-6 rounded-sm shadow-sm self-end lg:self-start">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
              <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
                Cart totals
              </span>
              <span className="text-lg font-semibold">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-[#1a1a1a] text-white text-xs uppercase tracking-widest py-3 font-medium hover:bg-black transition-colors rounded-none">
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
