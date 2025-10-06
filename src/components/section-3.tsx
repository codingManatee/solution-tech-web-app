import Image from "next/image";

const Section3 = () => {
    return (
        <section id='section3' className="px-0 md:px-10 lg:px-20 h-screen w-full flex flex-col items-center justify-center">
            <div className="w-4/5">
                {/* Title */}
                <h2 className="w-full text-6xl font-bold text-shadow-lg text-center md:text-end mb-12 text-main-indigo">
                    KEY DIFFERENCE
                </h2>

                <div className="w-full space-y-5">
                    {/* Material */}
                    <div className="flex flex-col md:flex-row place-content-start gap-6">
                        {/* Icon + Label */}
                        <div className="flex flex-col items-center">
                            <Image src={'/refinery.png'} width={150} height={150} alt="refinery" />
                            <span className="text-4xl font-bold text-main-turquoise mt-2">
                                Material
                            </span>
                        </div>

                        {/* Arrow + Content */}
                        <div className="flex items-center w-full md:w-3/4 gap-4">
                            <span className="hidden md:inline-block text-main-indigo font-bold text-5xl">
                                →
                            </span>
                            <div className="bg-main-turquoise rounded-lg px-6 py-4 text-main-indigo flex items-center text-xl">
                                <span className="font-extrabold text-5xl mr-2 text-white">5X</span>
                                <span className="">cheaper with only 5–10% less efficiency</span>
                            </div>
                        </div>
                    </div>

                    {/* Design */}
                    <div className="flex flex-col md:flex-row justify-end gap-6">
                        {/* Icon + Label */}
                        <div className="flex flex-col items-center">
                            <Image src={'/refinery.png'} width={150} height={150} alt="refinery" />
                            <span className="text-4xl font-bold text-main-turquoise mt-2">
                                Design
                            </span>
                        </div>

                        {/* Arrow + Content */}
                        <div className="flex items-center gap-4">
                            <span className="hidden md:inline-block text-main-indigo font-bold text-5xl">
                                →
                            </span>
                            <div className="bg-main-turquoise rounded-lg px-6 py-4 text-main-indigo flex items-center text-xl">
                                <span className="">reduce costly components via new design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3;