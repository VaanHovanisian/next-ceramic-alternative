import { Profile } from "@/components/profile";
<<<<<<< HEAD
import { getUser } from "@/lib/get-user";
import { redirect } from "next/navigation";

=======
<<<<<<< HEAD

export default function ProfilePage() {
  return <Profile />;
=======
import { getUser } from "@/lib/get-user";

import { redirect } from "next/navigation";

>>>>>>> Tagavor
export default async function ProfilePage() {
  const user = await getUser();
  if (!user) {
    return redirect("/");
  }
  return <Profile user={user} />;
<<<<<<< HEAD
=======
>>>>>>> Narine
>>>>>>> Tagavor
}
