import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function deleteProductPage(){
    const router = useRouter
    return(
        <Layout>
            <h1>Do you really want to delete product</h1>
        </Layout>
    )

}