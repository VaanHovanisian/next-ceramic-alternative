"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FormInput } from "./form-input";
import { Button } from "../ui/button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormCheckoutSchema, FormCheckoutSchemaType } from "@/constants/form-schema/checkoutschema";
import { toast } from "sonner";

interface Props {
  className?: string;
}

export const FormCheckout: React.FC<Props> = (props) => {
  const { className } = props;
  const form = useForm({
    resolver: zodResolver(FormCheckoutSchema),
    defaultValues: {
      firstName: " ",
      lastName: " ",
      email: " ",
      phone: " ",
      address: " ",
      message: " ",
    },
  });

const onSubmit = async (data:FormCheckoutSchemaType) =>{
  try {
    console.log(data);
    toast.success()
    
    
  } catch (error) {
    console.log(error);
    
  }finally{
    
  }
}

  return (
    <FormProvider {...form}>
      <form className={cn("", className)}>
        <div className="flex items-start gap-5">
          <FormInput label="First Name *" name="firstName" type="text" />
          <FormInput label="Last Name *" name="lastName" type="text" />
        </div>
        <div className="flex items-start gap-5">
          <FormInput label="Email *" name="email" type="email" />
          <FormInput label="Phone" name="phone" type="tel" />
        </div>

        <FormInput label="Street address *" name="company" type="text" />
        <FormInput
          label="Apartment, suite, unit etc. (optional)"
          name="company"
          type="text"
        />

        <Button>Send Message</Button>
      </form>
    </FormProvider>
  );
};
