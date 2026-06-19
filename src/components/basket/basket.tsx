import React from "react";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import { BasketCard } from "./basket-card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useBasket } from "@/hooks/use-basket";
import { useOrder } from "@/hooks/use-order";
import { toast } from "sonner";
import { Empty } from "../empty";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Basket: React.FC<Props> = (props) => {
  const { className, children } = props;
  const [open, setOpen] = React.useState(false);
  const [isPay, setIsPay] = React.useState(false);
  const { data, totalAmount, isLoading, error } = useBasket();
  const { createProduct, data: orderData } = useOrder();

  const tax = totalAmount * 0.05;

  const addOrder = async () => {
    try {
      await createProduct(data);
      setIsPay(true);
      toast.success("succcess order");
    } catch (error) {
      console.error(error);
      toast.error("failed order");
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex gap-2.5 cursor-pointer">
        {children}
      </SheetTrigger>

      <SheetContent className={cn("p-7.5", className)}>
        <SheetTitle className="font-bold text-[24px]">Корзина</SheetTitle>
        {!isLoading && !error && data.length === 0 ? (
          <Empty
            imgUrl={isPay ? "/order.png" : "/empty.png"}
            title={isPay ? "Заказ оформлен!" : "Корзина пустая"}
            text={
              isPay
                ? `Ваш заказ #${orderData.length} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            onClick={() => setOpen(false)}
          />
        ) : (
          <>
            <ul className="overflow-auto">
              {data.map((el) => (
                <li key={el.id}>
                  <BasketCard product={el} />
                </li>
              ))}
            </ul>
            <SheetFooter className="grid gap-5 font-semibold">
              <div className="flex items-center gap-1">
                <span>Итого:</span>
                <span className="flex-1 border border-dotted border-[#dfdfdf]"></span>
                <span className="font-semibold">{totalAmount} руб.</span>
              </div>

              <div className="flex items-center gap-1">
                <span>Налог 5%:</span>
                <span className="flex-1 border border-dotted border-[#dfdfdf]"></span>
                <span className="font-semibold">{tax.toFixed(2)} руб.</span>
              </div>
              <Button
                onClick={addOrder}
                className="py-4.5 rounded-[18px] px-7.5 font-semibold"
              >
                <span className="flex-1">Оформить заказ</span> <ArrowRight />
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
