'use client'

import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdSearch } from 'react-icons/md'
import { RiArrowDownSFill } from 'react-icons/ri'

const CategoryItem = ({ title, onChange, selected }: { title: string, onChange: () => void, selected: boolean }) => {

    return (
        <div onClick={onChange} className={`${selected ? 'font-bold bg-[#eee]' : 'bg-white'} flex items-center h-12 pl-8 pr-4 cursor-pointer whitespace-nowrap lg:h-11 hover:bg-[#f9f9f9] transition-colors duration-200`}>
            {title}
        </div>
    )
}

const CategoriesDropdown = ({ categoriesList }: { categoriesList: string[] }) => {
    const [show, setShow] = useState(false)
    const [selectedOption, setSelectedOption] = useState('Wszędzie')


    const categories = ['Wszędzie', ...categoriesList]

    const handleChange = (category: string) => {
        setSelectedOption(category)
        setShow(false)
    }

    return (
        <div>
            <div className='relative hidden bg-white lg:inline'>
                <div className='pr-1 h-[34px] text-base relative'>
                    {/* Button */}
                    <div onClick={() => setShow(!show)} className='flex items-center bg-transparent cursor-pointer h-auto pt-2 pr-[9px] pb-[6px] pl-3 rounded-[20px] hover:bg-[#f5f5f5] '>
                        <span>
                            {selectedOption}
                        </span>
                        <span className='inline-flex items-center justify-center w-4 h-4 ml-1'>
                            <RiArrowDownSFill className={`${show ? '-rotate-180' : ''} w-full h-full transition-transform duration-300`} />
                        </span>
                    </div>

                    {/* Dropdown */}
                    <div className={`${!show ? 'hidden' : 'block'} absolute right-0 top-[38px] py-2 bg-white border border-[#ddd] z-[2] rounded-b-lg shadow-xCom`}>
                        <div>
                            {categories.splice(0, 9).map((category) => (

                                <CategoryItem key={category} title={category} onChange={() => handleChange(category)} selected={category === selectedOption} />

                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export const SearchBar = ({ categories }: { categories: string[] }) => {


    return (
        <div className="flex items-center w-full lg:max-w-[480px] xl:max-w-[775px] h-full" >

            <div className="h-[32px] md:h-[40px] relative w-full">

                <div className='bg-white rounded-[20px] border border-[#ccc] lg:border-none'>

                    {/* Kied yaktywny input znika głowny komponent i wyświetla sie after */}
                    <div className='searchBox'>
                        {/* Mobile Button Search*/}
                        <button className='flex items-center justify-center p-1 border-none md:pl-4 lg:hidden'>
                            <span className='flex items-center w-6 h-6 text-gray-500'>
                                <AiOutlineSearch className='w-6 h-6' />
                            </span>
                        </button>

                        {/* Input Mobile & Desktop */}
                        <div className='flex-1 pr-4 lg:p-0'>
                            <input
                                type="text"

                                placeholder='Czego szukasz?'
                                className='py-2 w-full outline-none bg-transparent  border-none whitespace-nowrap md:p-0 lg:max-w-[740px] lg:pl-5'
                            />

                        </div>

                        {/* Button Zamknięcia Mobile */}
                        <button></button>

                        {/* Separator Desktop */}
                        <div className='hidden lg:block h-6 w-[1px] bg-[#ddd] border-none lg:mx-1' />

                        {/* Categories Dropdown Dekstop | Dynamiczny element pojawia sie na 1024px dodać!!! */}
                        <CategoriesDropdown categoriesList={categories} />

                        {/* Dektop Button Search */}
                        <button className='hidden lg:flex lg:items-center border-none bg-[#4d4d4d] hover:bg-gray-900 transition-colors duration-300 w-16 h-full rounded-[20px]'>
                            <span className='inline-block p-0 mx-auto overflow-hidden text-white w-7 h-7'>
                                <MdSearch className='w-full h-full' />
                            </span>
                        </button>
                    </div>

                </div>

                {/* <button></button> */}
                {/* <div></div> */}
            </div>
        </div>
    )
}
