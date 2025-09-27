import { Droplets } from "lucide-react"
import Link from "next/link";

const Footer = () => {
    return (
        <div className=" flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
            <div className="flex gap-2 items-center text-xl font-bold">
                <Droplets className="h-6 w-6 text-green-500" />
                <span>
                    GreenH<sub>2</sub>
                </span>
            </div>
            <p className="text-center text-sm text-gray-500 md:text-left">
                © {new Date().getFullYear()} GreenH<sub>2</sub> Technologies. All rights reserved.
            </p>
            <div className="flex gap-4">
                <Link href="#" className="text-gray-500 hover:text-main-green">
                    Terms
                </Link>
                <Link href="#" className="text-gray-500 hover:text-main-green">
                    Privacy
                </Link>
                <Link href="#" className="text-gray-500 hover:text-main-green">
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default Footer;