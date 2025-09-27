import Image from "next/image"

const HowItWorkSection = () => {
    return (
        <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How it works</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 mx-auto max-w-4xl py-12">
                <Image src={"/template.jpg"} alt={""} width={300} height={450} />
                <div className="">
                    We design and manufacture our own membraneless electrolyzers
                </div>
            </div>
        </div>
    )
}
export default HowItWorkSection;