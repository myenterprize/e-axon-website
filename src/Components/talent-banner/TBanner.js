import React from 'react'
import Image from 'next/image'
const TBanner = ({banner}) => {
  return (
    <div className='w-[770px] h-[296px]'>
      <Image src={banner} style={{width : "100%"}}/>
    </div>
  )
}

export default TBanner
