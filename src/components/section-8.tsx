import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";

const Section8 = () => {
    return (
        <section id="section8" className="relative px-0 md:px-10 lg:px-20 h-screen w-full flex flex-col justify-center items-center">
            <div className=" px-4 md:px-6  w-full">
                <div className="flex flex-col items-center space-y-4">
                    <div className="relative h-[250px] ">
                        <Image
                            src="/click.png"
                            alt="click"
                            width={150}
                            height={150}
                            className="absolute top-0 left-6 md:left-12 w-18 h-32 -z-10 object-contain"
                        />
                        <div className="h-full flex flex-col justify-center text-center space-y-6">
                            <h2
                                className="text-6xl text-shadow-lg font-extrabold text-main-indigo"
                            >
                                GET IN TOUCH
                            </h2>
                            <p className="font-semibold text-lg text-main-indigo ">
                                Interest in our hydrogen energy solutions
                                Reach out our team for more information.
                            </p>
                        </div>
                        <div className="absolute right-10 bottom-18 md:right-10 md:bottom-0 text-8xl font-extrabold text-main-turquoise -z-10">
                            ?
                        </div>
                    </div>
                    <div className="space-y-4 text-main-indigo">
                        <div className="flex items-center gap-2">
                            <IoIosMail className="h-12 w-12 text-main-turquoise" />
                            <a href="mailto:team@thesolutiontech.com" className="hover:underline w-full text-center">team@thesolutiontech</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiFillInstagram className="h-12 w-12  text-main-turquoise" />
                            <span className="hover:underline w-full text-center">solutiontech.co</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaTiktok className="h-12 w-12  text-main-turquoise" />
                            <span className="hover:underline w-full text-center">solutiontech.co</span>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={'/tr_border.png'} className="-z-10 absolute top-0 left-0 scale-x-[-1]" alt="bl_border" height={150} width={150} />
            <Image src={'/bl_border.png'} className="-z-10 absolute bottom-0 right-0 scale-x-[-1]" alt="bl_border" height={150} width={150} />
        </section >
    )
}

export default Section8