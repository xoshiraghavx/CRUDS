import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function NewProduct(){
    const [title, setTitle] = useState('');
    const [desciption, setDescription] = useState();
    const [price, setPrice] = useState();
    function createProduct(){
        const data ={title, desciption}
        axios.post('/api/products', data)
    }

    return(
        <Layout>
            <form onSubmit={createProduct}>
            <h1> New Products</h1>
            <label>Product name</label>
            <input 
            type="text" 
            placeholder="product name"
            value={title}
            onChange={ev=> setTitle(ev.target.value)} />
            <label>Description</label>
            <textarea 
            placeholder="desciption"
            value={desciption}
            onChange={ev=>setDescription(ev.target.value)}/>
            <label>Price (in INR)</label>
            <input 
            type="number" 
            placeholder="price"
            value={price}
            onChange={ev=>setPrice(ev.target.value)}/>
            <button 
            type="submit" 
            className="btn-primary">
                Save
            </button>
            </form>
        </Layout>
    )
}