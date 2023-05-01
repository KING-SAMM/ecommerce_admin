import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const {data: session} = useSession();

  // if (session) return;
  console.log({session})

  return (
    <Layout>
      <h1 className="text-4xl pl-2">Dashboard</h1>
      <div className="text-blue-900 flex justify-between">
        <h1>
          Hello, <b>{session?.user?.name}</b>
        </h1>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <Image
            src={session?.user?.image}
            alt="Profile picture"
            width={24}
            height={24}
          />
          <span className="px-2">
            {session?.user?.name}
          </span>
        </div>
      </div>
    </Layout>
  )
}
