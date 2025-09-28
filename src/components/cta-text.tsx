
const CtaText = () => {
    return (
        <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Join the Green Hydrogen Revolution
                    </h2>
                    <p className="mx-auto max-w-[700px] md:text-xl">
                        Be part of the solution to climate change. Discover how green hydrogen can transform your business and
                        help create a sustainable future.
                    </p>
                </div>
                {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="bg-main-turquoise text-main-indigo hover:bg-main-white">Request a Consultation</Button>
                    <Button variant="outline" className="border-white text-black">
                        Download Whitepaper
                    </Button>
                </div> */}
            </div>
        </div>
    )
}

export default CtaText;