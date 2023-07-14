"use client"
import FilterButton from '@/components/FilterButton'
import React, { useRef, useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import { CiFilter } from 'react-icons/ci'
import { FaChevronDown, FaSearch } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { rupeeMappedToIndex } from '../../../../utils/rupeeMappedToIndex';
import Cuisines from '@/components/Cuisines';
import { useGlobalContext } from '@/context/AppContext';
import SearchBar from '@/components/SearchBar';
import { searchMoreFiltersOptions } from '../../../../utils/searchMoreFiltersOptions';
import { MenuOrder } from '../../../../utils/MenuOrder';
import Image from 'next/image';
import { topBrands } from '../../../../utils/topBrands';
import SliderOptions from '@/components/SliderOptions';
import Header from '@/components/Header';
import Heading from '@/components/Heading';
import Restaurant from '@/components/Restaurant';
import { restaurants } from '../../../../utils/restaurants';
import Footer from '@/components/Footer';
const DeliveryPage = () => {
  const { selectedCuisines, setSelectedCuisines } = useGlobalContext()
  const [openFilterDialog, setOpenFilterDialog] = useState(false)
  const [showCuisinesModel, setShowCuisinesModel] = useState(false)
  const openFilterDialogBox = () => {
    setOpenFilterDialog(!openFilterDialog)
  }
  const [rating, setRating] = useState(1)

  const [activeFilter, setActiveFilter] = useState("Sort by")
  const [sortByOption, setSortByOptions] = useState([
    "Popularity",
    "Rating - high to low",
    "Cost - low to high",
    "Cost - high to low",
    "Delivery time"
  ])
  const [selectedSortBy, setSelectedSortBy] = useState("Popularity")
  const handleSortBy = (option: string) => {
    setSelectedSortBy(option)
  }

  const handleRatingChange = (e: any) => {
    setRating(e.target.value)
  }
  const [cost, setCost] = useState<number[]>([0, 5])
  const handleCostChange = (value: number[]) => {
    if (value[0] !== value[1])
      setCost(value)
  }
  const [searchMoreFilters, setSearchMoreFilters] = useState("")
  const [filterSearchMoreFilters, setFiltersSearchMoreFilters] = useState(searchMoreFiltersOptions)
  const filterSearchMoreBySearch = (e: any) => {
    setSearchMoreFilters(e.target.value)
    setFiltersSearchMoreFilters(searchMoreFiltersOptions.filter((option) => option.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  const [selectedMoreFilters, setSelectedMoreFilters] = useState<string[]>([])
  const handleMoreFiltersChange = (option: string) => {
    if (selectedMoreFilters.includes(option))
      setSelectedMoreFilters(selectedMoreFilters.filter((filter) => filter !== option))
    else
      setSelectedMoreFilters([...selectedMoreFilters, option])
  }
  const clearAllFilters = () => {
    setSelectedMoreFilters([])
    setCost([0, 5])
    setRating(1)
    setSelectedSortBy("Popularity")
    setSelectedCuisines([])
  }

  const applyFilters = () => {
    setOpenFilterDialog(false)
  }

  const sliderOrderRef = useRef<HTMLDivElement>(null)
  const sliderBrandRef = useRef<HTMLDivElement>(null)
  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current)
      ref.current.scrollLeft -= 150
  }

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current)
      ref.current.scrollLeft += 150
  }

  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants)

  const applyFilterSortBy = () => {
    setFilteredRestaurants(() => {
      const filtered = [...restaurants]
      if (selectedSortBy === "Popularity") {

      } else if (selectedSortBy === "Rating - high to low") {
        filtered.sort((a, b) => b.rating - a.rating)
      } else if (selectedSortBy === "Cost - low to high") {
        filtered.sort((a, b) => a.startingPrice - b.startingPrice)
      } else if (selectedSortBy === "Cost - high to low") {
        filtered.sort((a, b) => b.startingPrice - a.startingPrice)
      } else if (selectedSortBy === "Delivery time") {
        filtered.sort((a, b) => a.deliveryTime - b.deliveryTime)
      }
      return filtered
    }
    )
    setOpenFilterDialog(false)
  }
  const applyFilterCuisines = () => {
    setFilteredRestaurants(() => {
      const filtered = [...restaurants]
      return filtered.filter((restaurant) => selectedCuisines.includes(restaurant.name) || selectedCuisines.includes(restaurant.type))
    })
  }
  const applyFilterRating = () => {
    setFilteredRestaurants(() => {
      const filtered = [...restaurants]
      return filtered.filter((restaurant) => restaurant.rating >= rating)
    })
  }

  const applyFilterCost = () => {
    setFilteredRestaurants(() => {
      const filtered = [...restaurants]
      return filtered.filter((restaurant) => restaurant.startingPrice >= cost[0] && restaurant.startingPrice <= cost[1])
    })
  }
  const handleCuisinesModel = () => {
    setShowCuisinesModel(!showCuisinesModel)
  }
  const [filters, setFilters] = useState([
    {
      title: 'Filters',
      leftIcon: <CiFilter size={20} className='' />,
      rightIcon: undefined,
      rightNumber: undefined,
      leftNumber: 0,
      active: false,
      onClick: openFilterDialogBox
    },
    {
      title: 'Rating',
      leftIcon: undefined,
      rightIcon: undefined,
      rightNumber: rating,
      leftNumber: 0,
      active: false,
    },
    {
      title: 'Cuisines',
      leftIcon: undefined,
      rightIcon: <FaChevronDown />,
      rightNumber: undefined,
      leftNumber: undefined,
      active: false,
      onClick: handleCuisinesModel
    },
  ])
  return (
    <main className='flex flex-col items-center w-full z-0 border-2 border-red-500 relative'>
      <div className='flex justify-center w-full sticky top-0 bg-white z-20'>
        <div className='flex gap-5 py-8 container  '>
          {
            filters.map((filter, index) => {
              return (
                <FilterButton key={index} title={filter.title} leftIcon={filter.leftIcon} rightIcon={filter.rightIcon} leftNumber={filter.leftNumber}
                  rightNumber={filter.rightNumber} active={filter.active}
                  onclick={filter.onClick}
                />
              )
            })
          }
        </div>
      </div>
      <SliderOptions data={MenuOrder} title={"Inspiration for your first order"} sliderRef={sliderOrderRef} scrollLeft={scrollLeft} scrollRight={scrollRight} bg='bg-zinc-50' />
      <SliderOptions data={topBrands} title={"Top brands for you"} sliderRef={sliderBrandRef} scrollLeft={scrollLeft} scrollRight={scrollRight} bg='white' />
      <div className='w-full flex justify-center'>
        <div className="container">
          <Heading title={`Delivery Restaurants in - `} />
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mt-5'>
            {
              filteredRestaurants.map((restaurant, index) => {
                return <Restaurant key={index} name={restaurant.name} imageUrl={restaurant.imageUrl} discount={restaurant.discount} followWHOProtocol={restaurant.followWHOProtocol} price={restaurant.startingPrice} rating={restaurant.rating} time={restaurant.deliveryTime} type={restaurant.type} />
              })
            }

          </div>
        </div>
      </div>
      <Footer />
      {openFilterDialog && <div className='absolute top-0 bottom-0 left-0 right-0  flex justify-center  z-10 transition delay-200 duration-100 ease-in border-2 border-red-500'>
        <div className='w-4/5 h-[35rem] shadow-lg border rounded-xl bg-white sticky top-28 mt-28'>
          <div className='flex px-6 py-4 justify-between border-b h-[15%] items-center'>
            <span className='text-2xl font-medium'>Filters</span>
            <RxCross2 size={30} color='black' onClick={() => setOpenFilterDialog(false)} className='cursor-pointer' />
          </div>
          <div className='flex overflow-hidden h-[70%]'>
            <div className='flex flex-col bg-slate-50'>
              <div className={`flex flex-col w-48 h-20 justify-center ps-5 relative ${activeFilter === 'Sort by' ? 'bg-white' : 'bg-slate-50'} hover:cursor-pointer`} onClick={() => setActiveFilter("Sort by")}>
                {activeFilter === 'Sort by' && <div className='absolute w-1 bg-red-400 top-0 bottom-0 left-0'>
                </div>}
                <span className='font-medium text-lg text-gray-500'>Sort by</span>
                <span className="font-medium text-red-600">{selectedSortBy}</span>
              </div>
              {/*  */}
              <div className={`flex flex-col w-48 h-20 justify-center ps-5 relative ${activeFilter === 'Cuisines' ? 'bg-white' : 'bg-slate-50'} hover:cursor-pointer`} onClick={() => setActiveFilter("Cuisines")}>
                {activeFilter === 'Cuisines' && <div className='absolute w-1 bg-red-400 top-0 bottom-0 left-0'>
                </div>}
                <span className='font-medium  text-lg text-gray-500'>Cuisines</span>
                <span className="font-medium text-red-600">{selectedCuisines.length} Selected</span>
              </div>
              {/*  */}
              <div className={`flex flex-col w-48 h-20 justify-center ps-5 relative ${activeFilter === 'Rating' ? 'bg-white' : 'bg-slate-50'} hover:cursor-pointer`} onClick={() => setActiveFilter("Rating")}>
                {activeFilter === 'Rating' && <div className='absolute w-1 bg-red-400 top-0 bottom-0 left-0'>
                </div>}
                <span className='font-medium  text-lg text-gray-500'>Rating</span>
              </div>
              <div className={`flex flex-col w-48 h-20 justify-center ps-5 relative ${activeFilter === 'Cost per person' ? 'bg-white' : 'bg-slate-50'} hover:cursor-pointer`} onClick={() => setActiveFilter("Cost per person")}>
                {activeFilter === 'Cost per person' && <div className='absolute w-1 bg-red-400 top-0 bottom-0 left-0'>
                </div>}
                <span className='font-medium  text-lg text-gray-500'>Cost per person</span>
              </div>
              <div className={`flex flex-col w-48 h-20 justify-center ps-5 relative ${activeFilter === 'More filters' ? 'bg-white' : 'bg-slate-50'} hover:cursor-pointer`} onClick={() => setActiveFilter("More filters")}>
                {activeFilter === 'More filters' && <div className='absolute w-1 bg-red-400 top-0 bottom-0 left-0'>
                </div>}
                <span className='font-medium  text-lg text-gray-500'>More filters</span>
                <span className="font-medium text-red-600">{selectedMoreFilters.length} Selected</span>
              </div>
            </div>
            <div className='px-5 py-5 w-full h-full'>
              {
                activeFilter === 'Sort by' &&
                sortByOption.map((option, index) => {
                  return (
                    <div key={index} className='flex items-center mb-6'>
                      <input
                        type="radio"
                        name='sort-by'
                        checked={selectedSortBy === option}
                        id={option}
                        className='form-checkbox checked:text-red-500 focus:ring-0 rounded-full mr-3 p-2 hover:text-red-500'
                        onChange={() => handleSortBy(option)}
                      />
                      <label className='text-slate-600' htmlFor={option}>{option}</label>
                    </div>
                  )
                })
              }
              {
                activeFilter === 'Cuisines' &&
                <Cuisines />
              }
              {
                activeFilter === 'Rating' && <div className='flex flex-col h-full'>
                  <span className='text-gray-600'>Rating</span>
                  <span className='font-bold'>{rating == 1 ? 'Any' : `${rating} +`}</span>
                  <div className='w-full h-full flex flex-col justify-center'>
                    <input type="range" value={rating} onChange={handleRatingChange} className="w-full h-3 appearance-none bg-gradient-to-r from-red-500 to-red-700 rounded-lg" min="1" max="5" step="1" />
                    <ul className="flex justify-between w-full px-[10px]">
                      <li className="flex justify-center relative"><span className="absolute">Any</span></li>
                      <li className="flex justify-center relative"><span className="absolute">2</span></li>
                      <li className="flex justify-center relative"><span className="absolute">3</span></li>
                      <li className="flex justify-center relative"><span className="absolute">4</span></li>
                      <li className="flex justify-center relative"><span className="absolute">5</span></li>
                    </ul>
                  </div>
                </div>
              }
              {
                activeFilter === 'Cost per person' && <div className='h-full flex flex-col'>
                  <span className='text-gray-600'>Cost per person</span>
                  <span>{rupeeMappedToIndex[cost[0]]} - {rupeeMappedToIndex[cost[1]]}</span>
                  <div className='h-full flex items-center'>
                    <Slider range railStyle={{ backgroundColor: 'red' }} dotStyle={{ backgroundColor: "red" }}
                      trackStyle={[{ backgroundColor: 'red', height: '0.5rem' }]}
                      step={1}
                      marks={[0, 100, 300, 500, 800, 'Any']}
                      value={cost}
                      onChange={handleCostChange}
                      min={0}
                      max={5}
                      defaultValue={[0, 5]}
                      allowCross={false}
                      handleStyle={[{ backgroundColor: 'red', padding: "8px", top: '5px', border: 'none', }, { backgroundColor: 'red', padding: "8px", top: '5px', border: "none" }]}
                    />
                  </div>
                </div>
              }
              {
                activeFilter === 'More filters' && <div className='h-full flex flex-col'>
                  <SearchBar
                    searchInput={searchMoreFilters}
                    filterResults={filterSearchMoreBySearch}
                    resetFilter={setFiltersSearchMoreFilters}
                    data={searchMoreFiltersOptions}
                    clearInput={setSearchMoreFilters}
                  />
                  <div className='h-full overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-5 pb-10 gap-y-5'>
                    {
                      filterSearchMoreFilters.length == 0 ? <div className='text-gray-500 text-center'>No Filter Matched...</div> :
                        filterSearchMoreFilters.map((filters, index) => {
                          return (
                            <div key={index} className='flex items-center'>
                              <input
                                type='checkbox'
                                className="w-5 h-5 bg-white rounded-sm border-2 border-gray-400 text-red-500 focus:ring-0"
                                checked={selectedMoreFilters.includes(filters)}
                                onChange={() => handleMoreFiltersChange(filters)}
                                id={filters}
                              />
                              <label htmlFor={filters} className='text-gray-500 ml-2'>{filters}</label>
                            </div>
                          )
                        })
                    }
                  </div>
                </div>
              }
            </div>
          </div>
          <div className='w-full h-[15%] border-t-2 flex justify-end items-center gap-5'>
            <button className='w-20 h-12 border rounded-md bg-slate-50 text-gray-700 active:scale-90' onClick={() => clearAllFilters()}>
              Clear all
            </button>
            <button className='w-20 h-12 border bg-red-500 rounded-md text-white mr-5 active:scale-90' onClick={() => applyFilterSortBy()}>
              Apply
            </button>
          </div>
        </div>
      </div>}
      {
        showCuisinesModel && <div className='absolute top-0 mt-28 bottom-0 left-0 right-0 flex justify-center  z-10 transition delay-200 duration-100 ease-in'>
          <div className='w-1/2 h-96 shadow-lg border rounded-xl bg-white px-5 py-5 overflow-hidden flex flex-col sticky top-28 mt-28'>
            <div className='flex justify-between'>
              <span className='inline-block text-2xl font-semibold mb-3'>Cuisines</span>
              <RxCross2 size={30} onClick={handleCuisinesModel} />
            </div>
            <Cuisines />
          </div>
        </div>
      }
    </main>
  )
}

export default DeliveryPage