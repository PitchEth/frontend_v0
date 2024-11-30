import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react'

type ImageWrapperTypes = {
    image: StaticImageData | any,
    alt: string,
    className: string,
    imgClass?: string
    width: number,
    height: number
}

const ImageWrapper: FC<ImageWrapperTypes> = ({ image, alt, className, imgClass, width, height }) => {
    return (
        <div className={className}>
            <Image src={image} alt={alt} className={cn("w-full", imgClass)} width={width} height={height} priority quality={100} />
        </div>
    )
}

export default ImageWrapper