import Image from "next/image";

const Section3 = () => {
    return (
        <section id='section3' className="relative px-0 md:px-10 lg:px-20 min-h-screen w-full flex flex-col items-center justify-center">
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
                            <div className="relative w-32 h-18 md:w-32 md:h-32 lg:w-40 lg:h-40">
                                <Image
                                    src="/refinery.png"
                                    alt="refinery"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-4xl font-bold text-main-turquoise mt-2">
                                Material
                            </span>
                        </div>

                        {/* Arrow + Content */}
                        <div className="flex items-center justify-center md:justify-start w-full md:w-3/4 gap-4">
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
                            <div className="relative w-32 h-18 md:w-32 md:h-32 lg:w-40 lg:h-40">
                                <Image
                                    src="/thinking.png"
                                    alt="refinery"
                                    fill
                                    className="object-contain"
                                />
                            </div>
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
            <Image src={'/bl_border.png'} className="-z-10 absolute bottom-0 right-0 scale-x-[-1]" alt="bl_border" height={150} width={150} />
        </section>
    )
}

export default Section3;