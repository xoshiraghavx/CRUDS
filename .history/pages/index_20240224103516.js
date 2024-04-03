import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
 const {data:session} = useSession();
 return (
 <Layout>
  <div className="text-blue-900 flex">
    <h2>
        Hello, {session?.user?.name}
    </h2>
    <div className="flex bg-gray-300">
        <img src={session?.user.image} className="w-6 h-6"/>
    </div>
  </div>
 </Layout>
 );
}
