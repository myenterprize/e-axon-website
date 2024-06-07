import React from 'react'
import Image from 'next/image'

const Stage = ({stageData, elementColor}) => {
  // const stageData = [
  //   {
  //     No: "01",
  //     img: PlanningImg,
  //     title: "Testing Planning",
  //     desc: "We develop comprehensive testing strategies."

  //   },
  //   {
  //     No: "02",
  //     img: TestImg,
  //     title: "Automated Test Development",
  //     desc: "We then design and execute automated tests."

  //   }
  // ]

  const stage = stageData.map((item, i) => {
    return (
      <div key={i} className='w-[100%] py-[16px] px-[58px] mb-5'>
      <h2 className='text-34/48 text-[#3CBCC3] font-bold pb-5 border-b-2 border-[#3CBCC3]' style={{color: elementColor, borderColor: elementColor}}>{item.No}</h2>
      <Image src={item.img} className='my-5' />
      <h3 className='text-24/34 font-[700] text-[#3CBCC3]' style={{color: elementColor}}>{item.title}</h3>
      <p className='text-16/22 font-[400] text-[#000000]'>{item.desc}</p>
    </div>
    )
  })

  return (
    <div className='w-[50%]'>
      {stage}
    </div>
    // <div className='w-[50%] py-[16px] px-[58px]'>
    //   <h2 className='text-34/48 text-[#3CBCC3] font-bold pb-5 border-b-2 border-[#3CBCC3]'>01</h2>
    //   <Image src={PlanningImg} className='my-5' />
    //   <h3 className='text-24/34 font-[700] text-[#3CBCC3]'>Testing Planning</h3>
    //   <p className='text-16/22 font-[400] text-[#000000]'>We develop comprehensive testing strategies.</p>
    // </div>
  )
}

export default Stage
