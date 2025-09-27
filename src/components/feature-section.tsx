import { Leaf, Zap, LineChart } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import FeatureBox from "./ui/feature-box";

const FeatureSection = () => {
    return (
        <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                        Innovative Technology
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Green Hydrogen?</h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Green hydrogen offers a sustainable solution to our energy needs, providing clean power without
                        harmful emissions.
                    </p>
                </div>
            </div>
            <div className="grid items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
                <FeatureBox
                    title="Environmentally Friendly"
                    description="Produces zero carbon emissions, with water vapor as the only byproduct when used as fuel."
                    icon={<Leaf className="h-12 w-12" />}
                />
                <FeatureBox
                    title="Energy Dense"
                    description="Contains nearly three times the energy content of fossil fuels on a weight basis."
                    icon={<Zap className="h-12 w-12" />}
                />
                <FeatureBox
                    title="Versatile Application"
                    description="Can be used across industries including transportation, manufacturing, and power generation."
                    icon={<LineChart className="h-12 w-12" />}
                />
                <FeatureBox
                    title="Renewables Resources"
                    description="Can be produced energy from renewable’s resources. ( water , sunlight )"
                    icon={<Leaf className="h-12 w-12" />}
                />
            </div>
        </div>
    )
}

export default FeatureSection;