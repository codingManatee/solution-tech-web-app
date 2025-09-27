import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import TextType from "./ui/text-type"

const HeroSection = () => {
    return (
        <div className=" px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl text-main-indigo font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            The Future of Clean Energy is <span className="text-main-turquoise">Green Hydrogen</span>
                        </h1>
                        {/* <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  </p> */}
                        <TextType
                            text={["Sustainable", "zero-emission fuel", "that powers our world without harming the planet.", " Join the green hydrogen revolution today."]}
                            typingSpeed={75}
                            className="text-3xl"
                            pauseDuration={1500}
                            showCursor={true}
                            textColors={['black']}
                            cursorCharacter="|"
                        />
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button className="bg-main-turquoise hover:bg-main-indigo">Learn More</Button>
                        <Button variant="outline" className="text-main-white bg-main-turquoise hover:bg-main-indigo hover:text-main-white">
                            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <div className="flex items-center justify-center">

                </div>
            </div>
        </div>
    )
}

export default HeroSection