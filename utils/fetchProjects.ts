import {Project} from "../typing";

export const fetchProjects = async() => {
    const res = await fetch(`http://localhost:3000/api/getProjects`, {
            cache: "force-cache"
        });
    const data = await res.json();
    const projects : Array<Project> = data.projects

    return projects;
}