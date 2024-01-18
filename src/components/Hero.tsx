import {Cursor, useTypewriter} from "react-simple-typewriter";
import React from "react";
import {BackGroundCircles} from "@/components";
import Image from "next/image";
import Link from "next/link";
import {PageInfo} from "../../typing";
import {urlFor} from "../../sanity";


const Hero = ({pageInfo}: {pageInfo?: PageInfo}) => {
    const [text, count] = useTypewriter({
        words: [`My name is ${pageInfo?.name}`, `I am a ${pageInfo?.role}`],
        loop : true,
        delaySpeed: 2000,
    });

    return(
        <div className={'h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'}>
            <BackGroundCircles/>
            {pageInfo && <>

                <Image
                    className={'relative rounded-full h-32 w-32 mx-auto object-cover'}
                       height={315}
                       width={306}
                       src={urlFor(pageInfo?.profilePic).url()}
                       alt={"my picture"}
                />
                <div className={"z-20"}>
                    <h2 className={'text-sm uppercase text-gray-500 pb-2 tracking-[15px]'}>{pageInfo.name}</h2>
                    <h1 className={'text-5xl lg:text-6xl font-semibold px-10'}>
                        <span className={'mr-3'}>{text}</span>
                        <Cursor cursorColor={"#f60a83"}/>
                    </h1>
                    <div className={'pt-5'}>
                        <Link href={"#about"}>
                            <button className={'heroButton'}>About</button>
                        </Link>
                        <Link href={"#experience"}>
                            <button className={'heroButton'}>Experience</button>
                        </Link>
                        <Link href={"#skills"}>
                            <button className={'heroButton'}>Skills</button>
                        </Link>
                        <Link href={"#projects"}>
                            <button className={'heroButton'}>Projects</button>
                        </Link>

                    </div>
                </div>

            </>}
        </div>

    )
}

export default Hero;