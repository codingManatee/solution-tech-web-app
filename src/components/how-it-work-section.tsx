import BlurText from "./BlurText";
import CountUp from "./ui/count-up";

const HowItWorkSection = () => {
    return (
        <div className=" px-4 md:px-6 grid grid-cols-2 gap-10">
            <div className="text-9xl font-bold text-main-indigo">
                <div className="">Reduce Cost</div>
                <div className="">Up to</div>
                <div className="flex items-baseline space-x-2 text-main-turquoise">
                    <CountUp
                        from={0}
                        to={75}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text "
                    />
                    <div className="">%</div>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <BlurText
                    text="Production Cost $"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-3xl font-bold tracking-tight sm:text-5xl text-main-indigo"
                />
                <div className="py-12 items-center">
                    {/* <Badge className="bg-primary/20 text-main-turquoise border-primary/30 text-3xl">-75% Cost</Badge> */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-primary">Traditional Method</span>
                            <span className="text-main-indigo">480฿/kg</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-main-indigo h-2 rounded-full w-full"></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-main-turquoise font-semibold">Our Technology</span>
                            <span className="text-main-turquoise font-bold">120฿/kg</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                            <div className="bg-main-turquoise h-2 rounded-full w-1/3"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default HowItWorkSection;