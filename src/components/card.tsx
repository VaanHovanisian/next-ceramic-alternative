/* eslint-disable @next/next/no-img-element */
"use client"; // Հարկավոր է useState/useEffect օգտագործելու համար

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Container } from "./container";
import { SkeletonCard } from "./skeletoncard";

interface Props {
  className?: string;
}

const PRODUCTS = [
  {
    id: 1,
    title: "Small Ecru Ceramic Compote",
    price: "$49.00",
    img: "/menu/1.png",
  },
  {
    id: 2,
    title: "Warrick White Vase 14",
    price: "$49.00",
    img: "/menu/2.png",
  },
  {
    id: 3,
    title: "Porcelain Dinner Plate",
    price: "$49.00",
    img: "/menu/3.png",
  },
  {
    id: 4,
    title: "Warrick White Vase 20",
    price: "$49.00",
    img: "/menu/4.png",
  },
  {
    id: 5,
    title: "Rounded Dual Handled Vase",
    price: "$49.00",
    img: "/menu/5.png",
  },
  {
    id: 6,
    title: "Marin White Dinner Plate",
    price: "$49.00",
    img: "/menu/6.png",
  },
  {
    id: 7,
    title: "Tall Cream Ceramic Vase",
    price: "$49.00",
    img: "/menu/7.png",
  },
  {
    id: 8,
    title: "Luana Bowl",
    price: "$49.00",
    img: "/menu/8.png",
  },
];

export const Card: React.FC<Props> = (props) => {
  const { className } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("py-10", className)}>
      <Container>
        <h2 className="text-center text-2xl md:text-[30px] leading-[120%] uppercase text-[#3a3845] font-semibold mb-8 md:my-10">
          Best sellers
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {loading && (
            <>
              {[...Array(8)].map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </>
          )}

          {!loading &&
            PRODUCTS.map((product) => (
              <li
                key={product.id}
                className="w-full max-w-70 min-h-120 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="w-full h-64 overflow-hidden rounded-xl">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="mt-4 flex flex-col gap-1 text-center text-base font-medium text-[#3a3845]">
                    {product.title}
                    <span className="text-lg font-semibold mt-1">
                      {product.price}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 text-center line-clamp-3">
                    Lorem ipsum dolor sit amet conse bolli tetur adipiscing
                    elit.
                  </p>
                </div>

                <Button className="w-full mt-5">Add to cart</Button>
              </li>
            ))}
        </ul>
      </Container>
    </div>
  );
};
