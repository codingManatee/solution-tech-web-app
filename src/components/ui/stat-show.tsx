import { ReactNode } from "react"

interface StatShowProps {
    icon: ReactNode
    title: string
    description: string
}

const StatShow = ({ icon, title, description }: StatShowProps) => {
    return (
        <div className="grid grid-cols-4 items-center justify-center space-y-2 border rounded-lg p-4 bg-cyan-50">
            <div className="col-span-1 items-center justify-center flex ">
                {icon}
            </div>
            <div className="col-span-3">
                <div className="text-xl font-bold text-main-turquoise">{title}</div>
                <div className="text-sm font-medium">{description}</div>
            </div>
        </div>
    )
}

export default StatShow;