import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function EditProductPage(){
    const router = useRouter();
    const {id}= router.query;
    useE
    return(
        <Layout>
            edit product page here
        </Layout>
    )
}