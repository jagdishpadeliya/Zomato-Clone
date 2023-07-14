import Image from 'next/image'
import React from 'react'

type RestaurantProps = {
    imageUrl: string | undefined,
    discount: number,
    name: string,
    rating: number,
    type: string,
    price: number,
    time: number,
    followWHOProtocol: boolean
}

const Restaurant = ({ imageUrl, discount, name, rating, type, price, time, followWHOProtocol }: RestaurantProps) => {
    return (
        <div className=''>
            <div className='relative w-full h-52 rounded-lg overflow-hidden'>
                <Image src={imageUrl || "/McDonalds-item.png"} fill alt='McDonalds-Restaurant' className='hover:scale-110'/>
                <span className='absolute bottom-1 left-0 right-0 bg-blue-600 text-white ps-2'>{discount}% OFF up to {(price / 100 * discount)}⭐</span>
            </div>
            <div className='mt-1'>
                <div className='flex justify-between'>
                    <span className='font-semibold'>{name}</span>
                    <span className='bg-green-600 text-white px-2 rounded-md'>{rating} </span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-gray-500'>{type}</span>
                    <div className='flex flex-col'>
                        <span className='text-gray-500'>₹{price} from o...</span>
                        <span className='font-medium'>{time} min</span>
                    </div>
                </div>
            </div>
            <hr />
            {
                followWHOProtocol &&
                <div className='flex gap-2 mt-2'>
                    <Image src={"/safe-delivery.png"} alt="Safe Delivery" height={10} width={30} />
                    <p className='text-gray-500 text-sm
          '>Restaurant partner follows WHO protocol</p>
                </div>}
        </div>
    )
}

export default Restaurant