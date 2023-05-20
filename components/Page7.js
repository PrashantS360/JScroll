import React from 'react'
import Image from 'next/image'

const Page7 = () => {
    return (
        <div className='flex justify-center bg-green-500 h-[60vh] sm:h-[100vh] items-end'>
            <div className='-mr-10 z-10 animate-left'>
                <Image priority src={'/assets/page7a.png'} width={260} height={400} />
            </div>
            <div className='-ml-8 animate-right'>
                <Image priority src={'/assets/page7b.png'} width={220} height={420} />
            </div>
        </div>
    )
}

export default Page7