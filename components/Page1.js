import Image from 'next/image'
import React from 'react'

const Page1 = () => {
  return (
    <div className='bg-slate-200 h-[60vh] sm:h-[100vh] flex justify-center '>
      <div className='animate-top flex items-center'>
        <Image priority src={'/assets/page1a.png'} height={440} width={260} />
      </div>
      <div className='animate-bottom flex items-center'>
        <Image priority src={'/assets/page1b.png'} height={440} width={260} />
      </div>
    </div>
  )
}

export default Page1