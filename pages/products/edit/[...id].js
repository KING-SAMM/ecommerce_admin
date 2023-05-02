import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import axios from "axios";
import ProductForm from '@/components/ProductForm';

export default function EditProduct() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const {id} = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get('/api/products?id='+id).then(response => {
      setProductInfo(response.data);
    });
  
  }, [id])
  

  console.log(router);
  return (
    <Layout>
      {productInfo && (<>
        <h1>Edit { productInfo.title }</h1>
        <ProductForm {...productInfo} />
        </>
      )}
    </Layout>
  )
}
