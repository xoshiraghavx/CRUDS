import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function deleteProductPage(){
    const router = useRouter();
    const {id} = router.query;

    function goBack(){
        router.push('/products');
    }
    return(
        <Layout>
            <h1>Do you really want to delete product</h1>
            <button>Yes</button>
            <button onClick={}>No</button>
        </Layout>
    )

}