import {Experience} from "../typing";

export const fetchExperience = async() => {
    const res = await fetch(`http://localhost:3000/api/getExperience`, {
            cache: "force-cache"
        });
    const data = await res.json();
    const experience : Array<Experience> = data.experience

    return experience;
}