import { Button } from "./ui/button"
import { MoveRight } from "lucide-react"
import Image from "next/image"

const Section1 = () => {
    return (
        <section id="section1" className="px-5 md:px-10 lg:px-20 pt-10 md:pt-0 h-screen w-full flex flex-col space-y-6 md:grid md:grid-cols-2 md:items-center bg-gradient-to-b from-cyan-50 to-white">
            <div className="flex flex-col gap-3">
                <div className="text-6xl font-bold text-main-turquoise">
                    Green Hydrogen,
                </div>
                <div className="text-5xl font-bold text-main-indigo">
                    The clean energy solution
                </div>
                <Button className="bg-main-turquoise w-min" size={"lg"}>
                    Contact us
                    <MoveRight />
                </Button>
            </div>
            <div className="flex justify-center">
                <Image
                    src="/width_800.webp"
                    alt="Green hydrogen electrolyzer"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-md object-cover"
                />
            </div>
        </section>
    )
}

export default Section1