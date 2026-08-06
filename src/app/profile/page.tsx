import { Profile } from "@/components/profile";
import { getUser } from "@/lib/get-user";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const user = await getUser();
  if (!user) {
    return redirect("/");
  }
  return <Profile user={user} />;
}
