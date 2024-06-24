import React from 'react'

const AboutCard = ({title, desc, bgColor, padding, userBg, gifShow}) => {

  return (
    <div className='mb-[16px] h-[396px] w-full md:max-w-[440px] md:h-[440px] sm:rounded-[8px] bg-S1-500 flex flex-col justify-between items-center relative py-[48px] px-[33px] text-center z-20' style={{backgroundColor: bgColor}}>
      <div className={`user-top w-[150px] h-[150px] absolute bottom-[150px] bg-P2-900 rounded-[50%] ${gifShow ? "visible" : "hidden"}`} style={{ backgroundImage: `url("https://s3-alpha-sig.figma.com/img/e58c/f40f/f538277d15aefa0c3fe8c3cf6245f43e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjwAWTh5mGBevvfKgTQOrJBpnGO7YTLRXld-dVL8kpb-aKWVr~m6UAWbYX3gjQRSOHAde3UNnpH0pWKkTdb4QyH82ynjqbcUiRiKPtn88cR8AxAliJZFfMjQxvYHrFI26RcH5LfxyaQGrrlfFFaEaA4qyqzZJH1l~G9QbfRFnVmArCXkjJaza9gAW5ViZggsrACckOWGZKyR8zbJbu7qb2AgGWIE0R-bWmmGwo3R-P5~mGxqVzlReYqG-ubleJiSV~EbouF-KSapqPFY0qYtFOoEi-7GoI7nBzn0BUAL3uPJ8QUwJcjhPd7~UBMi5AM0Yvju3sWtxSGFRfqGddfPrQ__")`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
      <div className={`user-top w-[150px] h-[150px] absolute bottom-[150px] ${gifShow ? "hidden" : "visible"}`} style={{ backgroundImage: `url("https://s3-alpha-sig.figma.com/img/4f70/e77e/e39dd1e99778cec55ba02c35cd10e30d?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RseYMDF9~FFkuuf3~ieljGZDkVAZh7YVW6xnSE4-LAfq6zR5JppnnFHanQmED-zTq9kJylBkVgEiPBkkjunC8CtshAI7Um8hKIvFEXFZ94Nb5x7qTajZuX9bvFMYdb~ix9byJIqubjzFW~OkUKKBY-M5NBbzPa4RiR-mZYvsl6mCcrHwvVw5qIJ7aQovO5i86q-xgt-nWkbbWX5eUJfEH9qUyqHD62a6alyEt7oSOfElhvMQzgyQGkzpl~rajtAc5jkcMIl4updpqLVvGJBgb3EahXJuGwLE90Jm-ujehjAwY3ZjRD1HR36oAXKKHIRhvM2vKCOfNCi~iNu1JcSZrQ__")`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
      <div className="user-top w-[108px] h-[108px] absolute bottom-[60px] bg-P2-900 rounded-[50%]" style={{backgroundColor: userBg}}></div>
      <h3 className='text-18/25 sm:text-[20px] md:text-24/34 font-bold text-white'>{title}</h3>
      <p className='text-14/18 md:text-16/22 font-normal text-white z-20' style={{paddingBottom: padding}}>{desc}</p>
    </div>
  )
}

export default AboutCard
