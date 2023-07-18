/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client'

// import useWindowDimensions from '@/hooks/useWindowDimensions'
import { useState } from 'react'
import { AiOutlineCheck, AiOutlineSearch } from 'react-icons/ai'
import { MdSearch } from 'react-icons/md'
import { RiArrowDownSFill } from 'react-icons/ri'

import { HamburgerMobile } from './Hamburgers/HamburgerMobile'

const CategoryItem = ({ title, onChange, selected }: { title: string; onChange: () => void; selected: boolean }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={onChange}
      className={`${selected ? 'bg-[#eee] pl-2 font-bold' : 'bg-white pl-8'
        } flex h-12 cursor-pointer items-center whitespace-nowrap pr-4 transition-colors duration-200 hover:bg-[#ebebeb] lg:h-11`}
    >
      {selected ? (
        <span className="mr-[7px] inline-flex h-[14px] w-[14px] items-center justify-center">
          <AiOutlineCheck className="w-full h-full text-sm" />
        </span>
      ) : (
        ''
      )}
      {title}
    </div>
  )
}

// Searchbar dropdown categories
const CategoriesDropdown = () => {
  const [show, setShow] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Wszędzie')

  const categories = [
    'Wszędzie',
    'Laptop i komputer',
    'Smartfony i smartwatche',
    'Gaming i streaming',
    'Podzespoły komputerowe',
    'Urządzenia peryferyjne',
    'TV i audio',
    'Smarthome i lifestyle',
    'Akcesoria',
  ]

  const handleChange = (category: string) => {
    setSelectedOption(category)
    setShow(false)
  }

  return (
    <div>
      <div className="relative hidden bg-white lg:inline">
        <div className="relative h-[34px] pr-1 text-base">
          {/* Button */}
          <div
            onClick={() => setShow(!show)}
            className="flex h-auto cursor-pointer items-center rounded-[20px] bg-transparent pb-[6px] pl-3 pr-[9px] pt-2 hover:bg-[#f5f5f5]"
          >
            <span>{selectedOption}</span>
            <span className="inline-flex items-center justify-center w-4 h-4 ml-1">
              <RiArrowDownSFill
                className={`${show ? '-rotate-180' : ''} h-full w-full transition-transform duration-300`}
              />
            </span>
          </div>

          {/* Dropdown */}
          <div
            className={`${!show ? 'hidden' : 'block'
              } absolute right-0 top-[38px] z-[2] rounded-b-lg border border-[#ddd] bg-white py-2 shadow-xCom`}
          >
            <div>
              {categories.splice(0, 9).map((category) => (
                <CategoryItem
                  key={category}
                  title={category}
                  onChange={() => handleChange(category)}
                  selected={category === selectedOption}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const SearchBar = () => {
  const [focus, setFocus] = useState(false)

  return (
    <>
      <div className="lg:hidden">
        <HamburgerMobile />
      </div>

      <div className="flex h-full w-full items-center lg:max-w-[480px] xl:max-w-[775px]">
        <div className="relative h-[32px] w-full md:h-[40px]">
          <div
            className={`rounded-[20px] border border-[#ccc] bg-white transition-shadow duration-200 lg:border-none ${focus ? 'shadow-xCom' : 'shadow-none'
              }`}
          >
            {/* Kied yaktywny input znika głowny komponent i wyświetla sie after */}
            <div className="searchBox">
              {/* Mobile Button Search*/}
              <button className="flex items-center justify-center p-1 border-none md:pl-4 lg:hidden">
                <span className="flex items-center w-6 h-6 text-gray-500">
                  <AiOutlineSearch className="w-6 h-6" />
                </span>
              </button>

              {/* Input Mobile & Desktop */}
              <div className="flex-1 pr-4 lg:p-0">
                <input
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                  type="text"
                  placeholder="Czego szukasz?"
                  className="w-full whitespace-nowrap border-none bg-transparent  py-2 outline-none md:p-0 lg:max-w-[740px] lg:pl-5"
                />
              </div>

              {/* Button Zamknięcia Mobile */}
              <button></button>

              {/* Separator Desktop */}
              <div className="hidden h-6 w-[1px] border-none bg-[#ddd] lg:mx-1 lg:block" />

              {/* Categories Dropdown Dekstop | Dynamiczny element pojawia sie na 1024px dodać!!! */}
              <CategoriesDropdown />

              {/* Dektop Button Search */}
              <button className="hidden h-full w-16 rounded-[20px] border-none bg-[#4d4d4d] transition-colors duration-300 hover:bg-gray-900 lg:flex lg:items-center">
                <span className="inline-block p-0 mx-auto overflow-hidden text-white h-7 w-7">
                  <MdSearch className="w-full h-full" />
                </span>
              </button>
            </div>
          </div>

          {/* <button></button> */}
          {/* <div></div> */}
        </div>
      </div>
    </>
  )
}
