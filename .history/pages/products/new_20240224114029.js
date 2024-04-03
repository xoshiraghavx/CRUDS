import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProduct(){
    const [title, setTitle] = useState('');
    const [desciption, setDescription] = useState();
    const [price, setPrice] = useState();

    return(
        <Layout>
            <form>
            
            </form>
        </Layout>
    )
}