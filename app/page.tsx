import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      Hello world!
      <Link className="p-2 bg-blue-500" href="/1">
        1
      </Link>
      <Link className="p-2 bg-blue-500" href="/2">
        2
      </Link>
    </main>
  );
}
