import {Social} from "../typing";

export const fetchSocials = async() => {
    const res = await fetch(`http://localhost:3000/api/getSocials`, {
            cache: "force-cache"
        });
    const data = await res.json();
    const socials : Array<Social> = data.socials

    return socials;
}