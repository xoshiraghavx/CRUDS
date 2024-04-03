import Layout from "@/components/Layout";

export default function NewProduct(){
    return(
        <Layout>
            <h1> New Products</h1>
            <label>Product name</label>
            <input type="text" placeholder="product name" />
            <label>Description</label>
            <textarea placeholder="desciption"></textarea>
            <label>Price (in INR)</label>
            <input type="number" placeholder="price"/>
            <button className="">save</button>
        </Layout>
    )
}