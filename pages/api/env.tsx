import { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'

const config = getConfig().serverRuntimeConfig


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        res.send(JSON.stringify(config))
        res.status(200).end()

    } catch {
        res.status(400).end()
    }
}