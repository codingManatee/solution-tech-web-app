import { ChartColumnDecreasing, Cog, FileBadge, Layers, Leaf, MapPin } from "lucide-react"
import StatShow from "./stat-show"

const StatSection = () => {
    return (
        <div className=" px-4 md:px-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                <StatShow title="Green energy fuel" description="(no carbon emission)" icon={<Leaf />} />
                <StatShow title="Low-cost" description="(more than 2x cheaper than market)" icon={<ChartColumnDecreasing />} />
                <StatShow title="Pass standard" description="(98.5% required)" icon={<FileBadge />} />
                <StatShow title="Retrofit-friendly" description="(no need to change equipment)" icon={<Cog />} />
                <StatShow title="Modular & Scalable" description="(can be stacked units as demand grows)" icon={<Layers />} />
                <StatShow title="On-shite generation" description="(cut cylnate (egistics,transport risk, and scope-3 emissions)" icon={<MapPin />} />
            </div>
        </div>
    )
}

export default StatSection