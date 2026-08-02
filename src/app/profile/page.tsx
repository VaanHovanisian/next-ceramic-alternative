import { Profile } from "@/components/profile";
<<<<<<< HEAD

export default function ProfilePage() {
  return <Profile />;
=======
import { getUser } from "@/lib/get-user";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const user = await getUser();
  if (!user) {
    return redirect("/");
  }
  return <Profile user={user} />;
>>>>>>> main
}
