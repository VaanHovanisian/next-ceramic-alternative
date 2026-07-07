/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { SkeletonCard } from "./skeleton-card";
import { Card } from "./card";

interface Props {
  className?: string;
  items: any[];
  title?: string;
}

export const Catalog: React.FC<Props> = (props) => {
  const { className, items, title } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("py-10 text-center", className)}>
      <Container>
        {title && (
          <h2 className="text-2xl font-garamond md:text-[30px] leading-[120%] uppercase text-[#3a3845] font-semibold mb-8 md:my-10">
            {title}
          </h2>
        )}

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {loading && (
            <>
              {[...Array(8)].map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </>
          )}

          {!loading &&
            items.map((product) => (
              <li
                key={product.id}
                className="w-full text-center max-w-70 min-h-120 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col justify-between"
              >
                <Card product={product} />
              </li>
            ))}
        </ul>
      </Container>
    </div>
  );
};
