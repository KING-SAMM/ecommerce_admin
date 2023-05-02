import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';

export default function ProductForm({
    title: currentTitle,
    description: currentDescription,
    price: currentPrice
}) {
   // Define form data items 
   const [title, setTitle] = useState(currentTitle || '');
   const [description, setDescription] = useState(currentDescription || '');
   const [price, setPrice] = useState(currentPrice || '');
   const [goToProducts, setGoToProducts] = useState(false);
   const router = useRouter();

   // Send form data to API 
   async function createProduct(e) {
       e.preventDefault();

       const data = {title,description,price};

       await axios.post('/api/products', data);

       // Ready to return to products
       setGoToProducts(true);
   }

   // Return to products 
   if (goToProducts) {
       router.push('/products');
   }

 return (
       <form onSubmit={createProduct}>

           <label>Product Name</label>
           <input 
           type="text" 
           placeholder='product name'
           value={title}
           onChange={e => setTitle(e.target.value)} />

           <label>Product Description</label>
           <textarea placeholder='description'
           value={description}
           onChange={e => setDescription(e.target.value)}></textarea>

           <label>Price (in USD)</label>
           <input 
           type="number" placeholder='price'
           value={price}
           onChange={e => setPrice(e.target.value)} />

           <button
           type="submit" 
           className='btn-primary'>Save</button>
       </form>
    )
}
