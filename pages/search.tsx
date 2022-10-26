import Footer from "../components/Footer"
import Header from "../components/Header"
import {format} from 'date-fns'
import { GetServerSideProps } from "next/types";
import InfoCard from "../components/InfoCard";
import prisma from '../lib/prisma'
import Map from '../components/Map'
const Search = ({query,searchResult}:any) => {
    const {location,startDate,endDate,numberOfGuest}=query
    const formattedStartDate = format(new Date(startDate as string),"dd MMMM yy")
    const formattedEndDate = format(new Date(endDate as string),"dd MMMM yy")
    const range = (`${formattedStartDate} - ${formattedEndDate}`)
  return (
    <div className="h-screen overflow-y-scroll scrollbar scrollbar-thumb-red-400 scrollbar-track-gray-100">
        <Header placeholder={`${location} | ${range} | ${numberOfGuest} of guests`}/>
        <main className="flex xl:h-screen xl:overflow-hidden">
            <section className="flex-grow pt-14 px-6 overflow-y-auto scroll-smooth scrollbar scrollbar-thumb-red-400 scrollbar-track-gray-100">
            <p className="text-xs">300 + Stays - {range} - {numberOfGuest} guests</p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
            <div className="hidden lg:inline-flex mb-5 space-x-2 text-gray-800 whitespace-nowrap">
                <p className="button">Cancellation Flexibility</p>
                <p className="button">Type of Place</p>
                <p className="button">Rooms and Beds</p>
                <p className="button">More filter</p>
            </div>
            <div className="flex flex-col">
            {searchResult.map((item:any,index:number)=>(
                <InfoCard key={index} price={item.price} img={item.img} location={item.location} title={item.location} star={item.star} description={item.description} total={item.total}/>
            ))}
            </div>

            </section>
            <section className="hidden xl:inline-flex  xl:min-w-[700px]">
                <Map searchResults={searchResult}/>
            </section>
        </main>
        <Footer/>
    </div>
  )
}

export default Search
export const getServerSideProps: GetServerSideProps  =async (context) => {
    const searchResult = await prisma.searchpost.findMany()
    return {
        props:{
            query:context.query,
            searchResult:searchResult
        }
    }
}