import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import ABoutMe from '../components/aboutme'
import SovtechSection from '../components/sovtechSection'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SovTech Mini-Portfolio</title>
        <meta name="description" content="Generated by create next app" />

      </Head>
    
         <Navbar />

      <div className='flex-col w-screen h-screen p-0 m-0 '>
  
            <Banner />
            <ABoutMe />
            <SovtechSection />

      </div>
      
    </div>
  )
}
