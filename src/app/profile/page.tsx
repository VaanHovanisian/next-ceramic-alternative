import { Profile } from "@/components/profile";
<<<<<<< HEAD
import { getUser } from "@/lib/get-user";
import { redirect } from "next/navigation";

=======
<<<<<<< HEAD
<<<<<<< HEAD

export default function ProfilePage() {
  return <Profile />;
=======
import { getUser } from "@/lib/get-user";

import { redirect } from "next/navigation";

=======
import { getUser } from "@/lib/get-user";
import { redirect } from "next/navigation";

>>>>>>> 1a13dc5fe1c2a96960df9e3f69c63cdb4eb5e633
>>>>>>> 855627fb70e37f5429500e054767eff1d2ed6bf0
export default async function ProfilePage() {
  const user = await getUser();
  if (!user) {
    return redirect("/");
  }
  return <Profile user={user} />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> Narine
=======
>>>>>>> 1a13dc5fe1c2a96960df9e3f69c63cdb4eb5e633
>>>>>>> 855627fb70e37f5429500e054767eff1d2ed6bf0
}
