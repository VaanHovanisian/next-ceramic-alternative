import React from "react";
import { cn } from "@/lib/utils";
import { prisma } from "@/prisma/prisma-client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AdminCategory } from "./admin-category";
import { Category } from "@prisma/client";

interface Props {
  className?: string;
}

export const AdminShop: React.FC<Props> = async (props) => {
  const { className } = props;
  const [category, color, priceRange, product] = await Promise.all([
    prisma.category.findMany(),
    prisma.color.findMany(),
    prisma.priceRange.findMany(),
    prisma.product.findMany(),
  ]);
  return (
    <div className={cn("", className)}>
      <Tabs>
        <TabsList>
          <TabsTrigger value="category">category</TabsTrigger>
          <TabsTrigger value="color">color</TabsTrigger>
          <TabsTrigger value="priceRange">priceRange</TabsTrigger>
          <TabsTrigger value="product">product</TabsTrigger>
        </TabsList>
        <TabsContent value="category">
          <AdminCategory data={category} />
        </TabsContent>
        <TabsContent value="color"></TabsContent>
        <TabsContent value="priceRange"></TabsContent>
        <TabsContent value="product"></TabsContent>
      </Tabs>
    </div>
  );
};
