const StatSection = () => {
    return (
        <div className=" px-4 md:px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
                <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4 bg-green-50">
                    <div className="text-3xl font-bold text-main-green">100%</div>
                    <div className="text-sm font-medium text-center">Clean Emissions</div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4 bg-green-50">
                    <div className="text-3xl font-bold text-main-green">75%</div>
                    <div className="text-sm font-medium text-center">Carbon Reduction</div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4 bg-green-50">
                    <div className="text-3xl font-bold text-main-green">30+</div>
                    <div className="text-sm font-medium text-center">Countries Investing</div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4 bg-green-50">
                    <div className="text-3xl font-bold text-main-green">$300B</div>
                    <div className="text-sm font-medium text-center">Market by 2030</div>
                </div>
            </div>
        </div>
    )
}

export default StatSection