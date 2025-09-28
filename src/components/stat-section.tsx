import { ChartColumnDecreasing, Cog, FileBadge, Layers, Leaf, MapPin } from "lucide-react"
import StatShow from "./stat-show"
import BlurText from "./BlurText"

const StatSection = () => {
    return (
        <div className=" px-4 md:px-6 flex items-center flex-col gap-15">
            <BlurText
                text="Value Propositions"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-5xl font-bold tracking-tight sm:text-7xl text-main-indigo"
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                <StatShow title="Green energy fuel" description="(no carbon emission)" icon={<Leaf />} />
                <StatShow title="Low-cost" description="(more than 2x cheaper than market)" icon={<ChartColumnDecreasing />} />
                <StatShow title="Pass standard" description="(99.6% required)" icon={<FileBadge />} />
                <StatShow title="Retrofit-friendly" description="(no need to change equipment)" icon={<Cog />} />
                <StatShow title="Modular & Scalable" description="(stackable units)" icon={<Layers />} />
                <StatShow title="On-site generation" description="(cut logistics & scope-3 emissions)" icon={<MapPin />} />
            </div>
        </div>
    )
}

export default StatSection