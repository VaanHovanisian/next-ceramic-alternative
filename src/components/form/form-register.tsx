"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FormInput } from "./form-input";
import { Button } from "../ui/button";
import { FormProvider, useForm } from "react-hook-form";
import {
  authRegisterSchema,
  AuthRegisterSchemaType,
} from "@/constants/form-schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  className?: string;
}

export const FormRegister: React.FC<Props> = (props) => {
  const { className } = props;

  const form = useForm<AuthRegisterSchemaType>({
    resolver: zodResolver(authRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: AuthRegisterSchemaType) => {
    console.log(data);
  };

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
        >
          Register
        </Button>
      </form>
    </FormProvider>
  );
};
