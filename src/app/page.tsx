import Image from 'next/image'
import { indiaRestaurantData } from '../../utils/restaurantData'
import { AiFillApple, AiOutlineRight, AiOutlineDown, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import { BiLogoPlayStore } from 'react-icons/bi'
import ReactCountryFlag from 'react-country-flag'
import { countriesCode } from '../../utils/CountriesCode'
import Link from 'next/link'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <main className='w-full flex flex-col items-center'>
      <header className='h-[32rem] w-full relative'>
        <Image src='/homepage-background.webp' fill alt='Homepage-background' className='object-cover absolute border-5 border-teal-300 z-10' />
        <nav className='z-20 relative p-5'>
          <ul className='flex justify-end mr-10'>
            <li className='text-white font-bold mr-5'>Add Restaurant</li>
            <li className='text-white font-bold mr-5'>Log in</li>
            <li className='text-white font-bold mr-5'>Sign up</li>
          </ul>
        </nav>
        <div className='z-20 absolute left-0 right-0 bottom-40 text-center'>
          <h1 className='text-white text-7xl font-bold text-center italic'>Zomito</h1>
          <span className='block mt-5 text-3xl text-white'>Find the best restaurants, cafes and bars in india</span>
        </div>
      </header>
      <section className='container'>
        <div className='w-full mt-8 flex flex-col items-center text-center'>
          <h2 className='font-semibold text-3xl text-gray-600 flex items-center'>Popular locations in
            <ReactCountryFlag countryCode='IN' svg className='text-5xl inline-block mx-2' />
            India</h2>
          <p className='w-4/5 mt-2 text-xl text-gray-500'>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5'>
          {
            indiaRestaurantData.map((location, index) => {
              return (
                <Link key={index} href={`${location.split(" ")[0]}/delivery`}>
                  <div className='shadow-md hover:shadow-lg p-3 flex flex-row justify-between items-center'>
                    <span className='text-lg'>{location}</span>
                    <AiOutlineRight size={20} />
                  </div >
                </Link>
              )
            })
          }
        </div>
        <div className='w-full mt-8'>
          <span className='text-2xl font-semibold'>All Countries</span>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5'>
            {
              countriesCode.map((country, index) => {
                return (
                  <div key={index} className='shadow p-3'>
                    <ReactCountryFlag countryCode={country.code} svg className='text-3xl md:text-5xl rounded-xl' />
                    <span className='ml-5 text-base md:text-lg'>{country.name}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
