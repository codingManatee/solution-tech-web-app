import CountUp from "./ui/count-up";

const KeyDifferentSection = () => {
    return (
        <div className=" px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-main-indigo">Key different</h2>
            </div>
            <div className="items-center gap-6 py-12lg:gap-12">
                <div className="space-y-12 flex flex-col justify-center items-center">
                    {/* Material Row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <span className="text-5xl font-semibold text-main-turquoise">Material</span>
                        <span className="text-5xl">→</span>
                        <span className="flex items-end gap-2">
                            <span className="text-5xl font-bold text-main-turquoise flex">
                                <CountUp
                                    from={0}
                                    to={5}
                                    separator=","
                                    direction="up"
                                    duration={1}
                                    className="count-up-text"
                                />
                                <div className="">X</div>
                            </span>
                            <span className="text-lg md:text-xl text-main-indigo">
                                cheaper with only 5–10% less efficiency
                            </span>
                        </span>
                    </div>

                    {/* Design Row */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <span className="text-5xl font-semibold text-main-turquoise">Design</span>
                        <span className="text-5xl">→</span>
                        <span className="text-lg md:text-xl text-main-indigo">
                            reduce costly components via new design
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeyDifferentSection;

