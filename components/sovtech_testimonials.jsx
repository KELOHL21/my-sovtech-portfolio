
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay,  } from "swiper";

export default function App() {
  return (
    <div className=' w-100% m-6'  data-aos='zoom-in'>    


      <h1 className='text-4xl mb-[2rem]'>Testimonials</h1>


      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
   
        modules={[Autoplay, ]}
        className="mySwiper"
      >
        <SwiperSlide>

        <div className='px-4 text-center cursor-pointer mb-[2rem]'>

                 <Image className='testimonial_imgs' src='/assets/etischool.jpg' alt='etischool_img' width={80} height={80}/>

                <p className='leading-relaxed py-[15px] mx-10 text-xl'> “ SovTech has been extremely efficient right from the start. The team is friendly, helpful and knowledgeable. I have been more than pleased with the service. ”</p>

                 <h2 className='text-2xl font-medium text-[#708B75]'>
                     -Etischool
                  </h2>

          </div>

        </SwiperSlide>

        <SwiperSlide>

        <div className='px-4 text-center cursor-pointer mb-[2rem]'>

                 <Image className='testimonial_imgs' src='/assets/Baotree.jpg' alt='Baotree_img' width={60} height={60}/>

                  <p className='leading-relaxed py-[15px] mx-10 text-xl'>“One word to sum it all up: Determination. It`s been such a pleasure moving through teams who have the same determination to get us up and running, tested and deployed. ”</p>

                 <h2 className='text-2xl font-medium text-[#708B75]'>
                     -Baotree
                  </h2>
                </div>

        </SwiperSlide>

        <SwiperSlide>

        <div className='px-4 text-center cursor-pointer mb-[2rem]'>

                  <Image className='testimonial_imgs' src='/assets/vortex_systems.jpeg' alt='vortex_system' width={60} height={60}/>

                  <p className='leading-relaxed py-[15px] mx-10 text-xl'>“My project planning was straight forward, and all deliverables were discussed and planned out properly. I will be moving forward to engage SovTech for projects.”</p>

                  

                   <h2 className='text-2xl font-medium text-[#708B75]'>
                        -Votex Systems
                    </h2>

               </div>

        </SwiperSlide>

      </Swiper>
    </div>
  );
}



