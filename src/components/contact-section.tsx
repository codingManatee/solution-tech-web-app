import { Mail } from "lucide-react"
import { BsInstagram } from "react-icons/bs"
import { TbBrandTiktok } from "react-icons/tb"

const ContactSection = () => {
    return (
        <div className=" px-4 md:px-6  w-full">
            <div className="grid gap-6">
                <div className="flex flex-col items-center space-y-4">
                    <div className="space-y-2 flex flex-col items-center text-center">
                        <h2 className="text-3xl font-bold text-main-turquoise tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                        <p className="text-main-indigo md:text-xl">
                            Interested in our hydrogen energy solutions? Reach out to our team for more information.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Mail className="h-5 w-5 text-main-indigo" />
                            <a href="mailto:solutiontechcompany.bkk@gmail.com" className="hover:underline">solutiontechcompany.bkk@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsInstagram className="h-5 w-5 text-main-indigo" />
                            <span>solutiontechcompany.bkk</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TbBrandTiktok className="h-5 w-5 text-main-indigo" />
                            <span>solutiontechcompany.bkk</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;