import Layout from '@/components/Layout'
import React, { useState } from 'react'

export default function New() {
    // Define form data items 
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    // Send form data to API 
    async function createProduct() {
        const data = {title, description, price}

        await axios.post('/api/products', data)
    }

  return (
    <Layout>
        <form onSubmit={createProduct}>
            <h1>New Product</h1>

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
    </Layout>
  )
}
