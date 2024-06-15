import React from 'react'
import Image from 'next/image'


const Benefit = ({cardData}) => {

 const card = cardData.map((card, i) => {
    return (
      <div key={i} className="b-card w-[250px] flex flex-col justify-center items-center gap-5">
      <Image src={card.img} alt='Benefit section image' />
      <p className='text-12/15 md:text-16/22 text-black font-normal text-center'>{card.desc}</p>
    </div>
    )
  })

  return (
    <div className='w-full max-w-[858px]'>
      <h3 className='text-center text-16/22 md:text-24/34 text-black font-bold mb-16'>Benefits of Our Service</h3>
      <div className="benefit-cards w-full flex flex-col md:flex-row justify-between items-center px-8 gap-[50px] lg:gap-0">
        {card}
      </div>
    </div>
  )
}

export default Benefit
