import Image from 'next/image'
import Link from 'next/link'
import BannerContent from './bannerContent';


const Banner = () => {
   return ( 
      <div id='home' className='banner'>

         <Image
            src="/assets/banner.jpg"
            alt="bannerImage"
            fill
            className='bannerimg'
         />


         <BannerContent/>


      </div>

    );
}
 
export default Banner;