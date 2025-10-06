import Image from "next/image";

const Section5 = () => {
    return (
        <section id="section5" className="px-5 md:px-10 lg:px-20 min-h-screen w-full flex flex-col justify-center">
            <div className="w-full flex justify-center mb-12">
                <h2 className="text-6xl text-shadow-lg font-extrabold text-main-indigo text-center">WHY IT MATTERS</h2>
            </div>
            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {/* Card 1 */}
                <div className="space-y-5 bg-main-indigo text-white rounded-2xl p-8 text-center flex flex-col items-center">
                    <Image src={'/factory.png'} width={75} height={75} alt="factory" />
                    <h3 className="font-bold text-lg mb-3">
                        Real decarbonization <br /> for hard-to-abate heat
                    </h3>
                    <p className="text-lg leading-relaxed">
                        On-site green hydrogen{" "}
                        <span className="text-main-turquoise font-medium">
                            cuts emissions
                        </span>{" "}
                        immediately—replacing LPG/LNG in furnaces, kilns, and process heat.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="space-y-5 bg-main-indigo text-white rounded-2xl p-8 text-center flex flex-col items-center">
                    <Image src={'/green_earth.png'} width={75} height={75} alt="earth" />
                    <h3 className="font-bold text-lg mb-3">
                        Aligned with <br /> global transition
                    </h3>
                    <p className="text-lg">
                        Policy-proof growth: meet{" "}
                        <span className="text-main-turquoise">net-zero/SBTi</span>{" "}
                        and rising carbon rules to stay export-ready and ahead of competitors.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="space-y-5 bg-main-indigo text-white rounded-2xl p-8 text-center flex flex-col items-center">
                    <Image src={'/money_bag.png'} width={75} height={75} alt="earth" />
                    <h3 className="font-bold text-lg mb-3">
                        Economics <br /> that unlock adoption
                    </h3>
                    <p className="text-lg">
                        We provide{" "}
                        <span className="text-main-turquoise">green H₂</span> as a
                        service, removing customer CapEx and speeding progress to point-of-use{" "}
                        <span className="text-main-turquoise">cost parity</span>.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Section5;