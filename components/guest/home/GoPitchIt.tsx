import Container from "@/components/shared/Container"
import ImageWrapper from "@/components/shared/ImageWrapper"
import vector from "@/public/assets/Vector 470.png"
import illustration1 from "@/public/assets/gopitchit1.png"
import illustration2 from "@/public/assets/gopitchit2.png"
import illustration3 from "@/public/assets/gopitchit3.png"

const GoPitchIt = () => {
    return (
        <section className="w-full bg-white md:py-28 py-20 flex flex-col gap-12 items-center">
            <div className="flex flex-col items-center px-4 md:px-0">
                <h1 className="font-bold text-gray-900 text-4xl relative">Go Pitch It?
                    <ImageWrapper image={vector} alt="vector" className="absolute top-[0px] right-[0px] w-[150px]" imgClass="object-contain" width={100} height={100} />
                </h1>
                <h1 className="font-bold text-gray-900 md:text-4xl text-3xl">Bring Your Ideas to Life</h1>
                <p className="w-full md:w-[80%] lg:w-[50%] md:mt-5 mt-3 text-gray-600 text-center text-base">Get discovered, get funded, and get partnered with top brands. Are you a creative thinker, innovator, or problem-solver?. We coonect you with leading brands and investors.
                    Share your pitch, showcase your vision, and unlock new opportunities for growth and collaboration.
                </p>
            </div>

            <Container className="flex md:flex-row flex-col justify-center gap-2 items-center lg:px-24 md:px-10 px-4">
                <div className="md:h-full w-full flex flex-col flex-1 items-end">
                    <ImageWrapper image={illustration1} alt="illustration1" className="w-full" imgClass="object-contain" width={2967} height={1883} />
                    <ImageWrapper image={illustration2} alt="illustration2" className="w-full" imgClass="object-contain" width={2055} height={2048} />
                </div>
                <div className="md:h-full flex flex-col justify-center lg:w-[560px] md:w-[45%]">
                    <ImageWrapper image={illustration3} alt="illustration3" className="w-full" imgClass="object-contain" width={2391} height={2120} />
                </div>
            </Container>

            <div className="w-full flex justify-center">
                <button className="w-[200px] bg-gray-900 py-3 text-gray-200 rounded-lg font-medium">Get Started</button>
            </div>
        </section>
    )
}

export default GoPitchIt