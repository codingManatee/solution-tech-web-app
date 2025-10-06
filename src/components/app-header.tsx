
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const AppHeader = () => {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4">
            <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-2 items-center text-xl font-bold">
                    <Image src={"/main_logo_indigo.png"} alt="main-logo" width={100} height={100} />
                </div>
                <div className="flex-1 items-center justify-end space-x-4 hidden sm:flex">
                    <nav className="flex items-center space-x-1 gap-5 text-primary">
                        <Link href="#section2" className="text-sm font-medium transition-colors hover:text-primary">
                            Product
                        </Link>
                        <Link href="#section5" className="text-sm font-medium transition-colors hover:text-primary">
                            Impact
                        </Link>
                        <Link href="#section6" className="text-sm font-medium transition-colors hover:text-primary ml-4">
                            Value
                        </Link>
                        <Link href="#section8" className="text-sm font-medium transition-colors hover:text-primary ml-4">
                            Contact
                        </Link>
                        <Button className="ml-4 text-main-white bg-main-turquoise hover:bg-main-indigo hover:text-main-white">
                            <Link href="#contact">
                                Get Started
                            </Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;