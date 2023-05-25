import React from 'react'

const Circle = ({ value, unit }) => {
    return (
        <>
            <div className='w-fit h-fit relative mobile:mx-auto mobile'>

                <div className='absolute text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center min-w-[60px]'>
                    <h1 className='text-2xl font-bold'>20</h1>
                    <p className='text-lighttext'>{unit}</p>
                </div>
                {/* <svg style={{ 'position': 'relative' }} className='h-[100%] w-[100%]'> */}
                <svg style={{ 'position': 'relative' }} className='h-[170px] w-[170px] tablet:h-[160px] tablet:w-[160px]'>
                    <defs>
                        <linearGradient id='GradientColor' gradientTransform='rotate(80)'>

                            <stop offset="0%" stopColor='#E63232' />
                            <stop offset="46.87%" stopColor='#4950F6' />
                            <stop offset="100%" stopColor='#59BECF' />
                        </linearGradient>
                    </defs>
                    <circle cx="-40" cy="-40" r="70" stroke="#373942" stroke-width="3" strokeLinecap='round' strokeDashoffset="450" fill='none' strokeWidth={7} transform="rotate(-180 25 25)" className='tablet:hidden' />
                    <circle id='circle' cx="-40" cy="-40" r="70" stroke="black" stroke-width="3" strokeLinecap='round' strokeDashoffset={value} transform="rotate(-180 25 25)" className='tablet:hidden' />

                    <circle cx="-30" cy="-30" r="60" stroke="#373942" stroke-width="3" strokeLinecap='round' strokeDashoffset="450" fill='none' strokeWidth={10} transform="rotate(-180 25 25)" className='hidden tablet:block' />
                    <circle id='circle' cx="-30" cy="-30" r="60" stroke="black" stroke-width="3" strokeLinecap='round' strokeDashoffset={value} transform="rotate(-180 25 25)" className='hidden tablet:block' />
                </svg>
            </div>
        </>
    )
}

export default Circle