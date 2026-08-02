"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Button } from "./ui/button";
import { deleteUser, signOut } from "@/lib/auth-client";
import { toast } from "sonner";
import { FormProfile } from "./form/form-profile";
import { User } from "better-auth";

interface Props {
  className?: string;
  user: User;
}
export const Profile: React.FC<Props> = (props) => {
  const { className, user } = props;
  return (
    <Container className={cn("", className)}>
      <FormProfile user={user} />

      <div className="flex justify-between">
        <Button
          onClick={() => {
            signOut({
              fetchOptions: {
                onSuccess() {
                  window.location.href = "/";
                },
                onError(error) {
                  console.log(error);
                  toast.error("filed logout");
                },
              },
            });
          }}
        >
          Logout
        </Button>
        <Button
          variant={"destructive"}
          onClick={() => {
            deleteUser({
              fetchOptions: {
                onSuccess() {
                  toast.success("Go Gmail to delete user");
                },
                onError(error) {
                  console.log(error);
                  toast.error("filed delete user");
                },
              },
            });
          }}
        >
          delete account
        </Button>
      </div>
    </Container>
  );
};
