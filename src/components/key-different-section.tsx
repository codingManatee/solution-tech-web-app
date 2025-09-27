import { Leaf } from "lucide-react";
import FeatureBox from "./ui/feature-box";
import { AiFillDollarCircle } from "react-icons/ai";

const KeyDifferentSection = () => {
    return (
        <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    {/* <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                        Innovative Technology
                    </div> */}
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Different</h2>
                    {/* <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Green hydrogen offers a sustainable solution to our energy needs, providing clean power without
                        harmful emissions.
                    </p> */}
                </div>
            </div>
            <div className="grid items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <FeatureBox
                    title="Material"
                    description="5x cheaper with only 5-10% less efficiency"
                    icon={<AiFillDollarCircle className="h-12 w-12" />}
                />
                <FeatureBox
                    title="Design"
                    description="Reduce costly component via new design"
                    icon={<AiFillDollarCircle className="h-12 w-12" />}
                />
            </div>
        </div>
    )
}

export default KeyDifferentSection;