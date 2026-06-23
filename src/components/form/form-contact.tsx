"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FormInput } from "./form-input";
import { FormTextarea } from "./form-textarea";
import { FormProvider, useForm } from "react-hook-form";

interface Props {
  className?: string;
}

export const FormContact: React.FC<Props> = (props) => {
  const { className } = props;

  const form = useForm();

  return (
    <FormProvider {...form}>
      <form className={cn("", className)}>
        <div className="flex">
          <FormInput label="Name" name="name" type="text" />
          <FormInput label="Email" name="email" type="email" />
        </div>
        <div className="flex">
          <FormInput label="Phone" name="phone" type="tel" />
          <FormInput label="Company" name="company" type="text" />
        </div>
        <FormTextarea label="Message" name="message" />
      </form>
    </FormProvider>
  );
};
