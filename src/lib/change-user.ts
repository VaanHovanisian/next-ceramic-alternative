/* eslint-disable @typescript-eslint/no-explicit-any */

import { toast } from "sonner";
import { authClient } from "./auth-client";
import { uploadImage } from "@/actions/upload-image";

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
      toast.success("success update name");
    },
    async avatar({ avatar }: { avatar: string | File }) {
      let img = typeof avatar === "string" ? avatar : undefined;
      if (avatar instanceof File) {
        img = await uploadImage(avatar);
      }
      await authClient.updateUser({ image: img });
      toast.success("success update avatar");
    },
    async email(val: string) {
      await authClient.updateUser({ email: val });
      toast.success("success update email");
    },
  };
  Object.keys(dirtyField).forEach((el: any) => userObj[el](data));
};
