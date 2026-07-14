"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FormInput } from "./form-input";
import { Button } from "../ui/button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  authLoginSchema,
  authLoginSchemaType,
} from "@/constants/form-schema/auth.schema";

interface Props {
  className?: string;
}

export const FormLogin: React.FC<Props> = (props) => {
  const { className } = props;

  const form = useForm<authLoginSchemaType>({
    resolver: zodResolver(authLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: authLoginSchemaType) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid gap-5", className)}
      >
        <FormInput name="email" label="Email" type="email" />
        <FormInput name="password" label="Password" type="password" />
        <Button
          disabled={form.formState.isSubmitting}
          className="border border-primary w-full"
        >
          Login
        </Button>
      </form>
    </FormProvider>
  );
};
