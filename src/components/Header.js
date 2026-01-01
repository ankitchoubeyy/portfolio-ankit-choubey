import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='flex items-center justify-start gap-4 sm:gap-6 mb-10'>
            <div className="relative w-20 h-20">
                <Image
                    src="/profile1.png"
                    alt="logo"
                    fill
                    className="object-cover rounded-full"
                />
            </div>

            <div className="">
                <h1 className="text-xl md:text-2xl font-bold text-white">
                    Ankit Choubey
                </h1>

                <div className="flex gap-1 md:gap-2 mt-1">
                    <p className="text-white/80 bg-white/10 backdrop-blur-md py-1 px-3 rounded-full text-xs inline-block border border-white/10">
                        Software Engineer
                    </p>

                    <p className="text-white/80 bg-white/10 backdrop-blur-md py-1 px-3 rounded-full text-xs inline-block border border-white/10">
                        MERN Developer
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Header