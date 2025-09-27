import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const ProcessSection = () => {
    return (
        <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                        Production Process
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How Green Hydrogen Works</h2>
                    <p className="max-w-[900px] text-gray- md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Green hydrogen is produced through electrolysis powered by renewable energy sources.
                    </p>
                </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
                <Tabs defaultValue="electrolysis" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="electrolysis">Electrolysis</TabsTrigger>
                        <TabsTrigger value="storage">Storage & Transport</TabsTrigger>
                        <TabsTrigger value="application">Applications</TabsTrigger>
                    </TabsList>
                    <TabsContent value="electrolysis" className="mt-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <h3 className="text-2xl font-bold">Water Electrolysis</h3>
                                <p className="text-gray-500">
                                    Electrolysis splits water (H<sub>2</sub>O) into hydrogen (H<sub>2</sub>) and oxygen (O
                                    <sub>2</sub>) using electricity from renewable sources like solar or wind power.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-main-green" />
                                        <span>Powered by renewable energy</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-main-green" />
                                        <span>Zero carbon emissions</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-main-green" />
                                        <span>Scalable production</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/placeholder.svg?height=300&width=500"
                                    width={500}
                                    height={300}
                                    alt="Electrolysis Process"
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="storage" className="mt-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <h3 className="text-2xl font-bold">Storage Solutions</h3>
                                <p className="text-gray-500">
                                    Hydrogen can be stored as a compressed gas, liquid, or in chemical compounds like ammonia for
                                    easier transport and storage.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-main-green" />
                                        <span>Compressed gas tanks</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-main-green" />
                                        <span>Liquid hydrogen (-253°C)</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-main-green" />
                                        <span>Chemical carriers (LOHC)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="application" className="mt-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <h3 className="text-2xl font-bold">Industry Applications</h3>
                                <p className="text-gray-500">
                                    Green hydrogen can replace fossil fuels in transportation, industrial processes, and power
                                    generation.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-main-green" />
                                        <span>Fuel cell vehicles</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-main-green" />
                                        <span>Steel and cement production</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-5 w-5 text-main-green" />
                                        <span>Grid-scale energy storage</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center justify-center">
                                <Image
                                    src="/placeholder.svg?height=300&width=500"
                                    width={500}
                                    height={300}
                                    alt="Hydrogen Applications"
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default ProcessSection