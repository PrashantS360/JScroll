import React from 'react'
import Image from 'next/image'

const Page3 = () => {
    return (
        <div className='bg-gray-900 sm:h-[100vh] h-[60vh] flex'>
            <div className='w-1/2 flex justify-between flex-col '>
                <div className='flex justify-start animate-left'>
                    <Image priority src={'/assets/page4a.png'} height={200} width={400} />
                </div>
                <div className='flex justify-evenly z-50 animate-left'>
                    <Image priority src={'/assets/page4d.png'} height={360} width={260} />
                </div>
            </div>
            <div className='flex flex-col justify-between w-1/2 '>
                <div className='flex justify-end animate-right'>
                    <Image priority src={'/assets/page4c.png'} height={100} width={170} />
                </div>
                <div className='flex justify-start animate-right'>
                    <Image priority src={'/assets/page4b.png'} height={380} width={210} />
                </div>
                <div className='flex justify-end animate-right'>
                    <Image priority src={'/assets/page4e.png'} height={250} width={350} />
                </div>
            </div>
        </div>
    )
}

export default Page3