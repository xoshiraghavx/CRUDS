import Layout from "@/components/Layout";

export default function NewProduct(){
    return(
        <Layout>
            <h1> New Products</h1>
            <label>Product name</label>
            <input type="text" placeholder="product name" />
            <label
            <textarea placeholder="desciption"></textarea>
            <input type="text" placeholder="price"/>
        </Layout>
    )
}