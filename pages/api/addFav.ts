
import prisma from "@/prisma"
import { ObjectId } from "bson"
import { NextApiRequest, NextApiResponse } from "next"



export default async function handler(req: NextApiRequest, res:NextApiResponse) {

//   //Get User
//   const prismaUser = await prisma.user.findUnique({
//     where: { email: session.user.email },
//   })
  const id = new ObjectId()

  //check to see if post was liked by user
  const favProduct = await prisma.favProduct.findFirst({
    where:{
      productId: req.body.productId
    }
  })

  if (req.method === "POST") {
    //Add Like
    try {
      if (!favProduct) {
        const result = await prisma.favProduct.create({
          
          data: {
            listId: id.toString(),
            productId: req.body.productId
          },
        })
        res.status(201).json(result)
      } 
      else {
        const result = await prisma.favProduct.delete({
          where: {
            id: favProduct.id,
          },
        })
        res.status(200).json(result)
      }
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post" })
    }
  }
  
}