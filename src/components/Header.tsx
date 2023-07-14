"use client"
import React, { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BiSolidUpArrow, BiSolidDownArrow, BiSearch } from 'react-icons/bi'
import { TbMinusVertical } from 'react-icons/tb'
import OptionComponent from '@/components/OptionComponent'
import { useRouter } from 'next/navigation'
const Header = () => {
    const isMounted = useRef(false)
    const router = useRouter()
    const pathName = usePathname()
    const [place, setPlace] = useState(pathName.split('/')[1])
    const [item, setItem] = useState('')
    const [toggle, setToggle] = useState("UP")
    const [options, setOptions] = useState([
        {
            imgUrl: '/option1.png',
            option: 'Delivery',
            isActive: true,
        },
        {
            imgUrl: '/option2.png',
            option: 'Dining Out',
            isActive: false
        },
        {
            imgUrl: '/option3.png',
            option: 'Nightlife',
            isActive: false
        }
    ])
    const [activeOption, setActiveOption] = useState(options[0].option)
    useEffect(() => {
        if (isMounted.current)
            router.push(`/${place.toLowerCase()}/${activeOption.toLowerCase()}`)
    }, [activeOption])
    useEffect(() => {
        isMounted.current = true
    }, [])
    return (
        <main className='w-full flex justify-center border-b-2 overflow-hidden'>
            <div className="container">
                <header className='mt-3 flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Image src={"/logo.png"} alt='Logo' height={50} width={150} />
                        <div className='border shadow-md flex p-3 rounded-md items-center ml-5'>
                            <FaMapMarkerAlt size={25} className='text-red-300' />
                            <input type='text' className='mx-2 text-stone-700 text-md outline-none border-none active:border-none focus:border-none'
                                value={place} onChange={(e) => setPlace(e.target.value)}
                            />
                            {
                                toggle === 'UP' && <BiSolidUpArrow size={12} onClick={() => setToggle("DOWN")} />
                            }
                            {
                                toggle === 'DOWN' && <BiSolidDownArrow size={12} onClick={() => setToggle("UP")} />
                            }
                            <TbMinusVertical size={25} />
                            <BiSearch size={25} className='text-stone-700' />
                            <input type='text' className='mx-2 text-stone-700 text-md outline-none border-none'
                                value={item} onChange={(e) => setItem(e.target.value)}
                                placeholder='Search for restaurants, cuisines or a dish'
                            />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <span className='text-zinc-500'>Login</span>
                        <span className='text-zinc-500'>Sign Up</span>
                    </div>
                </header>
                <div className='flex mt-5'>
                    {
                        options.map((option, index) => (
                            <OptionComponent key={index} option={option.option} imgUrl={option.imgUrl} isActive={activeOption === option.option} setActiveOption={setActiveOption} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Header