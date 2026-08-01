import React from "react";
import { cn } from "@/lib/utils";
import { FormInput } from "./form-input";
import { Button } from "../ui/button";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  profileFormSchema,
  ProfileFormSchemaType,
} from "@/constants/form-schema/profile.schema";
import { FormInputImage } from "./form-input-image";

interface Props {
  className?: string;
}

export const FormProfile: React.FC<Props> = (props) => {
  const { className } = props;
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
      email: "",
      avatar: "",
    },
  });

  const onSubmit = async (data: ProfileFormSchemaType) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed Update" + error);
    }
  };
  return;
  <FormProvider {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className={cn("", className)}>
      <FormInputImage name="avatar" label="avatar" />
      <FormInput name="name" label="name" />
      <FormInput name="email" label="email" />
      <Button>Save</Button>
    </form>
    ;
  </FormProvider>;
};
