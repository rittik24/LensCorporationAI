import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import {
    home1st, home2nd, home3rd, homevideo, home2ndvideo, green, red, blue, yellow, co1,
    co2,
    co3,
    grov,
    map
} from '../../Assets/index';
import { MdCheck } from "react-icons/md";
// import { VerticalStepper, Step } from '@keyvaluesystems/react-vertical-stepper';

const Home = ({ darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };
    const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
    };
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    const handleClickOutside1 = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen1(false);
        }
    };
    const handleClickOutside2 = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen2(false);
        }
    };
    const handleClickOutside3 = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen3(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside1);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside1);
        };
    }, []);
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside2);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside2);
        };
    }, []);
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside3);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside3);
        };
    }, []);
    return (
        <div className='flex flex-col w-full bg-gradient-to-r from-gr-4 via-white to-gr-5'>
            {/* 1st div */}
            <div className='flex flex-row items-center justify-between w-full h-full py-12 px-16'
                style={{
                    backgroundImage: `url(${darkMode ? "homevideo" : home1st})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className='w-2/5 h-96 flex flex-col justify-start items-start gap-8 ml-20 px-4 py-4 '>
                    <h1 className='text-5xl text-black font-medium text-start font-sans'>We are at the forefront of AI</h1>
                    <h1 className='text-xl text-black font-normal text-start font-popin'>
                        From Conserving Wildlife to Automatically Generating Caricatures<span className="font-bold">– We Do It All</span>
                    </h1>
                    <button className='bg-black text-white text-xl font-medium py-3 px-6 rounded-xl hover:bg-white hover:text-black hover:border border-black'>Learn More</button>
                </div>
            </div>
            {/* 2nd div */}
            <div className='flex flex-col justify-center items-center w-full items-center py-4 bg-fcfbf7'>
                <div className='flex flex-col justify-center items-center py-10 gap-2'>
                    <h1 className='text-4xl font-medium'>About Us</h1>
                    <div className='w-40 h-2 bg-gradient-to-r from-indigo-950 to-white rounded-xl'></div>
                </div>
                <div className='flex flex-row justify-between items-center w-4/5 mx-auto py-6 px-4 rounded-xl bg-blue-100  transform hover:scale-110 transition-transform'>
                    <div className='flex flex-col justify-center items-start w-2/4 gap-10 px-8 py-4 '>
                        <h1 className='text-4xl text-black font-semibold text-start'>Welcome To LENS</h1>
                        <h1 className='text-lg text-gray-500 font-normal font-popin text-start'>We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.</h1>
                        <button className='bg-transparent text-black border border-black text-xl font-medium py-3 px-6 rounded-xl hover:bg-black hover:text-white '>Learn More</button>

                    </div>
                    <div>
                        <img src={home2nd} alt="home" className='w-96 h-96' />
                    </div>
                </div>

            </div>
            {/* 3rd div */}
            <div className='flex flex-col justify-center items-center w-full items-center py-4 bg-gradient-to-r from-white to-sky-100 bg-fcfbf7'>
                <div className='flex flex-col justify-center items-center py-10 gap-2'>
                    <h1 className='text-2xl font-semibold'>SERVICES</h1>
                    <div className='w-20 h-1 bg-gradient-to-r from-blue-700 to-white rounded-xl'></div>
                </div>
                <div className='flex w-4/5 justify-center items-center py-4 px-4'>
                    <h1 className='text-center text-6xl font-medium'>We provide Artificial Intelligence Services</h1>
                </div>
                <div className='flex flex-col w-4/5 justify-center items-center gap-5 mt-10 '>
                    <div className='flex flex-row justify-center items-center gap-5 px-8'>
                        <div class='group relative flex flex-col justify-center items-start gap-10 bg-white rounded-xl w-2/4 h-96 hover:bg-transparent hover:bg-opacity-100 hover:border border-black flex-1'>
                            <div class='flex flex-row justify-start items-center px-8 py-6'>
                                <h1 class="text-gray-700 text-8xl font-semibold font-normal leading-10 top-5 left-5 opacity-20 transition duration-300">0</h1>
                                <h1 class="text-gray-200 text-8xl font-semibold font-normal leading-10 top-5 left-5 opacity--20 transition duration-300 group-hover:text-green-400">1</h1>
                                <h1 class="biometrics text-3xl font-bold text-green-500 leading-normal ml-[-20px] mt-[10px] transition duration-300 group-hover:ml-0">Biometrics</h1>
                            </div>
                            <div class='px-8 w-full py-4'>
                                <h1 class="text-gray-600 text-lg font-popin font-medium leading-9">Academia-backed & In-house <br /> researched State-of-the-Art Face, <br /> Fingerprint, and Iris Recognition SDKs. <br /> Enable real-time automated Biometric <br /> applications on edge devices even <br />without an active internet connection.</h1>
                            </div>
                        </div>

                        <div class='group relative flex flex-col justify-center items-start gap-10 bg-white rounded-xl w-2/4 h-96 hover:bg-transparent hover:bg-opacity-100 hover:border border-black flex-1'>
                            <div class='flex flex-row justify-start items-center px-8 py-6'>
                                <h1 class="text-blue-700 text-8xl font-semibold font-normal leading-10 top-5 left-5 opacity-20 transition duration-300">0</h1>
                                <h1 class="text-blue-200 text-8xl font-semibold font-normal leading-10 top-5 left-5 opacity--20 transition duration-300 group-hover:text-blue-400">2</h1>
                                <h1 class="biometrics text-3xl font-bold text-blue-500 leading-normal ml-[-20px] mt-[10px] transition duration-300 group-hover:ml-0">Image Analysis</h1>
                            </div>
                            <div class='px-8 w-full py-4'>
                                <h1 class="text-gray-600 text-lg font-popin font-medium leading-9">Outsource the overly complex image <br /> analysis work to our intelligent machines <br /> that adaptively learn, so you can focus <br /> on making the best decisions for your business.</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row justify-center items-center gap-5 px-8'>
                        <div class='group relative flex flex-col justify-center items-start gap-10 bg-white rounded-xl w-2/4 h-96 hover:bg-transparent hover:bg-opacity-100 hover:border border-black flex-1'>
                            <div class='flex flex-row justify-start items-center px-8 py-6'>
                                <h1 class="text-red-700 text-8xl font-semibold font-normal leading-10 top-5 left-5 opacity-20 transition duration-300">0</h1>
                                <h1 class="text-red-200 text-8xl font-semibold font-normal leading-10 top-5 left-5 opacity--20 transition duration-300 group-hover:text-red-400">3</h1>
                                <h1 class="biometrics text-3xl font-bold text-red-500 leading-normal ml-[-20px] mt-[10px] transition duration-300 group-hover:ml-0">Cross Media Translation</h1>
                            </div>
                            <div class='px-8 w-full py-4'>
                                <h1 class="text-gray-600 text-lg font-popin font-medium leading-8">Will something like Siri or Alexa enhance <br /> your business? We can deliver text-to <br />-speech, text-to-image, speech-to-text,<br /> speech-to-image, speech-to-image, <br /> image-to-text and image-to-speech <br />solutions for maximum convenience.</h1>
                            </div>
                        </div>
                        <div class='group relative flex flex-col justify-center items-start gap-10 bg-white rounded-xl w-2/4 h-96 hover:bg-transparent hover:bg-opacity-100 hover:border border-black flex-1'>
                            <div class='flex flex-row justify-start items-center px-8 py-6'>
                                <h1 class="text-orange-700 text-8xl font-semibold font-normal leading-10 top-5 left-5 opacity-20 transition duration-300">0</h1>
                                <h1 class="text-orange-200 text-8xl font-semibold font-normal leading-10 top-5 left-5 opacity--20 transition duration-300 group-hover:text-orange-400">4</h1>
                                <h1 class="biometrics text-3xl font-bold text-orange-500 leading-normal ml-[-20px] mt-[10px] transition duration-300 group-hover:ml-0">3D Modelling and Design</h1>
                            </div>
                            <div class='px-8 w-full py-4'>
                                <h1 class="text-gray-600 text-lg font-popin font-medium leading-9">Outsource the overly complex image <br /> analysis work to our intelligent machines <br /> that adaptively learn, so you can focus <br /> on making the best decisions for <br /> your business.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4th div */}
            <div className='TruAi'>
                <div className='TruAibox flex flex-row justify-between items-center'>
                    <div className=' flex justify-center items-center py-4 px-10 '>
                        <img src={home3rd} alt="home" />
                    </div>
                    <div className='flex flex-col h-full w-1/3 justify-center itemms-center p-4 gap-5 '>
                        <div className='flex justify-center items-center gap-5'>
                            <h1 className='text-white text-start font-bold text-5xl'>Meet</h1>
                            <div className='flex flex-col justify-start items-start mt-4'>
                                <h1 className="text-5xl font-bold relative overflow-hidden">
                                    <span>
                                        <span className="animate-color-change ">Tru-Ai</span>
                                    </span>
                                </h1>
                                <img
                                    alt="underline"
                                    loading="lazy"
                                    width="100"
                                    height="24"
                                    src="https://lenscorp.ai/_next/static/media/underline.27e9f7f7.svg"
                                    style={{ color: 'transparent' }}
                                />
                            </div>
                        </div>
                        <h1 className='text-white text-center text-2xl'>Design. Create. Deploy.</h1>
                        <h1 className="text-xl text-white text-center relative overflow-hidden">
                            <span className="relative">
                                <span className="animate-color-change">___the Future of AI | Power to EDIT</span>
                            </span>
                        </h1>
                        <h1 className='text-white text-center'>Based On Your Website & Traffic Trends, Tru-AI Optimises Your Website</h1>
                        <div className='w-2/4 mx-auto flex justify-center items-center'>
                            <button className=' w-full text-center font-semibold py-4 px-4 bg-transparent rounded-2xl hover:text-black hover:bg-white text-white border border-white'>Learn More</button>
                        </div>
                    </div>
                    <div className='w-1/3 h-52 rounded-l-full  relative overflow-hidden'>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src={home2ndvideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>


                </div>
            </div>
            {/* 5th div */}
            <div className='flex flex-col justify-center items-center w-full items-center py-4'>
                <div className='flex flex-col justify-center items-center py-5 gap-2'>
                    <h1 className='text-2xl font-semibold'>WHY CHOOSE LENS</h1>
                    <div className='w-20 h-1 bg-gradient-to-r from-indigo-950 to-white rounded-xl'></div>
                </div>
                <div className='flex flex-col w-3/4 justify-center items-center py-6 px-4'>
                    <h1 className='text-center text-6xl font-normal'>AI-driven solutions backed by sciences</h1>
                    <h1 className='text-center text-xl font-normal mt-10 font-popin text-gray-600'>Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 pb-6 mt-10'>
                    <div className='w-full flex flex-row justify-start items-center gap-28'>
                        <div className='flex flex-row gap-2'>
                            <MdCheck className='w-6 h-6 text-gray-700' />
                            <h1 className='text-xl font-popin text-gray-700'>State-of-the-art solutions</h1>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <MdCheck className='w-6 h-6 text-gray-700' />
                            <h1 className='text-xl font-popin text-gray-700'>Lifetime support & upgrades</h1>
                        </div>
                    </div>
                    <div className='w-full flex flex-row justify-start items-center gap-56'>
                        <div className='flex flex-row gap-2'>
                            <MdCheck className='w-6 h-6 text-gray-700' />
                            <h1 className='text-xl font-popin text-gray-700'>Fast & Efficient</h1>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <MdCheck className='w-6 h-6 text-gray-700' />
                            <h1 className='text-xl font-popin text-gray-700'>Plug-and-Play</h1>
                        </div>
                    </div>
                    <div className='w-full flex flex-row justify-start items-center gap-28'>
                        <div className='flex flex-row gap-2'>
                            <MdCheck className='w-6 h-6 text-gray-700' />
                            <h1 className='text-xl font-popin text-gray-700'>No extra computation fee</h1>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <MdCheck className='w-6 h-6 text-gray-700' />
                            <h1 className='text-xl font-popin text-gray-700'>24x7 Progress Monitoring</h1>
                        </div>
                    </div>
                    <div className='w-full flex flex-row justify-start items-center gap-52'>
                        <div className='flex flex-row gap-2'>
                            <MdCheck className='w-6 h-6 text-gray-700' />
                            <h1 className='text-xl font-popin text-gray-700'>No licensing fee</h1>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <MdCheck className='w-6 h-6 text-gray-700' />
                            <h1 className='text-xl font-popin text-gray-700'>Incremental Updates</h1>
                        </div>
                    </div>
                </div>

            </div>
            {/* 6th div */}
            <div className='w-full flex flex-row justify-between items-center px-4 gap-3 mt-5'>
                <div className='w-1/4 h-96 flex flex-col justify-center items-start rounded-2xl bg-white px-6 hover:gradient'>
                    <h1 className='text-2xl text-black font-semibold text-start'>Exclusive Rights</h1>
                    <div className="image-container">
                        <img src={green} alt="green" className='image mt-10 mb-10 p-4' />
                    </div>
                    <h1 className='text-sm text-gray-700 font-popin text-start'>Our mission is to make an impact in empowering human society with AI. Hence, all Intellectual Property Rights belongs to you.</h1>
                </div>

                <div className='w-1/4 h-96 flex flex-col justify-center items-start rounded-2xl bg-white px-6 hover:gradientb'>
                    <h1 className='text-2xl text-black font-semibold text-start'>Research Driven</h1>
                    <div className="image-container">
                        <img src={blue} alt="blue" className='image mt-10 mb-10 p-4' />
                    </div>
                    <h1 className='text-sm text-gray-700 font-popin text-start'>We regularly benchmark our solutions via comparing industry-vide evaluations so our partners only get the best that AI can offer.</h1>
                </div>

                <div className='w-1/4 h-96 flex flex-col justify-center items-start rounded-2xl bg-white px-6 hover:gradientr'>
                    <h1 className='text-2xl text-black font-semibold text-start'>Plug-and-Play</h1>
                    <div className="image-container">
                        <img src={red} alt="red" className='image mt-10 mb-10 p-4' />
                    </div>
                    <h1 className='text-sm text-gray-700 font-popin text-start'>We provide AI-driven solutions into businesses where they can bring tangible value. Each solution is customized as per your needs and deployed on any computing device of your choice.</h1>
                </div>

                <div className='w-1/4 h-96 flex flex-col justify-center items-start rounded-2xl bg-white px-6 hover:gradienty'>
                    <h1 className='text-2xl text-black font-semibold text-start'>Lifetime Support</h1>
                    <div className="image-container flex justify-center items-start  mb-10 p-4">
                        <img src={yellow} alt="yellow" className='image' />
                    </div>
                    <h1 className='text-sm text-gray-700 font-popin text-start'>Should you face any issues, we are always at your service. We provide lifetime technical support & upgrade options.</h1>
                </div>
            </div>
            {/* 7th div */}
            <div className='flex flex-col justify-center items-center w-full items-center py-4'>
                <div className='flex flex-col justify-center items-center py-5 gap-2'>
                    <h1 className='text-2xl font-semibold'>OUR VISION</h1>
                    <div className='w-20 h-1 bg-gradient-to-r from-indigo-950 to-blue-500 rounded-xl'></div>
                </div>
                <div className='flex flex-col w-3/4 justify-center items-center py-6 px-4'>
                    <h1 className='text-center text-6xl font-normal'>AI for Social Good</h1>
                    <h1 className='text-center text-xl font-normal mt-10 font-popin text-gray-600'>Explainable AI (XAI) is an emerging subject of machine learning research that refers to strategies that try to provide transparency to typically opaque AI models and their predictions.</h1>
                </div>
                {/* <VerticalStepper>
                    <Step title="Step 1">Content for Step 1</Step>
                    <Step title="Step 2">Content for Step 2</Step>
                    <Step title="Step 3">Content for Step 3</Step>
                </VerticalStepper> */}
            </div>
            {/* 8th div  */}
            <div className='flex flex-col justify-center items-center w-full items-center py-4'>
                <div className='flex flex-col justify-center items-center py-5 gap-2'>
                    <h1 className='text-2xl font-semibold'>OUR BLOGS</h1>
                    <div className='w-20 h-1 bg-gradient-to-r from-indigo-950 to-blue-500 rounded-xl'></div>
                </div>
                <div className='flex flex-col w-3/4 justify-center items-center py-6 px-4'>
                    <h1 className='text-center text-6xl font-normal'>Inhouse Mindscape</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-10'>
                    <div className='flex flex-row justify-center items-center gap-10'>
                        <div class='group w-1/3 h-96 flex flex-col justify-center items-start p-4 gap-5 bg-white rounded-xl transition-shadow duration-300 ease-in-out'>
                            <h1 class='text-xl text-gray-700 font-normal font-popin opacity-100 group-hover:opacity-0'>New!</h1>
                            <h1 class='text-2xl text-gray-700 font-normal font-popin'>Generative AI</h1>
                            <div class='flex justify-center items-start bg-yellow-200 p-4 rounded-xl'>
                                <h1 class='text-start text-lg font-popin font-normal'>In today's data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape....</h1>
                            </div>
                            <h1 class='opacity-0 transition-opacity duration-300 ease-in-out cursor-pointer group-hover:opacity-100'>Read More..</h1>
                        </div>

                        <div class='group w-1/3 h-96 flex flex-col justify-center items-start p-4 gap-5 bg-white rounded-xl transition-shadow duration-300 ease-in-out'>
                            <h1 class='text-xl text-gray-700 font-normal font-popin opacity-100 group-hover:opacity-0'>New!</h1>
                            <h1 class='text-2xl text-gray-700 font-normal font-popin'>The Evolution of AI in Games</h1>
                            <div class='flex justify-center items-start bg-blue-200 p-4 rounded-xl'>
                                <h1 class='text-start text-lg font-popin font-normal'>The integration of artificial intelligence (AI) within the gaming industry has been a remarkable journey, marked by continual innovation. Read our latest blog to dive deep into the fascinating history of AI in games and discover the evolution that continues to shape the future of play!...</h1>
                            </div>
                            <h1 class='opacity-0 transition-opacity duration-300 ease-in-out cursor-pointer group-hover:opacity-100'>Read More..</h1>
                        </div>
                    </div>
                    <div class='relative w-3/4 flex flex-col justify-center items-start p-4 gap-5 group'>
                        <h1 class='text-xl text-gray-700 font-popin font-normal group-hover:hidden'>April 18, 2024</h1>
                        <h1 class='text-3xl text-gray-700 font-popin font-normal'>Unmasking the Misconceptions of Artificial Intelligence in the Workplace</h1>
                        <div class='p-4 bg-blue-100 mb-2'>
                            <h1 class='text-base text-gray-700 font-popin font-normal'>The rise of Artificial Intelligence (AI) has sparked both excitement and apprehension. Many professionals are unsure how AI impacts their work....</h1>
                        </div>
                        <h1 class='opacity-0 absolute bottom-2 left-4 transition-opacity duration-300 cursor-pointer group-hover:opacity-100'>Read More...</h1>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='text-xl font-popin font-normal px-6 py-2 rounded-xl border border-black hover:bg-black hover:text-white'>Explore Now</button>
                    </div>
                </div>

            </div>
            {/* 9th div */}
            <div className='flex flex-col justify-center items-center w-full items-center py-4'>
                <div className='flex flex-col w-3/4 justify-center items-center py-6 px-4'>
                    <h1 className='text-center text-4xl font-medium'>We Work With Amazing Clients</h1>
                </div>
                <div class='images w-full flex flex-row justify-center items-center gap-5 overflow-hidden'>
                    <img src={co1} alt="co1" />
                    <img src={co3} alt="co3" />
                    <img src={co2} alt="co2" />
                    <img src={grov} alt="grov" />
                </div>

            </div>
            {/* 10th div */}
            <div className='flex flex-col justify-center items-center w-full bg-indigo-950 py-8'>
                <h1 className='text-white font-medium text-2xl font-popin'>By the numbers</h1>
                <div className='flex flx-row justify-center items-center w-full py-6'>
                    <div className='flex flex-col justify-center items-center w-1/4 p-4 gap-5 border-r-2 border-white'>
                        <h1 className='text-2xl text-white font-medium '>15+</h1>
                        <h1 className='text-xl text-white font-medium'>Solutions for <br /> Global crises</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center w-1/4 p-4 gap-5 border-r-2 border-white'>
                        <h1 className='text-2xl text-white font-medium '>15+</h1>
                        <h1 className='text-xl text-white font-medium'>Solutions for <br /> Global crises</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center w-1/4 p-4 gap-5 border-r-2 border-white'>
                        <h1 className='text-2xl text-white font-medium '>15+</h1>
                        <h1 className='text-xl text-white font-medium'>Solutions for <br /> Global crises</h1>
                    </div>
                </div>
            </div>
            {/* 11th div */}
            <div className='flex flex-col justify-center items-center w-full items-center py-4 gap-5'>
                <div className='flex flex-col justify-center items-center py-5 gap-2'>
                    <h1 className='text-2xl font-semibold'>GET TO KNOW US</h1>
                    <div className='w-20 h-1 bg-gradient-to-r from-indigo-950 to-blue-500 rounded-xl'></div>
                </div>
                <div className='flex flex-col w-3/4 justify-center items-center py-6 px-4'>
                    <h1 className='text-center text-6xl font-normal'>Frequently Asked Questions</h1>
                </div>
                <div className='w-full flex flex-row justify-center items-center gap-5'>
                    <div ref={dropdownRef} className="flex flex-row w-full justify-center items-center px-4">
                        <div className="relative w-full">
                            <select
                                className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onClick={toggleDropdown}
                            >
                                <option value="contract-text">Do I Need to Sign a Contract?</option>
                            </select>
                            {isOpen && (
                                <div className="absolute bottom-0 left-0 bg-white p-4 border border-gray-300 w-full rounded-md shadow-md">
                                    We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.
                                </div>
                            )}
                        </div>
                    </div>
                    <div ref={dropdownRef} className="flex flex-row w-full justify-center items-center px-4">
                        <div className="relative w-full">
                            <select
                                className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onClick={toggleDropdown1}
                            >
                                <option value="contract-text">Do I Need to Sign a Contract?</option>
                            </select>
                            {isOpen1 && (
                                <div className="absolute bottom-0 left-0 bg-white p-4 border border-gray-300 w-full rounded-md shadow-md">
                                    We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-row justify-center items-center gap-5'>
                    <div ref={dropdownRef} className="flex flex-row w-full justify-center items-center px-4">
                        <div className="relative w-full">
                            <select
                                className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onClick={toggleDropdown2}
                            >
                                <option value="contract-text">Do I Need to Sign a Contract?</option>
                            </select>
                            {isOpen2 && (
                                <div className="absolute bottom-0 left-0 bg-white p-4 border border-gray-300 w-full rounded-md shadow-md">
                                    We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.
                                </div>
                            )}
                        </div>
                    </div>
                    <div ref={dropdownRef} className="flex flex-row w-full justify-center items-center px-4">
                        <div className="relative w-full">
                            <select
                                className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onClick={toggleDropdown3}
                            >
                                <option value="contract-text">Do I Need to Sign a Contract?</option>
                            </select>
                            {isOpen3 && (
                                <div className="absolute bottom-0 left-0 bg-white p-4 border border-gray-300 w-full rounded-md shadow-md">
                                    We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
            {/* 12th div */}
            <div className='flex flex-row justify-around items-center gap-10'>
                <div className='flex flex-col w-1/4 justify-center items-start gap-5'>
                    <h1 className='text-5xl text-black font-medium text-start'>Get in <br />touch with <br />us</h1>
                    <h1 className='text-lg text-black font-popin'>Send your enquiry now!</h1>
                    <div className='flex flex-row justify-center items-center'>
                        <input type="email" placeholder='enter email address' className='h-10 w-52 rounded-full'/>
                        <button className='bg-indigo-950 p-2 text-white rounded-full'>Request Demo</button>
                    </div>
                </div>
                <div className='w-2/4'>
                    <img src={map} alt="map" />
                </div>
            </div>

        </div>
    );
};

export default Home;
