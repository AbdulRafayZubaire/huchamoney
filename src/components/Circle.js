import React from 'react'

const Circle = ({ value, unit }) => {
    return (
        <div className='w-fit h-fit relative mobile:mx-auto'>


            <div className='absolute text-white translate-x-[55px] translate-y-16 text-center min-w-[60px]'>
                <h1 className='text-2xl font-bold'>20</h1>
                <p className='text-lighttext'>{unit}</p>
            </div>
            <svg height="190px" width="180px" style={{ 'position': 'relative' }}>
                <defs>
                    <linearGradient id='GradientColor' gradientTransform='rotate(80)'>

                        <stop offset="0%" stopColor='#E63232' />
                        <stop offset="46.87%" stopColor='#4950F6' />
                        <stop offset="100%" stopColor='#59BECF' />
                    </linearGradient>
                </defs>
                <circle cx="-40" cy="-40" r="80" stroke="black" stroke-width="3" strokeLinecap='round' strokeDashoffset={value} transform="rotate(-180 25 25)" />
            </svg>
        </div>
    )
}

export default Circle