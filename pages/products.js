import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <h1 className="text-4xl pl-2">Products</h1>
      <Link href={'/products/new'} className="btn-primary">
        Add new product
      </Link>
    </Layout>
  )
}
