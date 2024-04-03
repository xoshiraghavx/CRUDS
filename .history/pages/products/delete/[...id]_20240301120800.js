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
            setProductInfo(response.data);
        })
    },[id])

    function goBack(){
        router.push('/products');
    }
    function deleteProduct(){
        axios.get('/api/products?id='+id)
    }
    return(
        <Layout>
            <h1 className="text-center">Do you really want to delete "{productInfo?.title}" ?</h1>
            <div className="flex gap-2 justify-center">
            <button className="btn-red" onClick={deleteProduct}>Yes</button>
            <button  className="btn-default" onClick={goBack}>No</button>
            </div>
        </Layout>
    )

}