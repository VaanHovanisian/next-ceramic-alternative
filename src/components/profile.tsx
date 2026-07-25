"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Button } from "./ui/button";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";

interface Props {
  className?: string;
}
export const Profile: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <Container className={cn("", className)}>
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
    </Container>
  );
};
