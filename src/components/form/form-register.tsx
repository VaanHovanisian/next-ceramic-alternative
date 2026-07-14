/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FormInput } from "./form-input";
import { Button } from "../ui/button";
import { FormProvider, useForm } from "react-hook-form";
import { authRegisterSchema, authRegisterSchemaType } from "@/constants/form-schema/auth.schema";

interface Props {
  className?: string;
}

export const FormRegister: React.FC<Props> = (props) => {
  const { className } = props;

  const onSubmit = async (data:authRegisterSchemaType) => {};
  const form = useForm<authRegisterSchemaType>({
    resolver: zedResolver(authRegisterSchema)
    name: " "
    email: " "
    password: " "
    
  });
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid gap-5", className)}
      >
        <FormInput name="name" label="Full Name" />
        <FormInput name="email" label="Email" type="email" />
        <FormInput name="password" label="Password" type="password" />
        <FormInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
        />
        <Button
          disabled={form.formState.isSubmitting}
          className="border border-primary w-full"
          variant={"outline"}
        >
          Register
        </Button>
      </form>
    </FormProvider>
  );
};
