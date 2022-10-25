import Image from "next/image"
const SmallCard = ({img,loaction,distance}:{img:string,loaction:string,distance:string}) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 roudned-xl cursor-pointer
    hover:bg-gray-100 hover:scale-105 transform duration-200 ease-out">
        <div className="relative h-16 w-16">
            <Image src={img} layout="fill" className="rounded-lg"/>
        </div>
        <div>
        <h2>{loaction}</h2>
        <h3 className="text-gray-500">{distance}</h3>
        </div>
       
    </div>
  )
}

export default SmallCard