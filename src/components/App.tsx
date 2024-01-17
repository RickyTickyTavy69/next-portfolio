"use client"
import {About, Experiences, Header, Hero, Skills} from "@/components/index";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {Experience, PageInfo, Project, Skill, Social} from "../../typing";
import {fetchPageInfo} from "../../utils/fetchPageInfo";
import {fetchExperience} from "../../utils/fetchExperiences";
import {fetchSkills} from "../../utils/fetchSkills";
import {fetchProjects} from "../../utils/fetchProjects";
import {fetchSocials} from "../../utils/fetchSocials";


type PageData = {
    pageInfo: PageInfo;
    experience: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
}

export const getPageData = async () => {

    const pageInfo: PageInfo = await fetchPageInfo();
    const experience: Experience[] = await fetchExperience();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials : Social[] = await fetchSocials();

    return {
        pageInfo,
        experience,
        skills,
        projects,
        socials,
    }
}

export const App = () => {

    const [pageData, setPageData] = useState<PageData>();
    const getData = async () => {
        const data = await getPageData();
        console.log("data is", data);
        setPageData(data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={'bg-[#242424] text-white h-screen snap-y snap-mandatory ' +
            'overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'}>
                <Header socials={pageData?.socials}/>
            <section className={"snap-start"} id={"hero"}>
                <Hero pageInfo={pageData?.pageInfo}/>
            </section>
            <section className={"snap-center"} id={"about"}>
                <About pageInfo={pageData?.pageInfo}/>
            </section>
            <section className={"snap-center"} id={"experience"}>
                <Experiences experience={pageData?.experience} />
            </section>
            <section className={"snap-start"} id={"skills"}>
                <Skills skills={pageData?.skills}/>
            </section>
            <section className={"snap-start"} id={"projects"}>
                <Projects projects={pageData?.projects}/>
            </section>
            <section className={"snap-start"} id={"contact"}>
                <Contact/>
            </section>

            <Link href={"#hero"}>
                <footer className={"sticky bottom-5 w-full cursor-pointer"}>
                    <div className={"flex items-center justify-center"}>
                        <img
                            className={"h-12 w-12rounded-full filter grayscale hover:grayscale-0"}
                            src="/up.png"
                            alt="up"/>
                    </div>
                </footer>
            </Link>
        </div>
    )
}