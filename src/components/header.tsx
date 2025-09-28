
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
    return (
        <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <div className="flex gap-2 items-center text-xl font-bold">
                <Image src={"/main_logo_indigo.png"} alt="main-logo" width={100} height={100} />
            </div>
            <div className="flex-1 items-center justify-end space-x-4 hidden sm:flex">
                <nav className="flex items-center space-x-1 gap-5 text-primary">
                    <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                        About Us
                    </Link>
                    <Link href="#insight" className="text-sm font-medium transition-colors hover:text-primary">
                        Insight
                    </Link>
                    <Link href="#benefits" className="text-sm font-medium transition-colors hover:text-primary ml-4">
                        Benefits
                    </Link>
                    <Link href="#different" className="text-sm font-medium transition-colors hover:text-primary ml-4">
                        Different
                    </Link>
                    <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary ml-4">
                        Contact
                    </Link>
                    <Button className="ml-4 text-main-white bg-main-turquoise hover:bg-main-indigo hover:text-main-white"><Link href="#contact">
                        Get Started
                    </Link></Button>
                </nav>
            </div>
        </div>
    )
}

export default Header;