
import Image from "next/image"

const ProcessSection = () => {
    return (
        <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    {/* <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                        Production Process
                    </div> */}
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Membraneless Electrolyzer</h2>
                    <p className="max-w-[900px] text-gray- md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        The future of green hydrogen
                    </p>
                </div>
            </div>
            <div className="flex flex-col mx-auto max-w-4xl py-12 items-center gap-5">
                <div className="">
                    Cuts green hydrogen cost to only 200 Baht/KG more than 200% cheaper
                </div>
                <Image src={"/template.jpg"} alt={""} width={300} height={450} />
            </div>
        </div>
    )
}

export default ProcessSection