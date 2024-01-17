import {NextApiRequest, NextApiResponse} from "next";
import {groq} from "next-sanity";
import { client } from "../../../sanity/lib/client";
import {Skill} from "../../../typing";

const query = groq`
    *[_type == "skill"]
`

type Data = {
    skills: Array<Skill>
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    const skills : Array<Skill> = await client.fetch(query);
    res.status(200).json({skills});
}