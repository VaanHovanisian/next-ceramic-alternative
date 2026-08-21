import { redirect } from "next/navigation";
import { getUser } from "@/lib/get-user";
import { Profile } from "@/components/profile";

export default async function ProfilePage() {
  const user = await getUser();
  if (!user) {
    return redirect("/");
  }
  return <Profile user={user} />;
}
