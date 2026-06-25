"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FormInput } from "./form-input";
import { Button } from "../ui/button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formCheckoutSchema } from "@/constants/form-schema/checkout.schema";
import { formCheckoutSchemaType } from "@/constants/form-schema/contact.schema";
import { toast } from "sonner";

interface Props {
  className?: string;
}

export const FormCheckout: React.FC<Props> = (props) => {
  const { className } = props;
  const form = useForm({
    resolver: zodResolver(formCheckoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
  });

  const onSubmit = async (data: formCheckoutSchemaType) => {
    try {
      console.log(data);
      toast.success("succes order");
    } catch {
      console.error();
      toast.error("failed order");
    } finally {
      form.reset();
    }
  };

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
        <FormInput label="Street address *" name="addres" type="text" />
        <FormInput label="Order notes" name="message" type="text" />
        <Button>Send Message</Button>
      </form>
    </FormProvider>
  );
};
