import { Suspense } from "react";
import { Profile } from "@/components/profile";
import { getUser } from "@/lib/get-user";
import { redirect } from "next/navigation";

async function ProfileContent() {
  const user = await getUser();

  if (!user) {
    redirect("/");
  }

  return <Profile user={user} />;
}

export default function ProfilePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileContent />
    </Suspense>
  );
}
