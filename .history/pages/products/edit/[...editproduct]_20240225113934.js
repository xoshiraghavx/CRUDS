import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function EditProductPage(){
    const router = useRouter();
    const id = router
    return(
        <Layout>
            edit product page here
        </Layout>
    )
}