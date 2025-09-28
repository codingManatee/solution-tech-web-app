
import Image from "next/image"

const ProcessSection = () => {
    return (
        <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    {/* <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                        Production Process
                    </div> */}
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-main-indigo">Membraneless Electrolyzer</h2>
                    <p className="max-w-[900px] text-main-turquoise md:text-xl/relaxed lg:text-base/relaxed xl:text-2xl/relaxed">
                        The Future Of Green Hydrogen
                    </p>
                </div>
            </div>
            <div className="flex flex-col mx-auto max-w-4xl py-12 items-center gap-5">
                <Image src={"/4.jpg"} alt={""} width={400} height={400} className="rounded-xl shadow-md object-cover" />
            </div>
        </div>
    )
}

export default ProcessSection