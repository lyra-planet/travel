import Image from 'next/image'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] '>
        <Image 
        src='https://z1.muscache.cn/pictures/carson/carson-1587915067054/original/aad16e09-d997-4272-a473-9c05f1779713.jpg'
        layout='fill' 
        objectFit='cover'
        />
        <div className='absolute top-1/2 w-full text-center'>
      <button className='text-red-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
        Not sure where to go ? Lyra told you!
      </button>
        </div>
    </div>
  )
}

export default Banner