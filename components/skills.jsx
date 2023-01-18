import {AiFillHtml5} from 'react-icons/ai'
import { DiCss3} from 'react-icons/di'
import {SiJavascript, SiNextdotjs,SiTailwindcss, } from 'react-icons/si'
import {FaReact} from 'react-icons/fa'



const Skills = () => {

   return(
      <div className='container m-auto mt-[23rem] '>

         <h1 className='bg-gray-900 m-auto text-center text-white text-4xl py-5 h-[7rem]'>My Skills</h1>

         {/* HTML */}
         <div className='m-10 shadow-2xl'>

            <h3 className='text-gray-900 flex flex-row text-2xl font-light '>

            <AiFillHtml5  className='react_icons' size={35}/>

               HTML

            </h3>

            <div className="w-full h-10 bg-gray-900 ">

               <div className="text-right pt-[-10px] px-2 pb-[2px] text-black w-[70%] h-10 bg-blue-500">

                  <p className='text-[20px] pt-1'>70%</p>

               </div>

            </div>

         </div>


         {/* CSS */}

         <div className='m-10 shadow-2xl'>    

            <h3 className='text-gray-900 flex flex-row text-2xl font-light'>

            <DiCss3 className='react_icons' size={35}/>
               CSS

            </h3>

            <div className="w-full h-10 bg-gray-900">

               <div className="text-right pt-[-10px] px-2 pb-[2px] text-black w-[65%] h-10 bg-red-500">
                  
                  <p className='text-[20px] pt-1'>65%</p>

               </div>

            </div>

         </div>

         {/* JAVASCRIPT */}

         <div className='m-10 shadow-2xl'>   

            <h3 className='text-gray-900 flex flex-row text-2xl font-light'>
               
            <SiJavascript className='react_icons' size={35}/>

               JAVASCRIPT
               
            </h3>

            <div className="w-full h-10 bg-gray-900">

               <div className="text-right pt-[-10px] px-2 pb-[2px] text-black w-[55%] h-10 bg-purple-500">

                  <p className='text-[20px] pt-1'>55%</p>

               </div>

            </div>

         </div>

         {/* REACT.JS */}

         <div className='m-10 shadow-2xl'>   

            <h3 className='text-gray-900 flex flex-row text-2xl font-light'>
               
            <FaReact className='react_icons' size={35}/>

               REACT.JS
               
            </h3>

            <div className="w-full h-10 bg-gray-900">

               <div className="text-right pt-[-10px] px-2 pb-[2px] text-black w-[55%] h-10 bg-orange-500">

                  <p className='text-[20px] pt-1'>55%</p>

               </div>

            </div>

         </div>

         {/* Next.js */}

         <div className='m-10 shadow-2xl'>  

            <h3 className='text-gray-900 flex flex-row text-2xl font-light'>
               
            <SiNextdotjs className='react_icons' size={35}/>

               NEXT.JS
               
            </h3>

            <div className="w-full h-10 bg-gray-900">

               <div className="text-right pt-[-10px] px-2 pb-[2px] text-black w-[65%] h-10 bg-green-500">

                  <p className='text-[20px] pt-1'>65%</p>

               </div>
            </div>
         </div>

         {/* Tailwind */}
         <div className='m-10 shadow-2xl '>      

            <h3 className='text-gray-900 flex flex-row text-2xl font-light'>
               
            <SiTailwindcss className='react_icons' size={35}/>

               TAILWIND
               
            </h3>

            <div className="w-full h-10 bg-gray-900 ">

               <div className="text-right  pt-[-10px] px-2 pb-[2px] text-black w-[40%] h-10 bg-yellow-400">

                  <p className='text-[20px] pt-1'>40%</p>

               </div>

            </div>

         </div>

      </div>
   )
  
}
 
export default Skills;