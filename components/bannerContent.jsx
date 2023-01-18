
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const BannerContent = () => {

   useEffect(()=>{
      Aos.init({duration:2000})
   },[])

  return (

    <div>

      <div className="banner_content" data-aos='slide-right'>

         <h1 className="banner_title ">Hi, I`m Kelsy.</h1>
         <div className="banner_descript">
            Aspiring Software|Frontend Developer breaking into the Tech World.
         </div>
         <button> Get in Touch</button>
         <button> Visit Linkedin </button> 

      </div>

    </div>
  )
}

export default BannerContent;