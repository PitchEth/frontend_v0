import { cn } from '@/lib/utils';
import React, { FC } from 'react'

type ContainerTypes = {
    className?: string
    children: React.ReactNode
}

const Container: FC<ContainerTypes> = ({ className, children }) => {
    return <div className={cn("w-full mx-auto", className)}>{children}</div>;
}

export default Container