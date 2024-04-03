import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function deleteProductPage(){
    const router = useRouter();
    const {id} = router.query;
    const [productInfo, setProductInfo] = useState();
    useEffect(()=>{
        if(!id){
            return;
        }
        axios.get('/api/products?id='+id).then(response=>{
            (response.data);
        })
    },[id])

    function goBack(){
        router.push('/products');
    }
    return(
        <Layout>
            <h1>Do you really want to delete product</h1>
            <button>Yes</button>
            <button onClick={goBack}>No</button>
        </Layout>
    )

}