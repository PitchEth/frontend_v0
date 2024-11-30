import { guestNavLinks } from "@/utils/navLinks"
import Logo from "./Logo"
import whiteLogo from "@/public/logo/white-bg-logo.png"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="w-full flex md:flex-row flex-col md:justify-between justify-center items-center gap-4 py-8 md:px-20 bg-gradient-to-b from-[#27154C] to-[#181127]">
            <Logo image={whiteLogo} href="/" classname="lg:w-[80px] md:w-[70px] w-[60px]" />

            <div className='flex justify-center items-center gap-7'>
                {
                    guestNavLinks.map((link, index) => (
                        <Link key={index} href={link.href} className={`text-gray-300 hover:text-white font-medium text-sm`} >{link.label}</Link>
                    ))
                }
            </div>
        </footer>
    )
}

export default Footer