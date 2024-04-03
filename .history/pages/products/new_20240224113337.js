import Layout from "@/components/Layout";
import { useState } from "react";

export default function NewProduct(){
    const [title, setTitle] = useState('');
    
    return(
        <Layout>
            <h1> New Products</h1>
            <label>Product name</label>
            <input type="text" placeholder="product name" />
            <label>Description</label>
            <textarea placeholder="desciption"></textarea>
            <label>Price (in INR)</label>
            <input type="number" placeholder="price"/>
            <button className="btn-primary">Save</button>
        </Layout>
    )
}