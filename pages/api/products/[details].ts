import { client } from '@/lib/sanity.client';
import type { NextApiRequest, NextApiResponse } from "next"
import groq from 'groq'
import { Product } from '@/typings';



const productQuery = (query) => {
    const queryProduct = groq`*[_type == "product" && slug.current == '${query}'][0]`
    return queryProduct
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const query = groq`*[_type == "products" && slug.current == '${req.query.details}'][0]`

    if (req.method === "GET") {
        //Get Auth Users Posts
        try {
           const product = await client.fetch(query)
           
           res.status(200).json({product})
           
        } catch (err) {
            res.status(403).json({ message: "Error has occured while fetch product" })
        }
    }
}