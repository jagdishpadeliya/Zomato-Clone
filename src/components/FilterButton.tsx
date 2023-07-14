import React from 'react'
import { RxCross2 } from 'react-icons/rx'
type FilterButtonProps = {
    title: string,
    leftIcon?: React.JSX.Element | undefined,
    rightIcon?: React.JSX.Element | undefined,
    leftNumber?: number | undefined,
    rightNumber?: number | undefined,
    active?: boolean,
    onclick: (() => void) | undefined
}
const FilterButton = ({ title, leftIcon, rightIcon, leftNumber, rightNumber, active, onclick }: FilterButtonProps) => {
    return (
        <button className='border hover:bg-gray-200 text-gray-400 py-2 px-4 rounded-lg inline-flex items-center' onClick={onclick}>
            {leftIcon}
            {active && leftNumber}
            {title}
            {active && <RxCross2 />}
            {!active && rightIcon}
            {rightNumber && <span>+</span>}

        </button>
    )
}

export default FilterButton