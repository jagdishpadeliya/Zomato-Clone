import React from 'react'

type HeadingProp = {
    title: string
}
const Heading = ({ title }: HeadingProp) => {
    return (
        <span className='font-semibold text-3xl text-zinc-600 inline-block mt-5'>{title}</span>
    )
}

export default Heading