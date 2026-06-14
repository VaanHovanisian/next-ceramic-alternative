/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const Card: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <div className={cn("", className)}>
      <Container>
        <h2 className="text-center text-[30px] leading-[120%] uppercase text-[#3a3845] font-semibold my-10">
          Best sellers
        </h2>
        <ul className="grid grid-cols-4 gap-6 justify-items-center">
          <li className="w-63.75 h-132.5 bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
            <img
              src="/menu/1.png"
              alt="Product"
              className="w-full h-70 object-cover rounded-xl"
            />
            <h3 className="mt-4 flex flex-col gap-2 text-center">
              Small Ecru Ceramic Compote
              <span className="text-lg font-semibold">$49.00</span>
            </h3>
            <p className="mt-3 text-sm text-gray-500 text-center flex-1">
              Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.
            </p>
            <Button className="w-full mt-4">Add to cart</Button>
          </li>
          <li className="w-63.75 h-132.5 bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
            <img
              src="/menu/2.png"
              alt="Product"
              className="w-full h-70 object-cover rounded-xl"
            />
            <h3 className="mt-4 flex flex-col gap-2 text-center">
              Warrick White Vase 14
              <span className="text-lg font-semibold">$49.00</span>
            </h3>
            <p className="mt-3 text-sm text-gray-500 text-center flex-1">
              Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.
            </p>
            <Button className="w-full mt-4">Add to cart</Button>
          </li>
          <li className="w-63.75 h-132.5 bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
            <img
              src="/menu/3.png"
              alt="Product"
              className="w-full h-70 object-cover rounded-xl"
            />
            <h3 className="mt-4 flex flex-col gap-2 text-center">
              Porcelain Dinner Plate
              <span className="text-lg font-semibold">$49.00</span>
            </h3>
            <p className="mt-3 text-sm text-gray-500 text-center flex-1">
              Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.
            </p>
            <Button className="w-full mt-4">Add to cart</Button>
          </li>
          <li className="w-63.75 h-132.5 bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
            <img
              src="/menu/4.png"
              alt="Product"
              className="w-full h-70 object-cover rounded-xl"
            />
            <h3 className="mt-4 flex flex-col gap-2 text-center">
              Warrick White Vase 20
              <span className="text-lg font-semibold">$49.00</span>
            </h3>
            <p className="mt-3 text-sm text-gray-500 text-center flex-1">
              Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.
            </p>
            <Button className="w-full mt-4">Add to cart</Button>
          </li>
          <li className="w-63.75 h-132.5 bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
            <img
              src="/menu/5.png"
              alt="Product"
              className="w-full h-70 object-cover rounded-xl"
            />
            <h3 className="mt-4 flex flex-col gap-2 text-center">
              Rounded Dual Handled Vase
              <span className="text-lg font-semibold">$49.00</span>
            </h3>
            <p className="mt-3 text-sm text-gray-500 text-center flex-1">
              Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.
            </p>
            <Button className="w-full mt-4">Add to cart</Button>
          </li>
          <li className="w-63.75 h-132.5 bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
            <img
              src="/menu/6.png"
              alt="Product"
              className="w-full h-70 object-cover rounded-xl"
            />
            <h3 className="mt-4 flex flex-col gap-2 text-center">
              Marin White Dinner Plate
              <span className="text-lg font-semibold">$49.00</span>
            </h3>
            <p className="mt-3 text-sm text-gray-500 text-center flex-1">
              Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.
            </p>
            <Button className="w-full mt-4">Add to cart</Button>
          </li>
          <li className="w-63.75 h-132.5 bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
            <img
              src="/menu/7.png"
              alt="Product"
              className="w-full h-70 object-cover rounded-xl"
            />
            <h3 className="mt-4 flex flex-col gap-2 text-center">
              Tall Cream Ceramic Vase
              <span className="text-lg font-semibold">$49.00</span>
            </h3>
            <p className="mt-3 text-sm text-gray-500 text-center flex-1">
              Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.
            </p>
            <Button className="w-full mt-4">Add to cart</Button>
          </li>
          <li className="w-63.75 h-132.5 bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
            <img
              src="/menu/8.png"
              alt="Product"
              className="w-full h-70 object-cover rounded-xl"
            />
            <h3 className="mt-4 flex flex-col gap-2 text-center">
              Luana Bowl
              <span className="text-lg font-semibold">$49.00</span>
            </h3>
            <p className="mt-3 text-sm text-gray-500 text-center flex-1">
              Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.
            </p>
            <Button className="w-full mt-4">Add to cart</Button>
          </li>
        </ul>
      </Container>
    </div>
  );
};
