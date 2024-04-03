import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products(){
    return (
    <Layout>
        <Link class href={'/products/new'}>Add new products</Link>
    </Layout>
    );
}