import React from 'react'
import Image from 'next/image'

const Page5 = () => {
    return (
        <div className='bg-cyan-500 h-[60vh] sm:h-[100vh] flex pl-24 justify-evenly'>
            <div className='flex flex-col justify-between '>
                <div className='-mt-24 animate-top'>
                    <Image priority src={'/assets/page5a.png'} height={330} width={200} />
                </div>
                <div className='-mb-12 animate-bottom'>
                    <Image priority src={'/assets/page5d.png'} height={330} width={200} />
                </div>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='-mt-4 animate-top'>
                    <Image priority src={'/assets/page5b.png'} height={330} width={200} />
                </div>
                <div className='-mb-28 animate-bottom'>
                    <Image priority src={'/assets/page5e.png'} height={330} width={200} />
                </div>
            </div>
            <div className='flex items-center animate-right'>
                <Image priority src={'/assets/page5c.png'} height={400} width={220} />
            </div>
        </div>

    )
}

export default Page5