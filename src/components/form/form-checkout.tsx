"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FormInput } from "./form-input";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  formCheckoutSchema,
  FormCheckoutSchemaType,
} from "@/constants/form-schema/checkout.schema";
import { toast } from "sonner";
import { FormTextarea } from "./form-textarea";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

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

  const onSubmit = async (data: FormCheckoutSchemaType) => {
    try {
      console.log(data);
      toast.success("success order");
    } catch (error) {
      console.error(error);
      toast.error("failed order");
    } finally {
      form.reset();
    }
  };

  return (
    <div className={cn("", className)}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={cn("mb-10")}>
          <div className="flex items-start gap-5">
            <FormInput label="First Name *" name="firstName" type="text" />
            <FormInput label="Last Name *" name="lastName" type="text" />
          </div>
          <div className="flex items-start gap-5">
            <FormInput label="Email *" name="email" type="email" />
            <FormInput label="Phone" name="phone" type="tel" />
          </div>
          <FormInput label="Street address *" name="address" type="text" />
          <FormTextarea label="Order notes" name="message" />
        </form>
      </FormProvider>
      <Link
        href={"/basket"}
        className="flex items-center gap-2 font-semibold text-[12px] leading-[150%] tracking-[0.08em] text-primary uppercase"
      >
        <ChevronLeft size={20} /> return to cart
      </Link>
    </div>
  );
};
