import Image from "next/image"
const LargeCard = ({img,title,discription,buttonText}:{img:string,title:string,discription:string,buttonText:string}) => {
  return (
    <section className="relative py-16 cursor-pointer">
        <div className="relative h-96 min-w-[300px]">
            <Image src={img} objectFit="cover" layout="fill" className="rounded-2xl"/>
        </div>
        <div className="absolute top-32 text-white left-12">
            <h3 className="text-4xl mb-3 w-64">{title}</h3>
            <p>{discription}</p>
            <button className="text-sm text-white bg-gray-900 rounded-lg mt-5 px-4 py-2">{buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard