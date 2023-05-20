import React from 'react'
import Image from 'next/image'

const Page3 = () => {
    return (
        <div className='bg-[#01014a] h-[60vh] sm:h-[100vh] pl-6 flex justify-evenly'>
            <div className='flex items-end animate-bottom'>
                <Image priority src={'/assets/page3a.png'} height={440} width={260} />
            </div>
            <div className='-mt-14 flex items-start animate-top'>
                <Image priority src={'/assets/page3b.png'} height={400} width={220} />
            </div>
        </div>
    )
}

export default Page3