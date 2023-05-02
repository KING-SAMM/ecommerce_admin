import {mongooseConnect} from "@/lib/mongoose";
import { Product } from "@/models/Product";
import mongoose from 'mongoose';


export default async function handler(req, res) {
    const {method} = req;

    // connect to database 
    await mongooseConnect();

    if (method === 'GET') {
        // Find single product given id
        if (req.query?.id) {
            res.json(await Product.findOne({_id:req.query.id}))
        } else {
            // Get all products in the database
            res.json(await Product.find())
        }
    }

    if (method === 'POST') {
        // Grab data from payload 
        const {title,description,price} = req.body;
        const productDoc = await Product.create({
            title,description,price,
        })
        res.json(productDoc);
    }

    if (method === 'PUT') {
        const {title,description,price,_id} = req.body;
        await Product.updateOne({_id}, {title,description,price});
        res.json(true);
    }
  }