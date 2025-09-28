import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import TextType from "./ui/text-type"
import Image from "next/image"

const HeroSection = () => {
    return (
        <div className=" px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl text-main-indigo font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            The Future of Clean Energy is <span className="text-main-turquoise">Green Hydrogen</span>
                        </h1>
                        <TextType
                            text={["Green Hydrogen", "the clean energy solution.", "Solution Tech Company", " Join the green hydrogen revolution today."]}
                            typingSpeed={75}
                            className="text-3xl"
                            pauseDuration={1500}
                            showCursor={true}
                            textColors={['black']}
                            cursorCharacter="|"
                        />
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button variant="outline" className="text-main-white bg-main-turquoise hover:bg-main-indigo hover:text-main-white">
                            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <div className="">
                    <Image
                        src="/1.jpg"
                        alt="Green hydrogen electrolyzer"
                        width={500}
                        height={500}
                        className="rounded-xl shadow-md object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection