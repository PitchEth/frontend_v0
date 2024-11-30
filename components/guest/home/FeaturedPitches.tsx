import Container from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { Card } from "@/components/ui/card"
import ImageWrapper from "@/components/shared/ImageWrapper"
import { pitches, PitchesTypes } from "@/utils/ListOfPitches"
import { Badge } from "@/components/ui/badge"
import { CiBookmark, CiLocationOn } from "react-icons/ci"
import { PiCurrencyDollar } from "react-icons/pi"
import { HiOutlineCalendar } from "react-icons/hi2";

const FeaturedPitches = () => {
    return (
        <Container className=" bg-white md:py-28 py-20 lg:px-48 md:px-10 px-4 flex flex-col gap-12 items-center">
            <div className="w-full flex justify-between items-center">
                <h3 className="font-medium md:text-2xl text-xl text-gray-900 capitalize">Featured pitches</h3>
                <Button variant={"outline"} className="text-petxtpurple">View All<HiOutlineArrowNarrowRight /></Button>
            </div>

            <main className="w-full flex flex-col gap-4">
                {
                    pitches.map((pitch: PitchesTypes, index) => (
                        <Card className="w-full cursor-pointer transition duration-200 hover:border-pebgpurple" key={index}>
                            <main className="w-full px-5 py-4 flex md:flex-row flex-col justify-between md:items-center gap-4 md:gap-0">
                                <div className="flex items-center gap-3">
                                    <ImageWrapper image={pitch.imgUrl} alt={pitch.title} className="w-[50px] h-[50px] rounded-full bg-pebgpurple p-3" imgClass="object-contain" width={100} height={100} />
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-base capitalize">
                                            <span className="font-medium text-gray-900 ">{pitch.title}</span>
                                            <Badge variant="secondary" className="ml-2 text-petxtpurple font-light text-xs">{pitch.tag}</Badge>
                                        </h3>
                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-500 flex gap-0.5 items-center text-sm">
                                                <CiLocationOn />
                                                {pitch.location}
                                            </span>
                                            <span className="text-gray-500 flex gap-0.5 items-center text-sm">
                                                <PiCurrencyDollar />
                                                {pitch.amount}
                                            </span>
                                            <span className="text-gray-500 flex gap-0.5 items-center text-sm">
                                                <HiOutlineCalendar />
                                                {pitch.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex self-end md:self-center items-center gap-4">
                                    <Button variant={"outline"} size="icon" className="text-petxtpurple">
                                        <CiBookmark />
                                    </Button>
                                    <Button variant={"outline"} className="text-petxtpurple">Pitch It<HiOutlineArrowNarrowRight /></Button>
                                </div>
                            </main>
                        </Card>
                    ))
                }

            </main>
        </Container>
    )
}

export default FeaturedPitches