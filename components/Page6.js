import React from 'react'
import Image from 'next/image'

const Page6 = () => {
    return (
        <div className={`bg-[url('/assets/page6a.png')] h-[60vh] sm:h-[100vh] flex justify-center items-center bg-hero bg-no-repeat bg-cover bg-center bg-fixed`}>
            <div className='animate-bottom'>
            <Image priority className='w-full' src={'/assets/page6b.png'} width={1500} height={1200}/>
            </div>
        </div>
    )
}

export default Page6