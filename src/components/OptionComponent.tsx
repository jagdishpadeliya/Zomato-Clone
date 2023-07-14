import Image from 'next/image'
import React, { SetStateAction } from 'react'

type OptionComponentProps = {
    imgUrl: string,
    option: string,
    isActive: boolean,
    setActiveOption: React.Dispatch<SetStateAction<string>>
}
const OptionComponent = ({ option, imgUrl, isActive, setActiveOption }: OptionComponentProps) => {
    return (
        <div className={`flex items-center relative px-5 pb-3`} onClick={() => setActiveOption(option)}>
            <div className={`w-16 h-16 border rounded-full overflow-hidden flex items-center justify-center ${isActive ? 'bg-orange-100' : 'bg-slate-50'}`}>
                <Image src={imgUrl} alt={option} className='object-contain' height={40} width={40} />
            </div>
            <span className={`${isActive ? 'text-red-400' : 'text-zinc-700'} text-xl font-semibold ml-3`}>{option}</span>
            <div className={`${isActive ? 'bg-red-500' : ""} h-[2px] w-full absolute bottom-0 left-0 right-0 transition ease-in-out duration-1000`}>
            </div>
        </div>
    )
}

export default OptionComponent