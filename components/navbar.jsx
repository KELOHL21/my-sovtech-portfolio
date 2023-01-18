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

              <li className='mx-8 duration-500 cursor-pointer text-2xl  font-semibold hover:font-bold whitespace-nowrap text-center bg-[#708B75] hover:bg-transparent w-[8rem] rounded py-1 px-6 items-center '>

                <Link href='#home' >
                  Home
                </Link>
              </li>

              <li className='mx-8 hover:text-[#708B75] hover:font-bold duration-500 cursor-pointer text-2xl  font-semibold whitespace-nowrap    '>
              <Link href='#aboutme'>
                  About Me
              </Link>
              </li>

            <li className='mx-8 hover:text-[#708B75] hover:font-bold  duration-500 cursor-pointer text-2xl  font-semibold whitespace-nowrap  hover:shadow-white-600'>
              <Link href='#whysovtech'>
              Why SovTech?
              </Link>
            </li>

        </ul>

          <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
       </div>

       <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>

        <h1 className='w-full text-3xl font-bold text-blue-500 m-4'>KELSY</h1>

          <li className='p-4 border-b hover:text-black duration-500 cursor-pointer text-2xl'>          
            <Link href='home'>
              Home
            </Link>
          </li>

         <li className='p-4 border-b hover:text-black duration-500 cursor-pointer text-2xl'>       
            <Link href='about'>
             About Me
            </Link>
          </li>

          <li className='p-4 border-b hover:text-black duration-500 cursor-pointer text-2xl'>
            <Link href='whysovtech'>
            Why SovTech?
          </Link></li>
      </ul>

      </div>

      <div className='social_icons space-x-3'>

      <AiFillGithub size={30} className='hover:animate-bounce'/>

      <AiFillLinkedin size={30} className='hover:animate-bounce'/>

       <SiIndeed size={30} className='hover:animate-bounce'/>

       <AiFillFacebook size={30} className='hover:animate-bounce'/>

      </div>

    </div>

  );
};

export default Navbar