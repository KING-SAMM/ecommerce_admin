import {mongooseConnect} from "@/lib/mongoose";
import { Product } from "@/models/Product";
import mongoose from 'mongoose';


export default async function handler(req, res) {
    const {method} = req;

    // connect to database 
    await mongooseConnect();

    if (method === 'POST') {
        // Grab data from payload 
        const {title,description,price} = req.body;
        const productDoc = await Product.create({
            title,description,price,
        })
        res.json(productDoc);
    }
  }