"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { FormInput } from "./form-input";
import { FormTextarea } from "./form-textarea";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  contactFormSchemaType,
} from "@/constants/form-schema/contact.schema";
import { Button } from "../ui/button";
import { toast } from "sonner";

interface Props {
  className?: string;
}

export const FormContact: React.FC<Props> = (props) => {
  const { className } = props;

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: contactFormSchemaType) => {
    try {
      console.log(data);
      toast.success("Success send");
    } catch (error) {
      console.log(error);
      toast.error("failed send");
    } finally {
      form.reset();
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid max-w-205 mx-auto gap-5 mb-10", className)}
      >
        <div className="flex gap-5 items-start">
          <FormInput label="Name" name="name" type="text" />
          <FormInput label="Email" name="email" type="email" />
        </div>
        <div className="flex gap-5 items-start">
          <FormInput label="Phone" name="phone" type="tel" />
          <FormInput label="Company" name="company" type="text" />
        </div>
        <FormTextarea label="Message" name="message" />
        <Button>Send message</Button>
      </form>
    </FormProvider>
  );
};
