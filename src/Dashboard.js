import React from 'react'
import LeftItem from './components/LeftItem'
import logo from './images/dollar.svg'
import image1 from './images/1.svg'
import image2 from './images/2.svg'
import image3 from './images/3.svg'
import image4 from './images/4.svg'
import ImageCard from './components/ImageCard'
import Circle from './components/Circle'
import logout from './images/logout.svg'

const Dashboard = () => {
    return (
        <div className='flex gap-4 mobile:flex-col-reverse'>

            {/* //mobile hamburger for left div */}

            <div id="left" className='flex flex-col gap-5 basis-1/4 bg-dark w-full laptop:min-h-screen rounded-xl border border-light py-4 px-3 mobile:h-fit'>

                <LeftItem name="Referral Rewards" value="0 Hucha" border={true} />
                <LeftItem name="Team" value="112" border={true} />
                <LeftItem name="My Referral" value="-" border={true} />
                <LeftItem name="Marketing Wallet" value="0x7c8d1...sda21" border={true} />
                <LeftItem name="Total Deposited" value="321,208,00 HUCHA" border={true} />
                <LeftItem name="Total users" value="11,000" border={false} />

                <button className='bg-primary w-full rounded-lg py-[5px] text-sm text-white'>Connect Wallet</button>

                <button className='flex items-center justify-start gap-2 mt-auto mobile:mt-0 bg-light px-2 py-2 rounded-lg'>
                    <img src={logout} alt="" className='inline-block' />
                    <span className='text-white font-thin text-[12px]'>Log out</span>
                </button>
            </div>

            <div id="right" className=' flex flex-col basis-3/4 w-full gap-4'>

                {/* TOP RIGHT */}
                <div id="reserve" className='flex justify-between items-center bg-dark w-full rounded-xl border border-light py-3 px-3'>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={logo} alt="Logo" />
                        <span className=' text-white'>Reserve Money</span>
                    </div>

                    <span className='bg-light px-2 py-2 rounded-lg text-white text-sm'>0x7c8d1...sda21</span>
                </div>

                {/* IMAGE SECTION */}
                <div id="images" className='flex mobile:flex-wrap gap-3 justify-between items-center bg-dark w-full rounded-xl border border-light py-3 px-3'>

                    <ImageCard image={image1} heading="Available" value="303.2M" percent="15.5" />
                    <ImageCard image={image2} heading="Deposits" value="6309" percent="15.5" />
                    <ImageCard image={image3} heading="Claimed" value="635,987" percent="15.5" />
                    <ImageCard image={image4} heading="Max Payout" value="295.3" percent="15.5" />
                </div>

                {/* DEPOSIT RESERVE SECTION */}
                <div id="images" className='flex flex-col gap-6 justify-between bg-dark w-full rounded-xl border border-light py-3 px-3 pb-6'>

                    <h1 className=' text-white font-semibold'>Deposit Reserve</h1>

                    <div className='flex gap-5 text-sm w-full mobile:flex-col'>
                        {/* 1st input box */}
                        <div id="box" className='bg-light rounded-lg py-3 px-2 w-full'>
                            <span className='text-lighttext px-2 border-r border-lighttext'>Amount</span>
                            <input type="text" className=' bg-transparent outline-none px-2 text-white placeholder-white placeholder:text-sm' placeholder='50 000' />
                        </div>

                        {/* 2nd input box */}
                        <div id="box" className='bg-light rounded-lg py-3 px-2 w-full'>
                            <span className='text-lighttext px-2 border-r border-lighttext'>Referral Address</span>
                            <input type="text" className=' bg-transparent outline-none px-2 text-white placeholder-white placeholder:text-sm' placeholder='Add address' />
                        </div>
                    </div>

                    <div className='bg-primary p-[2px] rounded-lg'>
                        <button className='bg-dark text-white font-thin rounded-lg py-2 w-full'>Approve Deposit</button>
                    </div>
                </div>

                {/* TIME TILL WITHDRAWAL SECTION */}
                <div id="images" className='flex flex-col gap-6 justify-between bg-dark w-full rounded-xl border border-light py-3 px-3 pb-4'>

                    <h1 className=' text-white font-semibold'>Time Till Withdrawal</h1>

                    <div id="circles" className='flex gap-5 justify-between mobile:flex-wrap'>
                        <Circle value={-100} unit="Days" />
                        <Circle value={-120} unit="Hours" />
                        <Circle value={-400} unit="Minutes" />
                        <Circle value={-50} unit="Seconds" />
                    </div>

                    <div id='buttons' className='flex gap-3 text-sm'>
                        <button className='bg-primary w-full rounded-lg py-[4px] text-sm text-white'>Buy Hutcha</button>
                        <div className='bg-primary p-[2px] rounded-lg w-full'>
                            <button className='bg-dark text-white font-thin rounded-lg py-[4px] w-full'>Claim</button>
                        </div>
                        <div className='bg-primary p-[2px] rounded-lg w-full'>
                            <button className='bg-dark text-white font-thin rounded-lg py-[4px] w-full'>Compound</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Dashboard