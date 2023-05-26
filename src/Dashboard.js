import React, { useEffect, useRef, useState } from 'react'
import LeftItem from './components/LeftItem'
import logo from './images/dollar.svg'
import image1 from './images/1.svg'
import image2 from './images/2.svg'
import image3 from './images/3.svg'
import image4 from './images/4.svg'
import mimage1 from './images/m1.svg'
import mimage2 from './images/m2.svg'
import mimage3 from './images/m3.svg'
import mimage4 from './images/m4.svg'
import ImageCard from './components/ImageCard'
import Circle from './components/Circle'
import logout from './images/logout.svg'
import referralsIcon from './images/referrals.svg'
import referralsActiveIcon from './images/referralsActive.svg'
import depositIcon from './images/deposits.svg'
import depositActiveIcon from './images/depositsActive.svg'
import statsIcon from './images/stats.svg'
import statsActiveIcon from './images/statsActive.svg'



var days, seconds, hours, minutes;
var today = new Date()
const targetTime = new Date().setDate(today.getDate() + 20);

const Dashboard = () => {

    const [stats, setStats] = useState(true);
    const [deposits, setDeposits] = useState(false);
    const [referrals, setReferrals] = useState(false);

    const [currentTime, setCurrentTime] = useState(new Date(new Date().setDate(today.getDate() + 30)));

    const timeBetween = targetTime - currentTime;
    seconds = Math.floor((timeBetween / 1000) % 60);
    minutes = Math.floor((timeBetween / 1000 / 60) % 60);
    hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
    days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleNavigate = (e) => {
        console.log(e.target.id);
        const id = e.target.id || e.target.parentNode.id
        switch (id) {
            case 'statsNav':
                setStats(true);
                setDeposits(false);
                setReferrals(false);
                break;
            case 'depositsNav':
                setStats(false);
                setDeposits(true);
                setReferrals(false);
                break;
            case 'referralsNav':
                setStats(false);
                setDeposits(false);
                setReferrals(true);
                break;
            default:
                break;
        }
    }


    return (
        <div className='flex gap-4 mobile:flex-col w-full mobile:items-center'>

            {/* //mobile hamburger for left div */}
            <div id="reserve" className='justify-between items-center bg-dark w-full rounded-xl border border-light py-3 px-3 hidden mobile:flex'>
                <div className='flex gap-2 items-center justify-center'>
                    <img src={logo} alt="Logo" />
                    <span className=' text-white mobile:text-lg'>Reserve Money</span>
                    {/* <span className=' text-white font-cent mobile:text-xsm mobile:leading-5'>Reserve Money</span> */}
                </div>

                <button className='bg-primary w-fit px-2 rounded-lg py-[5px] text-sm text-white font-thin'>Connect Wallet</button>
            </div>

            <div id="left" className={`flex flex-col gap-5 basis-1/4 bg-dark w-full laptop:min-h-screen rounded-xl border border-light py-4 px-3 mobile:${referrals ? 'h-fit' : 'hidden'}`}>

                <LeftItem name="Referral Rewards" value="0 Hucha" border={true} />
                <LeftItem name="Team" value="112" border={true} />
                <LeftItem name="My Referral" value="-" border={true} />
                <LeftItem name="Marketing Wallet" value="0x7c8d1...sda21" border={true} />
                <LeftItem name="Total Deposited" value="321,208,00 HUCHA" border={true} />
                <LeftItem name="Total users" value="11,000" border={false} />

                <button className='bg-primary w-full rounded-lg py-[5px] text-sm text-white font-thin'>Connect Wallet</button>

                <button className='flex items-center justify-start gap-2 mt-auto mobile:mt-0 bg-light px-2 py-2 rounded-lg mobile:hidden'>
                    <img src={logout} alt="" className='inline-block' />
                    <span className='text-white font-thin text-[12px]'>Log out</span>
                </button>
            </div>

            <div id="right" className='flex flex-col basis-3/4 w-full gap-4'>

                {/* TOP RIGHT */}
                <div id="reserve" className='flex justify-between items-center bg-dark w-full rounded-xl border border-light py-3 px-3 mobile:hidden'>
                    <div className='flex gap-2 items-center justify-center'>
                        <img src={logo} alt="Logo" />
                        <span className=' text-white mobile:text-lg'>Reserve Money</span>
                        {/* <span className=' text-white font-cent mobile:text-xsm mobile:leading-5'>Reserve Money</span> */}
                    </div>

                    <span className='bg-light px-2 py-2 rounded-lg text-white text-sm'>0x7c8d1...sda21</span>
                </div>

                {/* IMAGE SECTION */}
                <div id="images" className='flex gap-3 justify-between items-center bg-dark w-full rounded-xl border border-light py-3 px-3 tablet:hidden'>

                    <ImageCard image={image1} heading="Available" value="303.2M" percent="15.5" />
                    <ImageCard image={image2} heading="Deposits" value="6309" percent="15.5" />
                    <ImageCard image={image3} heading="Claimed" value="635,987" percent="15.5" />
                    <ImageCard image={image4} heading="Max Payout" value="295.3" percent="15.5" />
                </div>

                {/* For mobile screen */}
                <div id="images" className={`tablet:grid-cols-2 gap-3 justify-between items-center bg-dark w-full rounded-xl border border-light py-3 px-3 hidden tablet:${stats ? 'grid' : 'hidden'}`}>

                    <ImageCard image={mimage1} heading="Available" value="303.2M" percent="15.5" />
                    <ImageCard image={mimage2} heading="Deposits" value="6309" percent="15.5" />
                    <ImageCard image={mimage3} heading="Claimed" value="635,987" percent="15.5" />
                    <ImageCard image={mimage4} heading="Max Payout" value="295.3" percent="15.5" />
                </div>

                {/* DEPOSIT RESERVE SECTION */}
                <div id="images" className={`flex flex-col gap-6 justify-between bg-dark w-full rounded-xl border border-light py-3 px-3 pb-6 mobile:${deposits ? 'flex' : 'hidden'} h-30`}>

                    <h1 className=' text-white mobile:text-lg'>Deposit Reserve</h1>
                    {/* <h1 className=' text-white font-cent mobile:text-xsm'>Deposit Reserve</h1> */}

                    <div className='flex gap-5 text-sm w-full tablet:flex-col'>
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
                <div id="images" className={`flex-col gap-2 justify-between bg-dark w-full rounded-xl border border-light py-3 px-3 pb-4 mobile:${deposits ? 'flex' : 'hidden'} mobile:mb-20`}>

                    <h1 className='text-white mobile:text-lg'>Time Till Withdrawal</h1>
                    {/* <h1 className=' text-white font-cent mobile:pr-10'>Time Till Withdrawal</h1> */}

                    <div id="circles" className='flex tablet:grid tablet:grid-cols-2 tablet:justify-center justify-between tablet:m-auto gap-4'>
                        <Circle value={-((days / 20) * 450)} total={450} unit="Days" count={days} />
                        <Circle value={-((hours / 24) * 450)} total={450} unit="Hours" count={hours} />
                        <Circle value={-((minutes / 60) * 450)} total={450} unit="Minutes" count={minutes} />
                        <Circle value={-((seconds / 60) * 450)} total={450} unit="Seconds" count={seconds} />
                    </div>

                    <div id='buttons' className='flex tabletOnly:flex-col flex-row gap-3 text-sm'>
                        <div className='bg-primary p-[2px] rounded-lg w-full'>
                            <button className='bg-dark hover:bg-primary w-full rounded-lg py-[4px] text-sm text-white' >Buy Hutcha</button>
                        </div>
                        <div className='bg-primary p-[2px] rounded-lg w-full'>
                            <button className='bg-dark hover:bg-primary text-white font-thin rounded-lg py-[4px] w-full'>Claim</button>
                        </div>
                        <div className='bg-primary p-[2px] rounded-lg w-full'>
                            <button className='bg-dark hover:bg-primary text-white font-thin rounded-lg py-[4px] w-full'>Compound</button>
                        </div>
                    </div>

                </div>

                {/* LOGOUT SECTION */}

                <div id="logout" className={`justify-between items-center bg-dark w-full rounded-xl border border-light py-4 px-4 hidden mobile:${referrals ? 'flex' : 'hidden'} mobile:mb-20`}>
                    <button className='flex items-center justify-start gap-2 mt-auto mobile:mt-0 bg-light px-2 py-2 rounded-lg w-full'>
                        <img src={logout} alt="" className='inline-block' />
                        <span className='text-white font-thin text-[12px]'>Log out</span>
                    </button>
                </div>


            </div>
            {/* Navigation Section */}
            <div className={`justify-around items-center bg-dark w-[92%] rounded-xl border border-light py-2 px-4 hidden mobile:flex text-white fixed bottom-0`}>

                <button id="statsNav" className='flex flex-col justify-between gap-2 items-center h-full cursor-pointer' onClick={(e) => handleNavigate(e)}>
                    <img src={statsIcon} alt="stats-icon" className={`${!stats ? 'block' : 'hidden'}`} />
                    <img src={statsActiveIcon} alt="stats-icon" className={`${stats ? 'block' : 'hidden'}`} />
                    <p className='text-sm text-lighttext'>Stats</p>
                </button>
                <button id="depositsNav" className='flex flex-col justify-between gap-2 items-center h-full cursor-pointer' onClick={(e) => handleNavigate(e)}>
                    <img src={depositIcon} alt="stats-icon" className={`${!deposits ? 'block' : 'hidden'} h-3`} />
                    <img src={depositActiveIcon} alt="stats-icon" className={`${deposits ? 'block' : 'hidden'} h-3`} />
                    <p className='text-sm text-lighttext'>Deposits</p>
                </button>
                <button id="referralsNav" className='flex flex-col justify-between gap-2 items-center h-full cursor-pointer' onClick={(e) => handleNavigate(e)}>
                    <img src={referralsIcon} alt="stats-icon" className={`${!referrals ? 'block' : 'hidden'}`} />
                    <img src={referralsActiveIcon} alt="stats-icon" className={`${referrals ? 'block' : 'hidden'}`} />
                    <p className='text-sm text-lighttext'>Referrals</p>
                </button>
            </div>
        </div>
    )
}

export default Dashboard