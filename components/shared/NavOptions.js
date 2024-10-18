import { navOptions } from '@/constants';
import Image from 'next/image';
import React from 'react'

const NavOptions = () => {
    return (
        <div className="">
            <ul className="flex gap-5 items-center ">
                {navOptions.map((option) => {


                    return (
                        <li
                            key={option.label}
                            className="flex-center p-medium-16 whitespace-nowrap flex gap-2 "
                        >
                            <Image src={option.icon} width={28} height={28} alt={option.alt} />
                            <p className="font-semibold text-white">{option.label}</p>
                            {option.arrow && <Image src={option.arrow} width={16} height={16} alt="downarrow" />}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NavOptions
