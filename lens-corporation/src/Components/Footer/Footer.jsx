import React from 'react'
import { logo, facebook, insta, linkedin, twitter } from "../../Assets/index"

const Footer = ({ darkMode }) => {
    return (
        <>
            <div class={`w-full flex flex-col lg:flex-row justify-between items-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <div class='w-full lg:w-1/4 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-5 px-5 lg:px-10 py-4 lg:ml-5'>
                    <img src={logo} alt="logo" className='w-20 lg:w-20 h-20 lg:h-full '/>
                    <h1 className='text-base lg:text-lg text-gray-700 font-popin text-center lg:text-start'>Tomorrow's Vision, Today!</h1>
                    <div className='flex flex-row justify-center items-center gap-5'>
                        <img src={facebook} alt="fb" className='w-6 h-6' />
                        <img src={insta} alt="in" className='w-6 h-6' />
                        <img src={linkedin} alt="lnk" className='w-6 h-6' />
                        <img src={twitter} alt="twitter" className='w-5 h-5' />
                    </div>
                </div>
                <div class='w-full lg:w-1/4 flex flex-col justify-center items-center md:items-start px-4 py-4'>
                    <h1 className='text-lg lg:text-2xl font-raleway font-semibold mb-3 lg:mb-5'>SITEMAP</h1>
                    <h1 className='text-sm lg:text-base font-raleway'>MakeMyWeb.</h1>
                    <h1 className='text-sm lg:text-base font-raleway'>Services</h1>
                    <h1 className='text-sm lg:text-base font-raleway'>Products</h1>
                    <h1 className='text-sm lg:text-base font-raleway'>Blogs</h1>
                    <h1 className='text-sm lg:text-base font-raleway'>Life at LENS</h1>
                </div>
                <div class='w-full lg:w-1/4 flex flex-col justify-center items-center md:items-start px-4 py-4'>
                    <h1 className='text-lg lg:text-2xl font-raleway font-semibold mb-3 lg:mb-5'>CONNECT</h1>
                    <h1 className='text-sm lg:text-base font-raleway'>+1-517-9300-792</h1>
                    <h1 className='text-sm lg:text-base font-raleway'>+91-9990-736-796</h1>
                    <h1 className='text-sm lg:text-base font-raleway'>solutions@lenscorp.ai</h1>
                </div>
            </div>
            <div class={`w-full flex flex-col lg:flex-row justify-around items-center ${darkMode ? 'bg-black text-white' : 'bg-indigo-950'} py-4 lg:py-8`}>
                <h1 className='text-white text-sm lg:text-base font-popin mb-2 lg:mb-0'>2023 LENS, Inc. All rights reserved.</h1>
                <h1 className='text-white text-sm lg:text-base font-popin'>Code of conduct Sustainability Goals</h1>
            </div>

        </>
    )
}

export default Footer