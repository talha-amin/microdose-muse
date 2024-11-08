import Image from 'next/image'
import React from 'react'

const IamAmanda = () => {
    return (
        <>
            <div>
                <Image src='/assets/13810786_5350939 1 (1).svg' alt='line' width={10000} height={80} />
            </div>
            <div className='bg-iam-amanda w-full py-[40px] md:py-[80px] relative overflow-hidden'>
                {/* Overlay */}
                <div className='absolute inset-0 bg-[#216351] z-10 bg-opacity-60' />
                <div className='relative z-20 w-full text-white px-4 md:px-[40px] lg:px-[100px]'>
                    <div className='flex items-center justify-between gap-10'>
                        <div data-aos="fade-up">
                        <h1 className="text-[20px] sm:text-[40px] leading-[40px] font-alethia font-medium antialiased font-[400]">Hi, I’m Amanda (aka: Panda)</h1>
                            <p className='mt-5 sm:mt-8 font-poppins text-[18px] sm:text-[22px] sm:leading-[33px]  max-w-[945px] font-medium antialiased font-[200]'>I guide people to imagine, and then live, the magical and expansive path. <b>My offering is combining the extraordinary power of microdosing with mindset and transformation coaching.</b></p>
                            <p className='mt-2 sm:mt-4 font-poppins text-[18px] sm:text-[22px] sm:leading-[33px]  max-w-[945px] font-medium antialiased font-[200]'>Through safe and supported microdose protocols, paired with deep, transformative coaching, I help you unlock profound and lasting change in your life.</p>
                        </div>
                        <Image src='/assets/leaf-im.svg' alt='leaf-im' width={193} height={233} className='sm:block hidden' data-aos="zoom-in"/>
                    </div>
                    <div data-aos="fade-up">
                    <div className='mt-10 sm:mt-[90px] mx-auto w-full max-w-[936px]'>
                        <Image src='/assets/female-image.svg' alt='female-image' width={936} height={417} />
                    </div>
                    <h2 className='mt-6 sm:mt-12 max-w-[607px] mx-auto w-full text-[22px] sm:text-[30px] sm:leading-[48px] font-alethia font-normal italic text-center'data-aos="fade-up">Ready to create profound shifts in your thinking, habits, and daily experience?</h2>
                    <div className='flex items-center justify-center w-full mt-4 sm:mt-6 ' >
                        <button className='bg-[#DCB88C] w-[200px] sm:w-[264px] h-[40px] sm:h-[50px] rounded-lg text-[14px] sm:text-[16px] font-medium'>Book A Free Consultation</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IamAmanda