import {Skill} from "../typing";

export const fetchSkills = async() => {
    const res = await fetch(`http://localhost:3000/api/getSkills`, {
            cache: "force-cache"
        });
    const data = await res.json();
    const skills : Array<Skill> = data.skills

    return skills;
}