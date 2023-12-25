import React from 'react'

import { corepartner } from './common/Helper'

const Core = () => {
  return (
    <>
      <div className='bg-[linear-gradient(102deg,#20187B_14.35%,#843AB2_108.67%)]'>
<div className='max-w-[1450px]   w-full mx-auto py-[80px] md:py-[136px] px-3 lg:px-0'>
  <h1 className=' font-montserrat font-bold text-[39px] sm:text-[59px] text-white text-center'>Core Partner</h1>
<p className='max-w-[618px] w-full mx-auto text-center  font-montserrat  font-medium text-[12px] sm:text-[14px] leading-[20px] sm:leading-[32px] text-white mt-1'>Adashe is a seamless fusion of Tradefi, DeFi, and Data systems, It is the future of Money, It is available across multiple Blockchains.</p>
<div className='flex gap-[20px] lg:gap-[34px] mt-[16px] md:mt-[32px] md:p-[16px_0px_15px_15px] flex-wrap justify-center'>
{corepartner.map((item, index) => (
<div className='w-[300px] sm:w-[452px] h-[100px] sm:h-[132px] rounded-[8px] bg-[rgba(106,89,191,0.35)] backdrop-blur-[(6.650000095367432px)] p-[13px_0px_13px_13px] flex items-center' key={index}>
<div>
<img src={item.img} alt="travel icon " className='w-[70px] sm:w-[106px] h-[70px] sm:h-[106px] rounded-[10px]' />
</div>
<div className='ml-[18px] sm:ml-[24px]'>
<h1 className=' font-montserrat font-bold text-[16px] sm:text-[20px] text-white leading-[22px] sm:leading-[44px] '>{item.name}</h1>
<p className=' font-montserrat font-medium text-white text-[12px] sm:text-[14px] leading-[18px] sm:leading-[26px]'>{item.decs}</p>
</div>
</div>
  ))}
</div>
</div>
      </div>
    </>
  )
}

export default Core
