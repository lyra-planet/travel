import Image from "next/image"
import {
    SearchIcon,
    MenuIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UserIcon
} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
//@ts-ignore
import {DateRangePicker} from 'react-date-range'
import { useState } from "react"
import { useRouter } from "next/router"
const Header = ({placeholder}:{placeholder:string}) => {
  const [searchInput,setSearchInput] = useState("")
  const [startDate,setStartDate] = useState(new Date())
  const [endDate,setEndDate] = useState(new Date())
  const [numberOfGuest,setNumberOfGuest] = useState(1)
  const router = useRouter()
  const selectionRange = {
    startDate:startDate,
    endDate:endDate,
    key:"selection"
  }
  const handleSelect = (ranges:any)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  const resetInput =()=>{
    setSearchInput("")
    setNumberOfGuest(1)
  }
  const search = ()=>{
    router.push({
      pathname:"/search",
      query:{
        location:searchInput,
        numberOfGuest:numberOfGuest,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString()
      }
    })
  }
  return (
    <header className="sticky top-0 z-50  grid grid-cols-3  bg-white shadow-md p-5 md:px-10 ">
        <div onClick={()=>router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto overflow-hidden">
        <Image 
        src='https://logos-world.net/wp-content/uploads/2020/08/Airbnb-Logo.jpg' 
        objectFit="contain"
        width="125"
        height="125"
        />
        </div>

        <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 ">
        <input
        value={searchInput} 
        onChange={(event)=>setSearchInput(event.target.value)}
        className="flex-grow 
        pl-5 bg-transparent 
        outline-none
         placeholder-gray-400" type="text" placeholder={placeholder||"Start your Search"}/>
        <SearchIcon className="md:mx-2 h-8 w-8 text-white rounded-full bg-red-400 p-2 cursor-pointer hidden md:inline-flex"/>
        </div>
        <div className="flex space-x-4 items-center justify-end text-gray-500">
            <p className="hidden lg:inline">Become a host</p>
            <GlobeAltIcon className="h-6 hidden lg:inline cursor-pointer"/>
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full hover:shadow-lg transition duration-300 ease-out">
                <MenuIcon className="h-6"/>
                <UserCircleIcon className="h-6"/>
            </div>
        </div>
        {searchInput&&<div className="flex flex-col col-span-3 mx-auto">
      <DateRangePicker 
      ranges={[selectionRange]}
      minDate={new Date()}
      onChange={handleSelect}
      rangeColors={["#FD5861"]}/>
            <div className="flex items-center border-b mb-4">
        <h2 className="text-2xl pl-2 flex-grow font-semibold">Number of Guest</h2>
        <UserIcon className="h-5 w-5"/>
        <input
         value={numberOfGuest}
         onChange={(event)=>setNumberOfGuest(parseInt(event.target.value))}
         min={1}
         type="number" className="w-12 pl-2 text-lg outline-none text-red-400"/>
      </div>
      <div className="flex">
        <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
        <button onClick={search} className="flex-grow text-red-400">Search</button>
      </div>
      </div>
      
      }
      <div>
      </div>
    </header>
  )
}

export default Header