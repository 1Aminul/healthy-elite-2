
import Image from 'next/image'
import BG from '../public/images.jpg'
import {FaSearch} from 'react-icons/fa'
import aboutimg from '../image/about.jpg'
import about1 from '../image/about1.jpg'


export default function Home() {
  return (
   
    <div className='bg-white'>
    {/* Fina a doctor section */}
    <div className= "min-h-screen w-full bg-white">
    
    <div className='w-full'>
        <Image src={BG} className='w-full h-[563px]' alt='bg-image'
        ></Image>
        </div>
        <div className=" lg:w-[800px] lg:h-[133px] md:w-[400px] md:h-[200px] bg-white border-gray-300 border-2 absolute top-[68%] left-[20%]  p-5">
            <h1 className="font-semibold text-blue-800">Find a doctor</h1>
            <div className='lg:flex items-center justify-start gap-10'>
            <input type="text" className='block md:mt-2 sm:mt-2  border border-gray-500 rounded-sm w-72 h-10 px-5 outline-none' placeholder='Doctors name'/>
            <input type="text" className='block md:mt-2 sm:mt-2 border border-gray-500 rounded-sm w-72 h-10 px-5 outline-none' placeholder='specialist'/>
            <a href='#' className='inline-flex md:mt-2 sm:mt-2 bg-blue-800 px-8 py-2 text-white rounded-sm font-bold items-center'>
            <span>Search</span> 
            <span><FaSearch className='ml-3'/></span>
            </a>
        </div>
    </div>
  
    </div>
    {/* about section */}
    <div className='w-[1440px] mx-auto mb-10 bg-white lg:flex justify-start items-center gap-4 px-5'>
        <div className='w-1/4'>
          <Image src={aboutimg} className='lg:w-[350px] h-96 border-8 md:w-full sm:w-full border-gray-300'/>
        </div>
        <div className='w-1/2 md:w-full sm:w-full'>
          <p className='text-gray-400 text-lg'>What We Do</p>
          <h1 className='text-blue-700 font-semibold text-5xl'>We Have 25 Years Experience</h1>
          <p className='text-gray-400 text-lg'>We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievemvent of our stpatients for recovery.</p>
          <h2 className='text-blue-600 text-xl font-bold mt-3 mb-[-5]'>Our Mission</h2>
          <div className='mt-5 flex justify-start items-center  gap-3'>
            <Image src={about1} className='w-46 h-32 border-4 border-gray-200'/>
            <p className='text-gray-400 text-justify text-lg'>Our clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry We are among the most qualified implant provides in the AUS with over 30 years of quality training and experience</p>
          </div>
        </div>
    </div>
    </div>
    
  
  )
}
