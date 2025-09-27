import { Globe, BarChart3, Factory } from "lucide-react"

const ImpactSection = () => {
    return (
        <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                        Global Impact
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Environmental & Economic Benefits</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Green hydrogen is transforming industries while helping achieve climate goals.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
                <div className="grid gap-6">
                    <div className="flex items-start gap-4">
                        <Globe className="h-10 w-10 text-main-green" />
                        <div>
                            <h3 className="text-xl font-bold">Carbon Reduction</h3>
                            <p className="text-gray-500">
                                Could reduce global CO2 emissions by up to 6 gigatons annually by 2050, equivalent to removing all
                                cars from the road.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <BarChart3 className="h-10 w-10 text-main-green" />
                        <div>
                            <h3 className="text-xl font-bold">Economic Growth</h3>
                            <p className="text-gray-500">
                                Expected to create over 30 million jobs worldwide and contribute $2.5 trillion to the global
                                economy by 2050.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Factory className="h-10 w-10 text-main-green" />
                        <div>
                            <h3 className="text-xl font-bold">Industrial Transformation</h3>
                            <p className="text-gray-500">
                                Enables decarbonization of hard-to-abate sectors like steel, cement, and chemical production.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImpactSection;