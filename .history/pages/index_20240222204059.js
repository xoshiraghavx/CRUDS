import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
 const {data:session} = useSession();
 if(!session) return
 return (
 <Layout>
  <div>
    Hello, {session?.user?.name}
  </div>
 </Layout>
 );
}
