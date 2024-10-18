import React from 'react'
import { cardContent } from '@/constants'
function Cards() {
  return (
    <div className="flex justify-around ml-[25px] relative top-[50px]">

    {cardContent.map((card)=>(
        <div key={card.no}>
      <div className="w-[325px] h-[191px] rounded-[20px] bg-white p-[20px]" style={{ background: 'rgba(255, 255, 255, 0.7)' }}>
        <div className="flex gap-4 items-center">

        <div className="rounded-full bg-yellow-200 h-[35px] w-[35px] mb-[10px] flex justify-center items-center font-extrabold text-[20px]">{card.no}</div>
        <p className="font-extrabold text-[20px]  ">{card.label}</p>
        </div>
        
        <div className="pl-[50px] text-[15px] font-light">{card.content}</div>
      </div>
    </div>

))}
</div>
  )
}

export default Cards
