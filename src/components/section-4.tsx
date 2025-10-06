import { DollarSign } from "lucide-react"

const Section4 = () => {
    return (
        <section id='section4' className="relative w-full max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative flex flex-col items-center">
                    <div className="relative z-10">
                        <h2 className="text-6xl font-bold text-shadow-lg text-center mb-12 text-main-indigo">
                            KEY <br />
                            BENEFITS
                        </h2>
                        {/* <span className="inline-block mt-4 text-main-turquoise text-6xl font-bold leading-none">
                            !
                        </span> */}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Ultra-high Purity */}
                    <div className="flex items-center">
                        <div className="w-full border-7 border-main-indigo rounded-2xl p-6 text-center flex flex-col items-center justify-center shadow-sm lg:h-1/2">
                            <div className="flex justify-center mb-4">
                                <div className="bg-main-indigo text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                                    H
                                </div>
                            </div>
                            <h3 className="font-bold text-lg text-main-indigo">
                                Ultra-high Purity
                            </h3>
                            <p className="mt-2 text-main-indigo">
                                Up to <span className="font-extrabold">99.9%</span> H₂ purity
                            </p>
                        </div>
                    </div>


                    <div className="space-y-6">
                        {/* Lower Production Costs */}
                        <div className="border-7 border-main-indigo rounded-2xl p-6 text-center shadow-sm">
                            <div className="flex justify-center mb-4">
                                <DollarSign className="h-10 w-10 text-main-indigo" />
                            </div>
                            <h3 className="font-bold text-lg text-main-indigo">
                                Lower Production Costs
                            </h3>
                            <p className="mt-2 text-main-indigo">
                                Cost of production <br />
                                <span className="font-extrabold">3x lower</span>
                            </p>
                        </div>

                        {/* Lower Depreciation Costs */}
                        <div className="border-7 border-main-indigo rounded-2xl p-6 text-center shadow-sm">
                            <div className="flex justify-center mb-4">
                                <DollarSign className="h-10 w-10 text-main-indigo" />
                            </div>
                            <h3 className="font-bold text-lg text-main-indigo">
                                Lower Depreciation Costs
                            </h3>
                            <p className="mt-2 text-main-indigo">
                                Equipment depreciation expenses{" "}
                                <span className="font-extrabold">4x lower</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4;