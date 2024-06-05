import React from 'react'
import Image from 'next/image'


const Benefit = ({cardData}) => {
  // const cardData = [
  //   {
  //     img: MarketingImg,
  //     desc: "Higher engagement and customer satisfaction."
  //   },
  //   {
  //     img: EyeImg,
  //     desc: "Increased brand visibility and accessibility."
  //   },
  //   {
  //     img: TargetImg,
  //     desc: "Direct marketing channel to users."
  //   }
  // ]

 const card = cardData.map((card, i) => {
    return (
      <div key={i} className="b-card w-[210px] flex flex-col justify-center items-center gap-5">
      <Image src={card.img} />
      <p className='text-16/22 text-[#000000] font-normal text-center'>{card.desc}</p>
    </div>
    )
  })

  return (
    <div className='w-[858px] h-[353px]'>
      <h3 className='text-center text-24/34 text-[#000000] font-bold mb-16'>Benefits of Our Service</h3>
      <div className="benefit-cards w-full flex justify-between items-center px-8">
        {/* <div className="b-card w-[210px] flex flex-col justify-center items-center gap-5">
          <Image src={MarketingImg} />
          <p className='text-16/22 text-[#000000] font-normal text-center'>Higher engagement
            and customer satisfaction.</p>
        </div> */}
        {card}
      </div>
    </div>
  )
}

export default Benefit
