import { Profile } from "@/components/profile";
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
export default async function ProfilePage() {
  const user = await getUser();
  if (!user) {
    return redirect("/");
  }
  return <Profile user={user} />;
<<<<<<< HEAD
>>>>>>> Narine
=======
>>>>>>> 1a13dc5fe1c2a96960df9e3f69c63cdb4eb5e633
}
