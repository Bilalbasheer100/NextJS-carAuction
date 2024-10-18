"use client"

import React from 'react'
import { Button } from '../ui/button'
import { serviceBarlinks, serviceBarButtons } from '@/constants'

function ServicesBar() {

    const handleClick = () => {
        console.log("button clicked")
    }
    return (
        <section className="w-full h-[78px] bg-dark-800 flex items-center justify-between ">
            <div className="flex gap-[50px] ml-[60px] ">
                {serviceBarlinks.map((link) => (

                    <p key={link} className="text-white text-xl">{link}</p>
                ))
                }

            </div>
            <div className="mr-[70px] flex gap-[20px]" >
                {serviceBarButtons.map((button) => (

                    <Button key={button.label} className={button.buttonStyles} onClick={() => handleClick()}>
                        {button.label}
                    </Button>
                ))
                }
                <Button className="bg-yellow-100 text-black" onClick={() => handleClick()}>
                    Services
                </Button>

            </div>

        </section>
    )
}

export default ServicesBar
