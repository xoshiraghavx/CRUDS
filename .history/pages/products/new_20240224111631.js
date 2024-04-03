import Layout from "@/components/Layout";

export default function NewProduct(){
    return(
        <Layout>
            <h1> New Products</h1>
            <label>Prodcu</label>
            <input type="text" placeholder="product name" />
            <textarea placeholder="desciption"></textarea>
            <input type="text" placeholder="price"/>
        </Layout>
    )
}