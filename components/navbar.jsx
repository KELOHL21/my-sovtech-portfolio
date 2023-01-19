import { useState, useEffect} from 'react';
import { AiOutlineClose, AiOutlineMenu, AiFillGithub, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai';
import {SiIndeed} from "react-icons/si";
import Link from 'next/link'

const Navbar = () => {

  // Mobile useState
  const [nav, setNav] = useState(false);

  // Navbar color useState
  const [color,setColor] = useState(false);

  const changeColor = () => {

    if( window.scrollY >= 100) {
      setColor(true);
    }else{
      setColor(false)
    }
  }

  useEffect(()=>{

      window.addEventListener('scroll', changeColor);

  },[])


  const handleNav = () => {

    setNav(!nav);

  };

  return (

    <div className={color ? 'nav nav_bg' : 'nav'}> 

      <div className="nav_links">

        <ul className='hidden text:sm md:flex md:w-full md:justify-end xl:text-lg xl:px-4'>

              <li className='mx-8 hover:duration-200  cursor-pointer text-2xl  font-normal hover:font-semibold whitespace-nowrap text-center bg-[#708B75] hover:bg-transparent w-[8rem] rounded py-1 px-6 items-center '>

                <Link href='#home' >
                  Home
                </Link>
              </li>

              <li className='mx-8 hover:bg-[#708B75] hover:text-white hover:font-semibold hover:duration-200  cursor-pointer text-2xl  font-normal whitespace-nowrap  w-[9rem] text-center py-1 px-6 rounded items-center'>
              <Link href='#about'>
                  About Me
              </Link>
              </li>

            <li className='mx-8 hover:bg-[#708B75] hover:text-white hover:font-semibold hover:duration-200 cursor-pointer text-2xl  font-normal whitespace-nowrap  w-[12rem] text-center py-1 px-6 rounded items-center'>
              <Link href='#whysovtech'>
              Why SovTech?
              </Link>
            </li>

        </ul>

          <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
       </div>

       <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#708B75] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>

        <div className='space-x-5 social_icons'>

        <AiFillGithub size={30} className='hover:animate-bounce'/>

        <AiFillLinkedin size={30} className='hover:animate-bounce'/>

        <SiIndeed size={30} className='hover:animate-bounce'/>

        <AiFillFacebook size={30} className='hover:animate-bounce '/>

        </div>

          <li className='p-4 text-2xl duration-500 border-b cursor-pointer hover:text-black'>          
            <Link href='home'>
              Home
            </Link>
          </li>

         <li className='p-4 text-2xl duration-500 border-b cursor-pointer hover:text-black'>       
            <Link href='about'>
             About Me
            </Link>
          </li>

          <li className='p-4 text-2xl duration-500 border-b cursor-pointer hover:text-black'>
            <Link href='whysovtech'>
            Why SovTech?
          </Link></li>
      </ul>

      </div>

      <div className='space-x-5 social_icons '>

      <AiFillGithub size={30} className='hover:animate-bounce'/>

      <AiFillLinkedin size={30} className='hover:animate-bounce'/>

       <SiIndeed size={30} className='hover:animate-bounce'/>

       <AiFillFacebook size={30} className='hover:animate-bounce '/>

      </div>

    </div>

  );
};

export default Navbar