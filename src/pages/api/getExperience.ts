import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { Experience } from "../../../typing";

const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->,
    }
`

type Data = {
    experience: Array<Experience>
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    const experience : Array<Experience> = await client.fetch(query);
    res.status(200).json({experience});
}