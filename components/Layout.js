import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";

export default function Layout({children}) {
  const { data: session } = useSession();

  if (!session) {
    return  (
      // Login page
      <div className='bg-blue-900 w-screen h-screen flex items-center'>
        <div className="text-center w-full">
          <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
        </div>
      </div>
    )
  }

  // Else you are in!
  return (
    // Logout page
    <div className='bg-blue-900 w-screen min-h-screen flex'>
      <Nav />
        <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">{children}</div>
        {/* <button onClick={() => signOut('google')} className="bg-white p-2 px-4 rounded-lg">Logout</button> */}
      </div>
  )
}
