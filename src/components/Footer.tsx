import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { AiFillApple, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube, AiOutlineDown } from 'react-icons/ai'
import { BiLogoPlayStore } from 'react-icons/bi'
import { BsGlobe } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='bg-slate-100 w-full mt-10 flex justify-center'>
            <div className='container mt-5'>
                <div className='flex flex-col px-2'>
                    <span className='text-black text-4xl font-extrabold italic'>Zomito</span>
                    <div className='flex items-center gap-2 mt-5'>
                        <div className='flex items-center border-2 border-black p-2'>
                            <ReactCountryFlag countryCode='IN' svg className='text-3xl inline-block' />
                            <span className='mx-2'>India</span>
                            <AiOutlineDown size={20} />
                        </div>
                        <div className='flex items-center border-2 border-black p-2'>
                            <BsGlobe size={30} />
                            <span className='mx-2'>English</span>
                            <AiOutlineDown size={20} />
                        </div>
                    </div>
                </div>
                <div className='mt-10 grid grid-cols-2 px-2 gap-2 md:grid-cols-4 lg:grid-cols-5'>
                    <div>
                        <span className='uppercase text font-bold tracking-widest'>About Zomato</span>
                        <ul className='mt-2'>
                            <li className='text-slate-500 mt-1'>Who We Are</li>
                            <li className='text-slate-500 mt-1'>Blog</li>
                            <li className='text-slate-500 mt-1'>Work With Us</li>
                            <li className='text-slate-500 mt-1'>Investor Relations</li>
                            <li className='text-slate-500 mt-1'>Report Fraud</li>
                            <li className='text-slate-500 mt-1'>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <span className='uppercase text font-bold tracking-widest'>Zomaverse</span>
                        <ul className='mt-2'>
                            <li className='text-slate-500 mt-1'>Zomato</li>
                            <li className='text-slate-500 mt-1'>Blinkit</li>
                            <li className='text-slate-500 mt-1'>Feeding India</li>
                            <li className='text-slate-500 mt-1'>Hyperpure</li>
                            <li className='text-slate-500 mt-1'>Zomaland</li>
                            <li className='text-slate-500 mt-1'>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <span className='uppercase text font-bold tracking-widest'>For Restaurants</span>
                            <ul className='mt-1'>
                                <li className='text-slate-500 mt-1'>Partner With Us</li>
                                <li className='text-slate-500 mt-1'>Apps For You</li>
                            </ul>
                        </div>
                        <div className='mt-2'>
                            <span className='uppercase text font-bold tracking-widest'>For Enterprises</span>
                            <ul className='mt-1'>
                                <li className='text-slate-500 mt-1'>Zomato For Enterprise</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <span className='uppercase text font-bold tracking-widest'>Learn More</span>
                        <ul className='mt-1'>
                            <li className='text-slate-500 mt-1'>Privacy</li>
                            <li className='text-slate-500 mt-1'>Security</li>
                            <li className='text-slate-500 mt-1'>Terms</li>
                            <li className='text-slate-500 mt-1'>Sitemap</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <span className='uppercase text font-bold tracking-widest'>Social Links</span>
                            <div className='flex mt-1 gap-2'>
                                <AiFillLinkedin size={30} />
                                <AiFillTwitterSquare size={30} />
                                <AiFillFacebook size={30} />
                                <AiFillInstagram size={30} />
                                <AiFillYoutube size={30} />
                            </div>
                        </div>
                        <div className='flex bg-sky-900 rounded-lg p-1 px-5 items-center mt-2 '>
                            <AiFillApple size={30} className='text-white' />
                            <div className='flex flex-col text-white ml-2'>
                                <span>Download on the</span>
                                <span>App Store</span>
                            </div>
                        </div>
                        <div className='flex bg-sky-900 rounded-lg p-1 px-5 items-center mt-2'>
                            <BiLogoPlayStore size={30} className='text-white' />
                            <div className='flex flex-col text-white ml-2'>
                                <span>Get it on </span>
                                <span>Google Play</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='my-5' />
                <p className='text-slate-500 mb-10 mx-2'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer