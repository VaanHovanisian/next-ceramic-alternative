import React from "react";
import { cn } from "@/lib/utils";
import { Form, FormProvider } from "react-hook-form";
import { FormInput } from "./form/form-input";
import { Button } from "./ui/button";

interface Props {
  className?: string;
}

export const Checkout: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <div className="flex items-start gap-5">
        <FormInput label="First Name *" name="name" type="text" />
        <FormInput label="Last Name *" name="lastName" type="text" />
      </div>
      <div className="flex items-start gap-5">
        <FormInput label="Email *" name="email" type="email" />
        <FormInput label="Phone" name="phone" type="tel" />
      </div>
      <div className="flex items-start gap-5">
        <FormInput label="Street address *" name="company" type="text" />
        <FormInput
          label="Apartment, suite, unit etc. (optional)"
          name="company"
          type="text"
        />
      </div>

      <Button>Send Message</Button>
    </div>
  );
};
