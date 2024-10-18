"use client"

import React from 'react'

function SearchButton() {
    let handleClick = () => {
        console.log("button clicked")
    }
    return (

        <button onClick={handleClick} className="h-[64px] w-[169px] bg-dark-800 relative right-[25px] rounded-r-[10px]">
            <p className="text-white font-normal flex justify-center items-center  relative text-[25px]">Search</p>
        </button>

    )
}

export default SearchButton
