import React from 'react'

const LeftItem = ({name, value, border}) => {
    return (
        <div className={`flex gap-5 justify-between items-center py-3 ${border && 'border-b border-light'} `}>
            <span className=' text-lighttext text-sm min-w-fit'>{name}</span>
            <span className='text-white text-md text-right overflow-hidden'>{value}</span>
        </div>
    )
}

export default LeftItem