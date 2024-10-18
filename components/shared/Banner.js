
import React from 'react'
import Cards from './Cards'
import Form from './Form'

function Banner() {
  return (
    <section className="bg-bannerImg bg-repeat bg-cover bg-bottom">
      <div className="w-full h-[637px] bg-blackOverlay flex">
        <div className="w-[1074px] flex-col">
          <div>
            <p className="text-white text-[67px] font-extrabold mt-[64px] ml-[51px]">
              Win Your<br /> Perfect Car Auction
            </p>
          </div>
       <Cards/>
        </div>
       <Form/>
      </div>
    </section>
  )
}

export default Banner
