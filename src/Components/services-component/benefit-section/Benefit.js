import React from 'react'
import Image from 'next/image'

const Benefit = ({ cardData, cardWidth }) => {

  const card = cardData.map((card, i) => {
    return (
      <div key={i} className="b-card w-[200px] md:w-[230px] flex flex-col justify-center items-center gap-5" style={{width: cardWidth}}>
        <Image src={card.img} alt='Benefit section image' />
        <p className='text-lg font-bold text-black'>{card.title}</p>
        <p className='text-sm md:text-base text-black font-normal text-center'>{card.desc}</p>
      </div>
    )
  })

  return (
    <div className='w-full max-w-[1000px] mb-[0px] md:mb-[100px]'>
      <h3 className='text-center text-16/22 md:text-xl text-black font-bold mb-[55px] md:mb-[90px]'>Benefits of Our Service</h3>
      <div className="benefit-cards w-full flex flex-wrap justify-center gap-[35px] md:gap-[113px]">
        {card}
      </div>
    </div>
  )
}

export default Benefit

