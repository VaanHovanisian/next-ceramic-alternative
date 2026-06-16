import Link from "next/link";

export default function Home() {
  return (
    <h1>
      Hello, Next.js! <Link href={"/about"}>about</Link>
    </h1>
  );
}
