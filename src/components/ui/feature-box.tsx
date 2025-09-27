import { Card, CardContent } from "./card";
import { ReactNode } from "react";

interface FeatureBoxProps {
    title: string;
    description: string;
    icon: ReactNode;
}

const FeatureBox = ({ title, description, icon }: FeatureBoxProps) => {
    return (
        <Card className="border-green-100 h-full">
            <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="h-12 w-12 text-main-green">
                    {icon}
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-center text-gray-500">
                    {description}
                </p>
            </CardContent>
        </Card>
    )
}

export default FeatureBox;
