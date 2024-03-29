import {motion} from "framer-motion";
import {Project} from "../../typing";
import {urlFor} from "../../sanity";
import Image from "next/image";
const Projects = ({projects}: {projects?: Project[]}) => {
    return(
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className={"h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"}>
            <h3 className={"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"}>
                Projects
            </h3>
            <div className={"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"}>
                {projects && projects.map((project, idx) =>
                    (
                        <div className={"w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"} key={idx}>
                            <div className={"space-y-10 px-10 md:px-10 max-w-6xl"}>
                                <h4 className={"text-4xl font-semibold text-center"}>
                                    <span className={"underline decoration-[#F7AB0A]/50"}>Case Study {idx+1} of {projects.length}:</span>
                                    {project.title}
                                </h4>
                                <p className={"text-lg text-center md:text-left"}>
                                    {project.summary}
                                </p>
                            </div>
                            {project.technologies.map((tech, idx) => {
                                console.log("tech", tech);
                                return <Image height={50} width={50} key={idx} src={urlFor(tech?.image).url()} alt={"my-skill"}/>
                            })}
                        </div>
                    )
                )}
            </div>
            <div className={"w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"}/>
        </motion.div>
    )
}

export default Projects;