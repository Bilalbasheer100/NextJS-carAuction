import React from 'react'
import Image from 'next/image'
import Search from './Search'
import NavOptions from './NavOptions'
function Navbar() {
    return (
        <header className="w-full h-[108px] bg-purple-100  flex items-center justify-around">
            <div className="relative flex gap-6 items-center left-[20px]">
                <Image
                    src="/assets/icons/logo.svg"
                    alt="logo"
                    width={236}
                    height={47}
                />
                <Search />
            </div>
            <div>
                <NavOptions />
            </div>

        </header>
    )
}

export default Navbar
