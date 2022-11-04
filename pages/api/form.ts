import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let { db } = await connectToDatabase()

    /*  const order= await db.collection('webstudio').find().toArray()
   
     res.status(200).json({order}) */

    const body = JSON.parse(req.body)
    const order = db.collection('webstudio').insertOne({ 
        name: body.name, 
        email: body.email, 
        phone: body.phone, 
        comments: body.comments });

    res.status(200).json({ order })
}
