import Image from 'next/image'
import React from 'react'

const Page2 = () => {
    return (
        <div className='bg-[#11016b] h-[60vh] sm:h-[100vh] pl-6 flex justify-evenly'>
            <div className='flex items-end animate-bottom'>
                <Image priority src={'/assets/page2a.png'} height={440} width={260} />
            </div>
            <div className=' flex items-start animate-top'>
                <Image priority src={'/assets/page2b.png'} height={440} width={260} />
            </div>
        </div>
    )
}

export default Page2