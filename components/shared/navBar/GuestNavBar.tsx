'use client'
import MaxWrapper from '../MaxWrapper'
import Logo from '../Logo'
import whiteLogo from "@/public/logo/white-bg-logo.png"
import purpleLogo from "@/public/logo/purple-bg-logo.png"
import { guestNavLinks } from '@/utils/navLinks'
import Link from 'next/link'
import { CiGrid41 } from "react-icons/ci";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const GuestNavBar = () => {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

    const pathname = usePathname();

    useEffect(() => {
        if (showMobileNav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    });

    return (
        <header className='w-full overflow-x-hidden'>
            <MaxWrapper className='lg:px-24 md:px-10 px-4 fixed top-0 inset-x-0 z-50 bg-transparent'>
                <div className='w-full h-20 flex justify-between items-center'>
                    <Logo image={whiteLogo} href="/" classname="lg:w-[90px] md:w-[80px] w-[70px]" />

                    <div className='hidden md:flex justify-center items-center gap-7'>
                        {
                            guestNavLinks.map((link, index) => (
                                <Link key={index} href={link.href} className={`text-gray-200 hover:text-white font-medium text-base ${pathname === link.href && "text-white underline"}`} >{link.label}</Link>
                            ))
                        }
                    </div>

                    <div className='flex items-center justify-end gap-3'>
                        <button type='button' className='text-petxtpurple bg-white px-6 py-2 rounded-lg font-medium'>Launch App</button>
                        <div className='md:hidden'>
                            <button onClick={() => setShowMobileNav(!showMobileNav)} className='text-petxtpurple bg-white text-2xl font-semibold rounded-lg px-2 py-2'>
                                <CiGrid41 />
                            </button>
                        </div>

                        {/* Mobile */}
                        <div
                            className={`fixed top-0 z-[99] w-full h-[100dvh] bg-petxtpurple transition-all duration-[500ms] ease-[cubic-bezier(0.86,0,0.07,1)] lg:hidden flex justify-end ${showMobileNav ? "left-0" : "left-[100%]"
                                }`}
                        >
                            <div
                                className={`w-[80%] h-full bg-gray-100 flex flex-col gap-10 transition-all duration-[500ms] ease-[cubic-bezier(0.86,0,0.07,1)] px-8 py-8 delay-300 ${showMobileNav ? "translate-x-0" : "translate-x-full"
                                    }`}
                            >
                                <header className="flex justify-between items-center w-full">
                                    <Logo href="/" classname="w-[75px]" image={purpleLogo} />
                                    <button
                                        type="button"
                                        className="text-gray-900 text-2xl font-semibold"
                                        onClick={() => setShowMobileNav(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-8"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18 18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </header>

                                <ul className="flex flex-col lg:hidden mt-10 items-start gap-6">
                                    {guestNavLinks.map((link, index) => (
                                        <li className="block relative list-none group" key={index}>
                                            <Link
                                                className={`text-gray-900 font-medium text-2xl flex items-center gap-1.5 transition-all duration-[500ms] group-hover:text-petxtpurple ${pathname === link.href && "text-petxtpurple underline"}`}
                                                href={link.href}
                                            >
                                                {link.label}
                                                <MdOutlineArrowOutward />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWrapper>
        </header>
    )
}

export default GuestNavBar