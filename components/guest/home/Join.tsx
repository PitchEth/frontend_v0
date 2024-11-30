import ImageWrapper from "@/components/shared/ImageWrapper"
import { humanAvatars } from "@/utils/humanAvatar"


const Join = () => {
    return (
        <>
            <section className="w-full bg-pebgpurple md:py-28 py-20 flex flex-col gap-8 items-center">
                <div className="flex flex-col gap-4 items-center px-4 md:px-0">
                    <h3 className="font-semibold text-center text-gray-800 md:text-3xl text-2xl">Join thousands of Innovators and Brands</h3>
                    <div className="flex -space-x-4 rtl:space-x-reverse">
                        {
                            humanAvatars.map((avatar, i) => (
                                <ImageWrapper key={i} image={avatar} alt={`avatar${i}`} className="w-14 h-14 border-2 overflow-hidden border-white rounded-full" imgClass="object-contain" width={100} height={100} />
                            ))
                        }
                        <button className="flex items-center justify-center w-14 h-14 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full">+99</button>
                    </div>
                </div>
                <p className="w-full md:w-[80%] lg:w-[30%] text-gray-900 px-4 md:px-0 text-center text-base">Join the Web 3 revolution: Pitch, Partner, and bring decentralized ideas to life.</p>
            </section>
            <div className="w-full h-3 bg-gradient-to-r from-pink-400 via-amber-200 to-cyan-300"></div>
        </>
    )
}

export default Join