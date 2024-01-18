import {Project} from "../typing";

export const fetchProjects = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`, {
            cache: "force-cache"
        });
    const data = await res.json();
    const projects : Array<Project> = data.projects

    return projects;
}