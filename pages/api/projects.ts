import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let { db } = await connectToDatabase()

    const projects = await db.collection('projects').find().toArray()

    res.status(200).json({ projects })

}