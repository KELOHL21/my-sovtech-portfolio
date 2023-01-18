import MyValues from "./myvalues";
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


const ABoutMe = () => {

   useEffect(()=>{
      Aos.init({
         duration:2000,
         easing: 'ease-in-sine',
         delay: 300,
      })
   },[])

   return ( 

      <div id="about" className=" w-[87%] flex flex-col ml-[4rem] mb-[2rem]" >

         <h1 className="flex flex-col m-10 text-5xl font-medium text-center text-[#708B75]" data-aos='zoom-in'> Who am I 

        <span className='inline-flex h-1 mt-2 ml-[10em] bg-white rounded w-[5rem] '></span>

         </h1> 

            <h3 className='flex flex-col text-2xl text-center font-extralight' data-aos='slide-left'>

               “We`ve got to learn to start believing in ourselves because if we don`t — who will?”

               <span className="py-4">-Cara Alwill Leyba</span>

            </h3>

            <p className='items-center text-2xl font-light leading-loose py-7 text-center' data-aos='slide-right'>
            
               Since graduating from high school in 2018, I found it difficult to find my path, causing me to have held several positions.However, I have discovered a job title that is in line with my soul and that is as a Software/Frontend Developer. 
               
               Despite having just recently begun to develop, I have entirely lost myself in coding, I`ve fallen inlove with every piece of syntax and every bug. During my time at Code Space Academy I learnt the basics of the world within Software Developement namely HTML, CSS, JAVASCRIPT and PHP. I`ve currently taken interest in frameworks such as Next.js and I am currently learning Tailwind CSS and SASS.     
               
               Although my passion is Design and Frontend work I hope to once I`ve established a firm foot in the Frontend world  be able to move and dabble in more Backend work later within the futher if the opportunity is given.

               </p>        
                      
.

            <MyValues/>

      </div>
    );
}
 
export default ABoutMe;