import Image from "next/image"
import BlurText from "./BlurText"

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="space-y-6">
                    <BlurText
                        text="What we do?"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-5xl font-bold tracking-tight sm:text-7xl text-main-indigo"
                    />
                    <p className="text-lg text-primary leading-relaxed inline">
                        We create a <span className="inline text-main-turquoise">membraneless electrolyzer</span>  to produce low-cost green hydrogen gas — empowering the Green Hydrogen Economy.
                    </p>
                    <div className="">

                    </div>
                    <BlurText
                        text="We are driving the green energy transition with affordable green hydrogen."
                        delay={150}
                        animateBy="words"
                        direction="top"
                        className="text-2xl mb-8 text-primary"
                    />
                    <p className="text-lg text-primary leading-relaxed inline">
                        Our proprietary membraneless electrolyzer<span className="inline text-main-turquoise"> reduces production costs</span> and <span className="inline text-main-turquoise">hydrogen prices</span>, enabling <span className="inline text-main-turquoise">scalable decarbonization </span>across industries.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Image
                        src="/6.jpg"
                        alt="Green hydrogen electrolyzer"
                        width={400}
                        height={400}
                        className="rounded-xl shadow-md object-cover"
                    />
                </div>
            </div >
        </div >
    )
}

export default AboutUs
