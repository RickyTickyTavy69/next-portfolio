import {PageInfo} from "../typing";

export const fetchPageInfo = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`, {
        cache: "force-cache"
    });
    const data = await res.json();
    const pageInfo : PageInfo = data.pageInfo

    return pageInfo;
}