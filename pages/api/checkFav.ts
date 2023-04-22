
import prisma from "@/prisma"

import { NextApiRequest, NextApiResponse } from "next"



export default async function handler(req: NextApiRequest, res:NextApiResponse) {

//   //Get User
//   const prismaUser = await prisma.user.findUnique({
//     where: { email: session.user.email },
//   })

  //check to see if post was liked by user
  const result = await prisma.favProduct.findFirst({
    where: {
      productId: req.body
    }
  })

  if (req.method === "GET") {
    //Add Like
    try {
      if(result) {
        res.status(201).json(result)
      } else {
        res.status(200).json(result)
      }
      
    } catch (err) {
      res.status(403).json({ err: "Error has occured while making a post" })
    }
  }
  
}