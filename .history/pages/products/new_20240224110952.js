import Layout from "@/components/Layout";

export default function NewProduct(){
    return(
        <Layout>
            <h1 className="mb-2 text-xl text-blue-900"> New Products</h1>
            <input type="text" placeholder="product name" />
            <textarea placeholder="desciption"></textarea>
        </Layout>
    )
}