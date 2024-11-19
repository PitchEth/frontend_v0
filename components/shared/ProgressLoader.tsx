'use client'
import React from 'react'

const ProgressLoader = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen z-[9999] bg-white flex justify-center items-center">
            <div className="loader"></div>
        </div>
    )
}

export default ProgressLoader