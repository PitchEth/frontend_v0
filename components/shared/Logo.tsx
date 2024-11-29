import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { FC } from "react"


type LogoTypes = {
    classname: string
    image: StaticImageData
    href: string
}

const Logo: FC<LogoTypes> = ({ classname, image, href }) => {
    return (
        <Link href={href} className={classname}>
            <Image src={image} alt="Logo" className='w-full' width={1940} height={1124} priority quality={100} />
        </Link>
    )
}

export default Logo