import { Leaf } from "lucide-react";
import FeatureBox from "./ui/feature-box";
import { AiFillDollarCircle } from "react-icons/ai";

const KeyBenefitsSection = () => {
    return (
        <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    {/* <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                        Innovative Technology
                    </div> */}
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key benefits</h2>
                    {/* <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Green hydrogen offers a sustainable solution to our energy needs, providing clean power without
                        harmful emissions.
                    </p> */}
                </div>
            </div>
            <div className="grid items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <FeatureBox
                    title="Ultra-high Purity"
                    description="Up to 99.74% H2 purity (surpassing the 99.6% industry requirement)"
                    icon={<Leaf className="h-12 w-12" />}
                />
                <FeatureBox
                    title="Low Depreciation Costs"
                    description="Equipment depreciation expenses 4x lower"
                    icon={<AiFillDollarCircle className="h-12 w-12" />}
                />
                <FeatureBox
                    title="Lower Production Costs"
                    description="Costs of production 3x lower"
                    icon={<AiFillDollarCircle className="h-12 w-12" />}
                />
            </div>
        </div>
    )
}

export default KeyBenefitsSection;