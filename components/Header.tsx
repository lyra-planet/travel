import Image from "next/image"
import {
    SearchIcon,
    MenuIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/solid'
const Header = () => {
  return (
    <header className="sticky top-0 z-50  grid grid-cols-3  bg-white shadow-md p-5 md:px-10 ">
        <div className="relative flex items-center h-10 cursor-pointer my-auto overflow-hidden">
        <Image 
        src='https://logos-world.net/wp-content/uploads/2020/08/Airbnb-Logo.jpg' 
        // layout="fill" 
        objectFit="contain"
        width="125"
        height="125"
        />
        </div>

        <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 ">
        <input className="flex-grow 
        pl-5 bg-transparent 
        outline-none
         placeholder-gray-400" type="text" placeholder="Start your Search"/>
        <SearchIcon className="md:mx-2 h-8 text-white rounded-full bg-red-400 p-2 cursor-pointer hidden md:inline-flex"/>
        </div>
        <div className="flex space-x-4 items-center justify-end text-gray-500">
            <p className="hidden lg:inline">Become a host</p>
            <GlobeAltIcon className="h-6  cursor-pointer"/>
            <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                <MenuIcon className="h-6"/>
                <UserCircleIcon className="h-6"/>
            </div>
        </div>
    </header>
  )
}

export default Header