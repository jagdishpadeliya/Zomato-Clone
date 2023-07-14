"use client"
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { cuisines } from '../../utils/cuisines'
import { useGlobalContext } from '@/context/AppContext'
const Cuisines = () => {
    const [searchCuisines, setSearchCuisines] = useState("")
    const [filterCuisines, setFilterCusines] = useState(cuisines)
    const filterCuisinesBySearch = (e: any) => {
        setSearchCuisines(e.target.value)
        setFilterCusines(cuisines.filter((cuisine) => cuisine.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    const { selectedCuisines, setSelectedCuisines } = useGlobalContext()
    const handleCuisinesChange = (cuisine: string) => {
        if (selectedCuisines.includes(cuisine)) {
            setSelectedCuisines(selectedCuisines.filter((selectedCuisine) => selectedCuisine !== cuisine))
        } else {
            setSelectedCuisines([...selectedCuisines, cuisine])
        }
    }
    return (
        <div className='h-full'>
            <SearchBar
                searchInput={searchCuisines}
                filterResults={filterCuisinesBySearch}
                resetFilter={setFilterCusines}
                data={cuisines}
                clearInput={setSearchCuisines}
            />
            <div className='h-full overflow-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 pt-5 pb-10 gap-y-5'>
                {
                    filterCuisines.length == 0 ? <div className='text-gray-500 text-center'>No cuisines found</div> :
                        filterCuisines.map((cuisine, index) => {
                            return (
                                <div key={index} className='flex items-center'>
                                    <input
                                        type='checkbox'
                                        className="w-5 h-5 bg-white rounded-sm border-2 border-gray-400 text-red-500 focus:ring-0"
                                        checked={selectedCuisines.includes(cuisine)}
                                        onChange={() => handleCuisinesChange(cuisine)}
                                        id={cuisine}
                                    />
                                    <label htmlFor={cuisine} className='text-gray-500 ml-2'>{cuisine}</label>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Cuisines