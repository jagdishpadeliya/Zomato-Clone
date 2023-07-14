import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { FaSearch } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'

type SearchBarProps = {
    searchInput: string,
    filterResults: (searchInput: ChangeEvent<HTMLInputElement>) => void,
    resetFilter: Dispatch<SetStateAction<string[]>>,
    data: string[],
    clearInput: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ searchInput, filterResults, resetFilter, data, clearInput }: SearchBarProps) => {
    return (
        <div className='shadow-md border rounded-md p-3 flex justify-between items-center'>
            <div className='flex items-center'>
                <FaSearch className='text-gray-400 mr-2' size={20} />
                <input
                    placeholder='Search here'
                    className='outline-none w-full'
                    value={searchInput}
                    onChange={filterResults}
                />
            </div>
            <RxCross2 size={24} className='text-gray-400' onClick={() => {
                resetFilter(data)
                clearInput("")
            }
            } />
        </div>
    )
}

export default SearchBar