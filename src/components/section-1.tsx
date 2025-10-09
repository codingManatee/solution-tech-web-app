import { Button } from "./ui/button"
import { MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Section1 = () => {
    return (
        <section id="section1" className="relative w-full ">
            <div className="flex flex-col space-y-6 md:grid md:grid-cols-2 md:items-center px-5 md:px-10 lg:px-20 pt-10 md:pt-0 min-h-screen bg-gradient-to-b from-cyan-50 to-white">
                <div className="flex flex-col gap-3">
                    <div className="text-6xl font-bold text-main-turquoise">
                        Green Hydrogen,
                    </div>
                    <div className="text-5xl font-bold text-main-indigo">
                        The clean energy solution
                    </div>
                    <Link href="#section8">
                        <Button className="bg-main-turquoise w-min" size={"lg"}>
                            Contact us
                            <MoveRight />
                        </Button>
                    </Link>
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
            </div>
            <Image src={'/bl_border.png'} className="z-10 absolute bottom-0 left-0" alt="bl_border" height={150} width={150} />
            <Image src={'/bl_border.png'} className="z-10 absolute bottom-0 right-0 scale-x-[-1]" alt="bl_border" height={150} width={150} />
        </section>
    )
}

export default Section1