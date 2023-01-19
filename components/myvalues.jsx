import Image from 'next/image'
import Aos from 'aos'

const MyValues = () => {
   return ( 
      <div className=' cursor-pointer mt-[25px] mb-[3rem] w-[85%] m-auto' >

            <div>
               <h1 className='mb-5 text-4xl text-center' >My Values</h1>
            </div>  

            <div className='flex flex-row justify-evenly '>

               <div className='flex flex-col text-center'>

                  <div className='items-center' >
                     
                     <Image src='/assets/communication.jpg' alt='/' width={110} height={110} className='values' />

                     <p className='font-300 text-xl mt-[1rem] text-left ' id='value_txt'>Communication</p>
                     

                  </div>

               </div>

               <div className='flex flex-col'>

                  <div className='items-center' >

                     <Image src='/assets/respect.jpg' alt='/' width={110} height={110} className='values'/>

                     <p className='font-300 text-xl mt-[1rem] ml-[0.8rem]' id='value_txt' >Respect</p>

                  </div>

               </div>

               <div className='flex flex-col'>
                  
                  <div className='items-center ' >

                     <Image src='/assets/growth.jpg' alt='/' width={110} height={110} className='values'/>

                     <p className='font-300 text-xl mt-[1rem] ml-[1rem]' id='value_txt'
                    >Growth</p>

                  </div>

               </div>

               <div className='flex flex-col items-center '>

                  <div className='items-center' >

                     <Image src='/assets/determination.jpg' alt='/' width={110} height={110} className='values'/>

                     <p className='font-300 text-xl mt-[1rem]'id='value_txt'>
                        Determination
                     </p>

                  </div>

               </div> 

            </div>

      </div>
    );
}
 
export default MyValues;