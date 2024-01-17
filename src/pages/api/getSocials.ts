import {NextApiRequest, NextApiResponse} from "next";
import {groq} from "next-sanity";
import { client } from "../../../sanity/lib/client";
import {Social} from "../../../typing";

const query = groq`
    *[_type == "social"]
`

type Data = {
    socials: Array<Social>
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    const socials : Array<Social> = await client.fetch(query);

    res.status(200).json({socials})
}