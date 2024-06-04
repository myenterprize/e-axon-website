import React from 'react'
import Image from 'next/image'
import AWSLogo from '@/assets/svgs/AWS.svg'
import HTMLLogo from '@/assets/svgs/HTML.svg'
import JavaScriptLogo from '@/assets/svgs/JavaScript.svg'
import JSLogo from '@/assets/svgs/JS.svg'
import ReactJsLogo from '@/assets/svgs/React-JS.svg'

const Technology = () => {
  return (
    <div className='w-[500px] h-[80px] flex justify-start items-center gap-5'>
      <Image src={AWSLogo} style={{width:"67px", height:"80px"}}/>
      <Image src={HTMLLogo} style={{width:"67px", height:"80px"}}/>
      <Image src={JavaScriptLogo} style={{width:"67px", height:"80px"}}/>
      <Image src={JSLogo} style={{width:"67px", height:"80px"}}/>
      <Image src={ReactJsLogo} style={{width:"67px", height:"80px"}}/>
    </div>
  )
}

export default Technology
