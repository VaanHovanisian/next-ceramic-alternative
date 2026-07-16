import React from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { FormRegister } from "./form/form-register";
import { FormLogin } from "./form/form-login";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const AuthModal: React.FC<Props> = (props) => {
  const { className, children } = props;
  const [toggle, setToggle] = React.useState(false);
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className={cn("", className)}>
        {!toggle ? <FormRegister /> : <FormLogin />}
        <Button
          variant={"outline"}
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "register" : "login"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
