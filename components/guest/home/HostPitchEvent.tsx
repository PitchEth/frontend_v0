'use client'
import ImageWrapper from "@/components/shared/ImageWrapper"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import frame1 from "@/public/assets/setupyourprofileframe.png"

const HostPitchEvent = () => {
    return (
        <section className="w-full  md:py-24 py-20 flex flex-col md:gap-12 gap-8 items-center" id="hostPitchEvent">
            <div className="flex flex-col items-center px-4 md:px-0">
                <h1 className="font-bold text-gray-200 md:text-4xl text-2xl capitalize">Are you a Company/Brand?
                </h1>
                <h1 className="font-bold text-gray-200 md:text-4xl text-3xl">Host a Pitch Event</h1>
                <p className="w-full md:w-[80%] lg:w-[40%] md:mt-4 mt-3 text-gray-300 text-center text-base">Determine the focus of your pitch event (e.g., innovation, sustainability, marketing). Define the application process, evaluation criteria, and expected outcomes.
                </p>
            </div>
            {/* tabs */}
            <Tabs defaultValue="define" className="w-[90%] md:w-[500px]">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="define">Define</TabsTrigger>
                    <TabsTrigger value="review">Review</TabsTrigger>
                    <TabsTrigger value="collaborate">Collaborate</TabsTrigger>
                </TabsList>
                <TabsContent value="define">
                    <ImageWrapper image={frame1} alt="frame1" className="w-full mt-8" imgClass="object-contain" width={2933} height={1801} />
                </TabsContent>
                <TabsContent value="review">
                    <ImageWrapper image={frame1} alt="frame2" className="w-full mt-8" imgClass="object-contain" width={2933} height={1801} />
                </TabsContent>
                <TabsContent value="collaborate">
                    <ImageWrapper image={frame1} alt="frame3" className="w-full mt-8" imgClass="object-contain" width={2933} height={1801} />
                </TabsContent>
            </Tabs>
            {/* text & button */}
            <div className="flex flex-col items-center gap-4 px-4 md:px-0">
                <p className="w-full md:w-[80%] lg:w-[60%] text-center text-white">Outline your goals, requirements, and evaluation criteria.
                    Define the application process, evaluation criteria, and expected outcomes.</p>
                <button className="w-[200px] bg-gray-100 py-3 text-gray-900 rounded-lg font-medium">Get Started</button>
            </div>
        </section>
    )
}

export default HostPitchEvent