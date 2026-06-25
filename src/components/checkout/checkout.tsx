import React from "react";
import { cn } from "@/lib/utils";
import { Form, FormProvider } from "react-hook-form";
import { FormInput } from "../form/form-input";
import { Button } from "../ui/button";
import { FormCheckout } from "../form/form-checkout";
import { CheckoutTotal } from "./checkout-total";

interface Props {
  className?: string;
}

export const Checkout: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <FormCheckout />
      <CheckoutTotal />
    </div>
  );
};
