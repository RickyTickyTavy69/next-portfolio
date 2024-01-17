"use client";
import {SocialIcon} from "react-social-icons";
import {motion} from "framer-motion";
import Link from "next/link";
import {Social} from "../../typing";

type HeaderProps = {
    socials?: Social[]
}
const Header = ({socials} : HeaderProps) => {

    // console.log("socials", socials);

    return(
        <header className={'sticky top-0 p-5 flex justify-between items-start max-w-7xl mx-auto z-20 xl:items-center bg'}>
            <motion.div
                initial={{x: -500, opacity: 0, scale: 0.5}}
                animate={{x : 0, opacity: 1, scale: 1}}
                transition={{duration: 1.5}}
                className={"flex flex-row items-center"}>
                {socials && socials.map((social, idx) => {
                    return <SocialIcon key={idx} bgColor={"transparent"} fgColor={"gray"} url={social.url}/>
                })}
            </motion.div>

            <Link href={"#contact"}>
            <motion.div
                initial={{x: 500, opacity: 0, scale: 0.5}}
                animate={{x : 0, opacity: 1, scale: 1}}
                transition={{duration: 1.5}}
                className={"flex flex-row items-center text-gray-300 cursor-pointer"}>
                <SocialIcon bgColor={'transparent'} fgColor={'gray'} className={"cursor-pointer"} network={'email'}/>
                <p className={"uppercase hidden md:inline-flex text-sm text-gray-400"}>Get in Touch</p>
            </motion.div>
            </Link>
        </header>
    )
}

export default Header;