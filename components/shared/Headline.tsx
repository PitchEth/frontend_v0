'use client'
import Marquee from "react-fast-marquee";

const Headline = () => {
    return (
        <Marquee className="w-full h-8 bg-gradient-to-r from-pink-400 via-amber-200 to-cyan-300">
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
        </Marquee>
    )
}

export default Headline

const Text = () => {
    return (
        <div className="w-full flex items-center ">
            <span className="h-1.5 w-1.5 bg-gray-900 rounded-full"></span>
            <p className="text-gray-900 text-sm px-2.5 font-light w-full">Something Big is Coming – Get Ready to Experience the Future with PitchEth!</p>
        </div>
    )
}