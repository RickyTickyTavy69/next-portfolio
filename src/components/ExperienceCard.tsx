import {motion} from "framer-motion";
import {Experience} from "../../typing";
import {urlFor} from "../../sanity";

import Image from "next/image";
import {point} from "slate";
const ExperienceCard = ({experience}: {experience: Experience}) => {
    return(
        <article className={"flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"}>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className={"h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"}
                src={urlFor(experience?.companyImage).url()}
                alt="experience"
            />
            <div className={"px-0 md:px-10"}>
                <h4 className={"text-4xl font-light"}>{experience?.jobTitle}</h4>
                <p className={"font-bold text-2xl mt-1"}>{experience?.company}</p>
                <div className={"flex space-x-2 my-2"}>
                    {experience?.technologies && experience.technologies.map((tech, idx) => {
                        return <Image
                            key={idx}
                            className={'relative rounded-full h-10 w-10 mx-auto object-cover'}
                            height={315}
                            width={306}
                            src={urlFor(tech.image).url()}
                            alt={"technology"}
                        />
                    })}
                </div>
                <p className={"uppercase py-5 text-gray-300"}>Startet work... - Ended...</p>
                <ul className={"list-disc space-y-4 ml-5 text-lg"}>
                    {experience?.points && experience.points.map((point, idx) => {
                        return <li key={idx}>{point}</li>;
                    })}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard;


















