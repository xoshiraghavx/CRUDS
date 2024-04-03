import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
 const {data:session} = useSession();
 return (
 <Layout>
  <div className="text-blue-900 flex">
    Hello, {session?.user?.name}
    <img src={session?.user.image}/>
  </div>
 </Layout>
 );
}
