import { Leaf } from "lucide-react";
import { AiFillDollarCircle } from "react-icons/ai";
import Carousel, { CarouselItem } from "./Carousel";
import BlurText from "./BlurText";

const KEY_DIFFERENCE_ITEMS: CarouselItem[] = [
    {
        id: 1,
        title: "Ulra-high Purity",
        description: "Up to 99.74% H2 purity (surpassing the 99.6% industry requirement)",
        icon: <Leaf className="h-12 w-12 text-primary" />,
    },
    {
        id: 2,
        title: "Low Depreciation Costs",
        description: "Equipment depreciation expenses 4x lower",
        icon: <AiFillDollarCircle className="h-12 w-12 text-primary" />,
    },
    {
        id: 3,
        title: "Lower Production Costs",
        description: "Costs of production 3x lower",
        icon: <AiFillDollarCircle className="h-12 w-12 text-primary" />,
    },
];

const KeyBenefitsSection = () => {
    return (
        <div className=" px-4 md:px-6">

            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <BlurText
                    text="Key benefits"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-5xl font-bold tracking-tight sm:text-7xl text-main-indigo"
                />
            </div>
            <div className="flex justify-center py-12">
                <Carousel
                    items={KEY_DIFFERENCE_ITEMS}
                    baseWidth={1000}
                    autoplay
                    autoplayDelay={4000}
                    pauseOnHover
                    loop
                />
            </div>
        </div>
    )
}

export default KeyBenefitsSection;