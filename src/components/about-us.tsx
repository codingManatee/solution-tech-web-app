import Image from "next/image"

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-5xl text-main-green">
                        About Us
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        We create a membraneless electrolyzer to produce low-cost green hydrogen gas —
                        empowering the Green Hydrogen Economy.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        We are driving the green energy transition with affordable green hydrogen. Our
                        proprietary membraneless electrolyzer reduces production costs and hydrogen prices,
                        enabling scalable decarbonization across industries.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Image
                        src="/template.jpg"
                        alt="Green hydrogen electrolyzer"
                        width={500}
                        height={400}
                        className="rounded-xl shadow-md object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
