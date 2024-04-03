import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
 const {data:session} = useSession();
 return (
 <Layout>
  <div className="text-blue-900 flex space-between">
    <h2>
        Hello, {session?.user?.name}
    </h2>
    <div className="flex bg-gray-300 text-black gap-1">
        <img src={session?.user.image} className="w-6 h-6"/>
        {session?.user?.name}
    </div>
  </div>
 </Layout>
 );
}
