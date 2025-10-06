import { Leaf, ChartColumnDecreasing, FileBadge, Cog, Layers, MapPin } from "lucide-react"
import StatShow from "./ui/stat-show"

const Section6 = () => {
    return (
        <section id="section6" className="px-5 md:px-10 lg:px-20 h-screen w-full flex flex-col justify-center items-center">
            <div className="w-full flex justify-center mb-12">
                <h2 className="text-6xl text-shadow-lg font-extrabold text-main-indigo text-center">VALUE PROPOSITION</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
                <StatShow title="Green energy fuel" description="(no carbon emission)" icon={<Leaf />} />
                <StatShow title="Low-cost" description="(more than 2x cheaper than market)" icon={<ChartColumnDecreasing />} />
                <StatShow title="Pass standard" description="(99.6% required)" icon={<FileBadge />} />
                <StatShow title="Retrofit-friendly" description="(no need to change equipment)" icon={<Cog />} />
                <StatShow title="Modular & Scalable" description="(stackable units)" icon={<Layers />} />
                <StatShow title="On-site generation" description="(cut logistics & scope-3 emissions)" icon={<MapPin />} />
            </div>
        </section>
    )
}

export default Section6