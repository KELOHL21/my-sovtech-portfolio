import Testimonial from "./sovtech_testimonials";
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


const SovtechSection = () => {

   useEffect(()=>{
      Aos.init({
         duration:2000,
         easing: 'ease-in-sine',
         delay: 300,
      })
   },[])

   return ( 

      <div className="w-[90%] flex flex-col text-center m-auto mt-[0.5rem]" >

         <h1 id='whysovtech' className=" flex flex-col m-2 text-5xl font-medium text-center text-[#708B75]" data-aos='zoom-in'>

            Why SovTech?

            <span className='inline-flex h-[2px] mt-0.5 m-auto bg-white rounded w-[7rem] '></span>

         </h1>

         <span className="items-center pt-5 text-2xl font-light leading-relaxed" data-aos='slide-right'>

         I was inspired by SovTech`s tale when browsing their website. A company founded in a garage has grown to over 300 of the top engineering experts, offering a world-class platform. SovTech is committed to their values. As well as their ambitions. All of those successful qualities resonated with me. And encouraged me to choose SovTech. This company, I believe, has the skills and expertise to push me to become not only a better Developer, but also a better person. Being one of Africa`s finest custom software development companies simplifies the decision to work with. I still have a lot to learn, but if given the chance, I am confident that I can benefit greatly from every single individual at Sovtech and do amazing things.

         </span>
            
            <Testimonial />

      </div>
    );
}
 
export default SovtechSection;