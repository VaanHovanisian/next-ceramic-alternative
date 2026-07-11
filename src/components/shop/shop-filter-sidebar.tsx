import React from "react";
import { cn } from "@/lib/utils";
import { Filter } from "../filter";
import { Catalog } from "../catalog";
import { productIdes } from "@/constants/products";
import { Container } from "../container";
import { ShopSort } from "./shop-sort";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "../ui/breadcrumb";
import { Sidebar } from "lucide-react";
import { ShopFilterSidebar } from "./shop-filter-sidebar";

interface Props {
  className?: string;
}

export const Shop: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <Container className={cn("", className)}>
      <Breadcrumb className="pt-5 pb-12.5">
        <BreadcrumbList className="flex">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          /
          <BreadcrumbItem>
            <BreadcrumbPage>Shop</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex">
        <Filter className="hidden md:grid" />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <ShopFilterSidebar>
              <Sidebar />
            </ShopFilterSidebar>
            <ShopSort className="ml-auto w-fit" />
          </div>
          <Catalog className="grow pt-0" items={productIdes} />
        </div>
      </div>
    </Container>
  );
};
