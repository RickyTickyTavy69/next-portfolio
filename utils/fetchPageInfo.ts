import {PageInfo} from "../typing";

export const fetchPageInfo = async() => {
    const res = await fetch(`http://localhost:3000/api/getPageInfo`, {
        cache: "force-cache"
    });
    const data = await res.json();
    const pageInfo : PageInfo = data.pageInfo

    return pageInfo;
}