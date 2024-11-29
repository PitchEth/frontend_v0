import Container from "@/components/shared/Container"
import ImageWrapper from "@/components/shared/ImageWrapper"
import MaxWrapper from "@/components/shared/MaxWrapper"
import heroImage from "@/public/assets/happy-face1.png"

const HeroSection = () => {
    return (
        <main className="w-full">
            <section className="w-full lg:h-screen md:h-[60vh] h-screen" id="homeHeroBg">
                <MaxWrapper className="h-full">
                    <Container className="h-full flex items-center lg:px-24 md:px-10 px-4 ">
                        <div className="flex flex-col md:gap-4 gap-3 md:justify-center justify-end flex-1 h-full pb-28 md:pb-0">
                            <h1 className="text-white">
                                <span className="lg:text-[5.5rem]/none text-[3rem]/none font-extrabold">Pitch, Partner</span> <br />
                                <span className="lg:text-4xl md:text-3xl text-2xl font-bold">and bring your vision to life.</span>
                            </h1>
                            <p className="text-gray-100 text-lg">A web3 platform for idea generation and brand partnership.<br className="hidden md:block" />{" "}
                                Join the community shaping the future of Pitching.
                            </p>
                            <div className="flex md:flex-row flex-col md:gap-6 gap-4 mt-4">
                                <button className=" w-full md:w-[250px] text-petxtpurple py-3 bg-white rounded-lg font-medium">Join as a pitcher</button>
                                <button className="w-full md:w-[250px] bg-gray-950 py-3 text-gray-200 rounded-lg font-medium">Join as an event creator</button>
                            </div>
                        </div>
                        <div className="hidden lg:flex w-[400px] self-end">
                            <ImageWrapper image={heroImage} alt="heroImage" className="w-full" imgClass="object-contain" width={2200} height={3255} />
                        </div>
                    </Container>
                </MaxWrapper>
            </section>
            <div className="w-full h-4 bg-gradient-to-r from-pink-400 via-amber-200 to-cyan-300"></div>
        </main>
    )
}

export default HeroSection