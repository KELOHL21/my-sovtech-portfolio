import Image from 'next/image'
import Aos from 'aos'

const MyValues = () => {
   return ( 
      <div className=' cursor-pointer pt-7 mb-[6rem] '>

            <div>
               <h1 className='text-center mb-8 text-4xl' data-aos='zoom-in'>My Values</h1>
            </div>  

            <div className='flex flex-row justify-center items-center '>

               <div className='flex flex-col group m-8'>

                  <div className='group-hover:scale-125 items-center' data-aos='fade-right'>
                     
                     <Image src='/assets/communication.jpg' alt='/' width={120} height={120} className='values' />

                     <p className='font-300 text-3xl mt-[1rem] ml-[-1.8rem]'>Communication</p>

                  </div>

               </div>

               <div className='flex flex-col group m-8'>

                  <div className='group-hover:scale-125 items-center' data-aos='fade-right'>

                     <Image src='/assets/respect.jpg' alt='/' width={120} height={120} className='values'/>
                     <p className='font-300 text-3xl mt-[1rem] ml-[1rem]' >Respect</p>

                  </div>

               </div>

               <div className='flex flex-col group m-8'>
                  
                  <div className='group-hover:scale-125 items-center' data-aos='fade-left'>

                     <Image src='/assets/growth.jpg' alt='/' width={120} height={120} className='values'/>
                     <p className='font-300 text-3xl mt-[1rem] ml-[1rem]'
                    >Growth</p>

                  </div>

               </div>

               <div className='flex flex-col group m-8'>

                  <div className='group-hover:scale-125 items-center' data-aos='fade-left'>

                     <Image src='/assets/determination.jpg' alt='/' width={120} height={120} className='values'/>

                     <p className='font-300 text-3xl mt-[1rem] ml-[-1.4rem]'>Determination</p>

                  </div>

               </div> 

            </div>

      </div>
    );
}
 
export default MyValues;