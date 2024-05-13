import { addUser, fetchUsers } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const users = await fetchUsers();
  console.log(users);
  return (
    <main className="flex flex-col items-center gap-4 w-full">
      Hello world!
      {users?.map((user, i) => (
        <Link key={i} className="p-2 bg-blue-500" href={`/${user._id}`}>
          {user.username}
        </Link>
      ))}
      <form action={addUser}>
        <h3>add user</h3>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
