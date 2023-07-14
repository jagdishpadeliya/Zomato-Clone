import Image from 'next/image'
import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Heading from './Heading'
import Link from 'next/link'

type SliderDataProps = {
    id: number,
    name: string,
    image: string
    time?: string
}

type SliderOptionsProps = {
    data: SliderDataProps[],
    title: string,
    sliderRef: React.RefObject<HTMLDivElement>,
    scrollLeft: (ref: React.RefObject<HTMLDivElement>) => void,
    scrollRight: (ref: React.RefObject<HTMLDivElement>) => void,
    bg?: string
}
const SliderOptions = ({ title, data, sliderRef, scrollLeft, scrollRight, bg }: SliderOptionsProps) => {
    return (
        <div className={`w-full ${bg} flex justify-center`}>
            <div className='container'>
                <Heading title={title} />
                <div className={`w-full relative`}>
                    <button className='hidden sm:flex absolute left-0 top-24  z-10 w-8 h-8 rounded-full bg-white justify-center items-center' onClick={() => scrollLeft(sliderRef)}><AiOutlineLeft /></button>
                    <button className='hidden sm:flex absolute right-0 top-24 z-10 w-8 h-8 rounded-full bg-white justify-center items-center' onClick={() => scrollRight(sliderRef)}><AiOutlineRight /></button>
                    <div className='flex overflow-x-auto overflow-y-hidden gap-x-5 py-10  duration-1000 ease-in-out' ref={sliderRef}>
                        {
                            data.map((item, index) => {
                                return <Link href={`${item.name}/order`} key={index}>
                                    <div className='w-36'>
                                        <div className='h-36 w-36 rounded-full relative overflow-hidden'>
                                            <Image alt={item.name} src={item.image} fill />
                                        </div>
                                        <span className='text-center inline-block w-full'>{item.name}</span>
                                        {
                                            item.time && <span className='text-center inline-block w-full text-sm text-zinc-400'>{item.time}</span>
                                        }
                                    </div>
                                </Link>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderOptions