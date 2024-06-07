import React from 'react'
import Image from 'next/image'
const TBanner = ({banner}) => {
  return (
    <div className='max-w-[100%]'>
      <Image src={banner} style={{width : "100%"}} alt=''/>
    </div>
  )
}

export default TBanner
