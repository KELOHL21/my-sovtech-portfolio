import MyValues from "./myvalues";
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


const ABoutMe = () => {

   useEffect(()=>{
      Aos.init({
         duration:2000,
         easing: 'ease-in-sine',
         delay: 500,
      })
   },[])

   return ( 

      <div  className=" w-[90%] h-screen flex flex-col text-center m-auto mt-[5rem]" >

         <h1 id='about' className=" flex flex-col m-2 text-5xl font-medium text-center text-[#708B75]" data-aos='zoom-in'>

            Who am I?

            <span className='inline-flex h-[2px] mt-0.5 m-auto bg-white rounded w-[7rem] '></span>

         </h1>

            <h3 className='flex flex-col pt-5 text-2xl text-center font-extralight' data-aos='slide-left'>

               “We`ve got to learn to start believing in ourselves because if we don`t — who will?”

               <span className="pt-4">-Cara Alwill Leyba</span>

            </h3>

            <p  className='items-center pt-8 text-2xl font-light leading-relaxed text-center' data-aos='slide-right'>
            
               Since graduating from high school in 2018, I found it difficult to find my path, causing me to have held several positions.However, I have discovered a job title that is in line with my soul and that is as a Software/Frontend Developer. 
               
               Despite having just recently begun to develop, I have entirely lost myself in coding, I`ve fallen inlove with every piece of syntax and every bug. During my time at CodeSpace Academy I learnt the basics of the world within Software Developement namely HTML, CSS, JAVASCRIPT and some PHP . I`ve recently taken interest in frameworks such as Next.js and I am currently learning Tailwind CSS and SASS.     
               
               Although my passion is Design and Frontend work I hope to once I`ve established a firm foot in the Frontend world, grow into more Backend work later on within my career if the opportunity is given to me. My end goal is to become a Fullstack Developer with Frontend being my strongest skill.

               </p>        
                      


            <MyValues/>

      </div>
    );
}
 
export default ABoutMe;