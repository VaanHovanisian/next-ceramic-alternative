/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import { authClient } from "./auth-client";

type DirtyProps = Partial<
  Readonly<{
    name?: boolean | undefined;
    email?: boolean | undefined;
    avatar?: boolean | undefined;
  }>
>;

export const changeUser = async (data: any, dirtyField: DirtyProps) => {
  const userObj = {
    async name(data: any) {
      await authClient.updateUser({ name: data.name });
      toast.success("Name updated successfully");
    },
    async email(data: any) {
      await authClient.updateUser({ email: data.email });
      toast.success("Email updated successfully");
    },
    async avatar(data: any) {
      await authClient.updateUser({ avatar: data.avatar });
      toast.success("Avatar updated successfully");
    },
  };
  Object.keys(dirtyField).forEach((el: string) => userObj[el](data));
};
