import { NextApiRequest, NextApiResponse } from 'next';


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'GET') {
        res.status(200).json({ message: "Good!" });
    } else if (req.method === 'POST') {
        res.status(201).json({
            message: "success",
            user: req.body
        });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}