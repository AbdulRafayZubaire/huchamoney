import React from 'react'

const ImageCard = ({ image, value, percent, heading }) => {
    return (
        <div className='flex justify-center items-center flex-col gap-8 pb-5 mobile:w-full'>
            <img src={image} alt="" />

            <div className="flex flex-col gap-1 w-full justify-center items-center">
                <div className='flex gap-2 items-center'>
                    <span className='text-lighttext text-sm'>{heading}</span>
                    <span className='bg-primary rounded-xl px-2 text-[12px] text-white'>{percent}%</span>
                </div>

                <p className='text-white text-lg'>{value} Reserve</p>
            </div>

        </div>
    )
}

export default ImageCard