import Layout from "@/components/Layout"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DeleteProduct() {
    const [productInfo, setProductInfo] = useState();
    const router = useRouter()
    const {id} = router.query;

    useEffect(() => {
      if (!id) {
        return;
      }
      axios.get('/api/products?id='+id).then(response => {
        setProductInfo(response.data);
      });
    }, [id])

    async function deleteProduct() {
        await axios.delete('/api/products?id='+id);
        goBack();
    }
    
    function goBack() {
        router.push('/products');
    }

    return (
        <Layout>
            <h1 className="text-center">
                Do you really want to delete <em>{productInfo?.title}</em>?
            </h1>

            <div className="flex gap-2 justify-center">
                <button 
                    onClick={deleteProduct}
                    className="btn-red">Yes</button>
                <button 
                    onClick={goBack}
                    className="btn-default">No</button>
            </div>

        </Layout>
    )
}