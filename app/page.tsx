"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [menu,setMenu] = useState(false)
  return (
    <div className=' relative font-alata w-screen h-screen overflow-x-hidden'>
      {menu && (
        <div className=' md:hidden  fixed  top-0 left-0 inset-0 bg-black z-10 '>
          <div className=' flex justify-center  ml-10 w-full h-full  text-white flex-col space-y-4'>
            <Link onClick={()=>{setMenu(false)}} className=' text-3xl' href={"/"}>
              About
            </Link>
            <Link onClick={()=>{setMenu(false)}} className=' text-3xl' href={"/"}>
              Careers
            </Link>
            <Link onClick={()=>{setMenu(false)}} className=' text-3xl' href={"/"}>
              Events
            </Link>
            <Link onClick={()=>{setMenu(false)}} className=' text-3xl' href={"/"}>
              Products
            </Link>
            <Link onClick={()=>{setMenu(false)}} className=' text-3xl' href={"/"}>
              Support
            </Link>
          </div>
        </div>
      )}
      <div className=' h-[700px] md:h-[650px]  w-full flex flex-col bg-center bg-hero-mobile md:bg-hero bg-cover bg-no-repeat'>
        <div className=' flex px-5 md:px-20 py-10 flex-row  justify-between'>
          <div className=' z-20'>
            <Image
            src={"/images/logo.svg"}
            width={192}
            height={32}
            alt='logo'/>
          </div>
          <div className=' hidden md:flex text-white flex-row space-x-4'>
            <Link href={"/"}>
              About
            </Link>
            <Link href={"/"}>
              Careers
            </Link>
            <Link href={"/"}>
              Events
            </Link>
            <Link href={"/"}>
              Products
            </Link>
            <Link href={"/"}>
              Support
            </Link>
          </div>
          <button className=' z-20 md:hidden flex' onClick={()=>{setMenu(!menu)}}>
            {!menu && (
              <Image
              src={"/images/icon-hamburger.svg"}
              width={24}
              height={16}
              alt='menu'/>
            )}
            {menu && (
              <Image
              src={"/images/icon-close.svg"}
              width={24}
              height={16}
              alt='menu'/>
            )}
            
          </button>
        
        </div>
        <div className='mt-40 ml-[10%] md:ml-20 uppercase border-2 border-white w-[300px] md:w-[500px] p-5 font-light text-5xl md:text-7xl text-white'>
          Immersive experiences that deliver 
        </div>
      </div>
      <div className=' w-full flex min-[1627px]:ml-0 md:ml-[5%] min-[890px]:ml-[10%] min-[1627px]:justify-center md:justify-normal justify-center items-center py-10 md:py-40  '>
        <div className=' w-10/12  md:w-[400px] min-[890px]:w-[500px] min-[1314px]:w-auto  relative'>
          <Image
          src={"/images/desktop/image-interactive.jpg"}
          width={731}
          height={500}
          className='  object-cover'
          alt='interactive'/>
          <div className=' md:items-start  items-center w-full md:w-[350px] min-[890px]:w-[400px] min-[1314px]:w-[600px] md:absolute min-[1314px]:top-44 top-28 left-[300px]  min-[890px]:top-32  min-[890px]:left-[400px] bg-white p-10 min-[890px]:p-20 min-[1314px]:left-[550px] flex flex-col'>
            <div className=' md:text-start text-center uppercase text-3xl  md:text-xl min-[1314px]:text-5xl font-thin'>
              The leader in interactive VR 
            </div>
            <div className=' md:text-start text-center text-gray-600 mt-5 min-[1314px]:text-base md:text-xs'>
              Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
            </div>
          </div>
        </div>
       
      </div>
      <div className=' hidden md:flex flex-col pb-40 space-y-10'>
        <div className=' px-20 pb-10  flex flex-row justify-between'>
          <div className=' text-5xl font-extralight'>
            OUR CREATIONS 
          </div>
          <div className=' flex justify-center items-center '>
            <button className=' uppercase tracking-widest py-1 border-2 border-black text-black bg-transparent px-3 hover:border-none hover:bg-black hover:text-white'>
              see all
            </button>
          </div>
        </div>
        <div className='  space-x-5 w-full flex flex-row px-20'>
          <div className=' group/earth relative w-1/4'>
            <Image
            src={"/images/desktop/image-deep-earth.jpg"}
            width={256}
            height={450}
            className=' w-full object-cover'
            alt='deep-earth'/>
            <Link href={"/"} className=' group-hover/earth:bg-white group-hover/earth:from-transparent group-hover/earth:bg-opacity-50  cursor-pointer absolute top-0 left-0 inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] '>
            </Link>
            <div className=' text-white absolute bottom-10 left-3 lg:left-10 font-josefin font-light'>
              <div className=' flex flex-col'>
                <div className='group-hover/earth:text-black text-2xl  lg:text-3xl  2xl:text-5xl'>
                  DEEP
                </div>
                <div className='group-hover/earth:text-black text-2xl  lg:text-3xl  2xl:text-5xl'>
                  EARTH
                </div>
              </div>
            </div>
          </div>
          <div className=' group/night relative w-1/4'>
            <Image
            src={"/images/desktop/image-night-arcade.jpg"}
            width={256}
            height={450}
            className=' w-full object-cover'
            alt='night-arcade'/>
            <Link href={"/"} className=' group-hover/night:bg-white group-hover/night:from-transparent group-hover/night:bg-opacity-50  cursor-pointer absolute top-0 left-0 inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] '>
            </Link>
            <div className=' text-white absolute bottom-10 left-3 lg:left-10 font-josefin font-light'>
              <div className=' flex flex-col'>
                <div className='group-hover/night:text-black  text-2xl  lg:text-3xl 2xl:text-5xl'>
                  NIGHT
                </div>
                <div className='group-hover/night:text-black  text-2xl  lg:text-3xl  2xl:text-5xl'>
                  ARCADE
                </div>
              </div>
            </div>
          </div>
          <div className=' group/soccer  relative w-1/4'>
            <Image
            src={"/images/desktop/image-soccer-team.jpg"}
            width={256}
            height={450}
            className=' w-full object-cover'
            alt='soccer-team'/>
            <Link href={"/"} className='group-hover/soccer:bg-white group-hover/soccer:from-transparent group-hover/soccer:bg-opacity-50  cursor-pointer absolute top-0 left-0 inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] '>
            </Link>
            <div className=' text-white absolute bottom-10 left-3 lg:left-10 font-josefin font-light'>
              <div className=' flex flex-col'>
                <div className='group-hover/soccer:text-black  text-2xl  lg:text-3xl  2xl:text-5xl'>
                  SOCCER
                </div>
                <div className='group-hover/soccer:text-black text-2xl  lg:text-3xl  2xl:text-5xl'>
                  TEAM VR
                </div>
              </div>
            </div>
          </div>
          <div className=' group/grid  relative w-1/4'>
            <Image
            src={"/images/desktop/image-grid.jpg"}
            width={256}
            height={450}
            className=' w-full object-cover'
            alt='grid'/>
            <Link href={"/"} className='group-hover/grid:bg-white cursor-pointer group-hover/grid:from-transparent group-hover/grid:bg-opacity-50  cursor-pgrid absolute top-0 left-0 inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] '>
            </Link>
            <div className=' text-white absolute bottom-10 left-3 lg:left-10 font-josefin font-light'>
              <div className=' flex flex-col'>
                <div className='group-hover/grid:text-black  text-2xl  lg:text-3xl  2xl:text-5xl'>
                  THE
                </div>
                <div className='group-hover/grid:text-black text-2xl  lg:text-3xl  2xl:text-5xl'>
                  GRID
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='  space-x-5 w-full flex flex-row px-20'>
          <div className=' group/above relative w-1/4'>
            <Image
            src={"/images/desktop/image-from-above.jpg"}
            width={256}
            height={450}
            className=' w-full object-cover'
            alt='from-above'/>
            <Link href={"/"} className='group-hover/above:bg-white group-hover/above:from-transparent group-hover/above:bg-opacity-50  cursor-pointer absolute top-0 left-0 inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] '>
            </Link>
            <div className=' text-white absolute bottom-10 left-3 lg:left-10 font-josefin font-light'>
              <div className=' flex flex-col'>
                <div className='group-hover/above:text-black text-2xl  lg:text-3xl  2xl:text-5xl'>
                  FROM UP
                </div>
                <div className='group-hover/above:text-black text-2xl  lg:text-3xl 2xl:text-5xl'>
                  ABOVE VR
                </div>
              </div>
            </div>
          </div>
          <div className=' group/pocket relative w-1/4'>
            <Image
            src={"/images/desktop/image-pocket-borealis.jpg"}
            width={256}
            height={450}
            className=' w-full object-cover'
            alt='pocket-borealis'/>
            <Link href={"/"} className='group-hover/pocket:bg-white group-hover/pocket:from-transparent group-hover/pocket:bg-opacity-50  cursor-pointer absolute top-0 left-0 inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] '>
            </Link>
            <div className=' text-white absolute bottom-10 left-3 lg:left-10 font-josefin font-light'>
              <div className=' flex flex-col'>
                <div className='group-hover/pocket:text-black text-2xl  lg:text-3xl 2xl:text-5xl'>
                  POCKET
                </div>
                <div className='group-hover/pocket:text-black text-2xl  lg:text-3xl  2xl:text-5xl'>
                  BOREALIS
                </div>
              </div>
            </div>
          </div>
          <div className=' group/curiosity  relative w-1/4'>
            <Image
            src={"/images/desktop/image-curiosity.jpg"}
            width={256}
            height={450}
            className=' w-full object-cover'
            alt='curiosity'/>
            <Link href={"/"} className='group-hover/curiosity:bg-white group-hover/curiosity:from-transparent group-hover/curiosity:bg-opacity-50  cursor-pointer absolute top-0 left-0 inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] '>
            </Link>
            <div className=' text-white absolute bottom-10 left-3 lg:left-10 font-josefin font-light'>
              <div className=' flex flex-col'>
                <div className='group-hover/curiosity:text-black  text-2xl  lg:text-3xl  2xl:text-5xl'>
                  THE
                </div>
                <div className='group-hover/curiosity:text-black  text-2xl  lg:text-3xl 2xl:text-5xl'>
                  CURIOSITY
                </div>
              </div>
            </div>
          </div>
          <div className=' group/fisheye  relative w-1/4'>
            <Image
            src={"/images/desktop/image-fisheye.jpg"}
            width={256}
            height={450}
            className=' w-full object-cover'
            alt='fisheye'/>
            <Link href={"/"} className='group-hover/fisheye:bg-white group-hover/fisheye:from-transparent group-hover/fisheye:bg-opacity-50  cursor-pointer absolute top-0 left-0 inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] '>
            </Link>
            <div className=' text-white absolute bottom-10 left-3 lg:left-10 font-josefin font-light'>
              <div className=' flex flex-col'>
                <div className='group-hover/fisheye:text-black  text-2xl  lg:text-3xl 2xl:text-5xl'>
                  MAKE IT
                </div>
                <div className='group-hover/fisheye:text-black text-2xl  lg:text-3xl 2xl:text-5xl'>
                  FISHEYE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' md:hidden pb-20 w-full flex justify-center items-center flex-col'>
        <div className=' text-4xl text-center'>
          OUR CREATIONS
        </div>
        <div className=' w-full mt-10 flex flex-col space-y-8 justify-center items-center'>
          <Link href={"/"} className=' relative w-11/12 '>
            <Image
            src={"/images/mobile/image-deep-earth.jpg"}
            width={654}
            height={240}
            className=' w-full object-cover'
            alt='mobile-earth'/>
            <div className=' absolute top-0 left-0 inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)]'>
            </div>
            <div className=' text-white absolute flex flex-col bottom-3 left-3'>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                DEEP
              </div>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                EARTH
              </div>
            </div>
          </Link>
          <Link href={"/"} className=' relative w-11/12 '>
            <Image
            src={"/images/mobile/image-night-arcade.jpg"}
            width={654}
            height={240}
            className=' w-full object-cover'
            alt='mobile-night'/>
            <div className=' absolute top-0 left-0 inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)]'>
            </div>
            <div className=' text-white absolute flex flex-col bottom-3 left-3'>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                NIGHT
              </div>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                ARCADE
              </div>
            </div>
          </Link>
          <Link href={"/"} className=' relative w-11/12 '>
            <Image
            src={"/images/mobile/image-soccer-team.jpg"}
            width={654}
            height={240}
            className=' w-full object-cover'
            alt='mobile-soccer'/>
            <div className=' absolute top-0 left-0 inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)]'>
            </div>
            <div className=' text-white absolute flex flex-col bottom-3 left-3'>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                SOCCER
              </div>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                TEAM VR
              </div>
            </div>
          </Link>
          <Link href={"/"} className=' relative w-11/12 '>
            <Image
            src={"/images/mobile/image-grid.jpg"}
            width={654}
            height={240}
            className=' w-full object-cover'
            alt='mobile-grid'/>
            <div className=' absolute top-0 left-0 inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)]'>
            </div>
            <div className=' text-white absolute flex flex-col bottom-3 left-3'>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                THE
              </div>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                GRID
              </div>
            </div>
          </Link>
          <Link href={"/"} className=' relative w-11/12 '>
            <Image
            src={"/images/mobile/image-from-above.jpg"}
            width={654}
            height={240}
            className=' w-full object-cover'
            alt='mobile-from-above'/>
            <div className=' absolute top-0 left-0 inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)]'>
            </div>
            <div className=' text-white absolute flex flex-col bottom-3 left-3'>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                FROM UP
              </div>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                ABOVE VR
              </div>
            </div>
          </Link>
          <Link href={"/"} className=' relative w-11/12 '>
            <Image
            src={"/images/mobile/image-pocket-borealis.jpg"}
            width={654}
            height={240}
            className=' w-full object-cover'
            alt='mobile-pocket-borealis'/>
            <div className=' absolute top-0 left-0 inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)]'>
            </div>
            <div className=' text-white absolute flex flex-col bottom-3 left-3'>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                POCKET
              </div>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                BOREALIS
              </div>
            </div>
          </Link>
          <Link href={"/"} className=' relative w-11/12 '>
            <Image
            src={"/images/mobile/image-curiosity.jpg"}
            width={654}
            height={240}
            className=' w-full object-cover'
            alt='mobile-curiosity'/>
            <div className=' absolute top-0 left-0 inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)]'>
            </div>
            <div className=' text-white absolute flex flex-col bottom-3 left-3'>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                THE
              </div>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                CURIOSITY
              </div>
            </div>
          </Link>
          <Link href={"/"} className=' relative w-11/12 '>
            <Image
            src={"/images/mobile/image-fisheye.jpg"}
            width={654}
            height={240}
            className=' w-full object-cover'
            alt='mobile-fisheye'/>
            <div className=' absolute top-0 left-0 inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.7)]'>
            </div>
            <div className=' text-white absolute flex flex-col bottom-3 left-3'>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                MAKE IT
              </div>
              <div className=' text-3xl min-[400px]:text-5xl min-[600px]:text-7xl'>
                FISHEYE
              </div>
            </div>
          </Link>
          <button className=' border-2 border-black bg-transparent text-black py-2 px-5 tracking-widest hover:border-none hover:text-white hover:bg-black text-3xl'>
            SEE ALL 
          </button>
        </div>
        
      </div>
      <div className=' space-y-8 flex w-full bg-black py-10 px-20 flex-col'>
        <div className=' flex flex-col md:flex-row justify-between'>
          <div className=' space-y-8 flex flex-col'>
            <div className=' flex justify-center md:justify-normal'>
              <Image
              src={"/images/logo.svg"}
              width={192}
              height={32}
              alt='logo'/>
            </div>
            <div className=' flex space-y-4 md:space-y-0  text-center md:text-start text-white flex-col md:flex-row md:space-x-4'>
              <Link className=' hover:underline-offset-8 hover:underline' href={"/"}>
                About
              </Link>
              <Link className=' hover:underline-offset-8 hover:underline' href={"/"}>
                Careers
              </Link>
              <Link className=' hover:underline-offset-8 hover:underline' href={"/"}>
                Events
              </Link>
              <Link className=' hover:underline-offset-8 hover:underline' href={"/"}>
                Products
              </Link>
              <Link className=' hover:underline-offset-8 hover:underline' href={"/"}>
                Support
              </Link>
            </div>
          </div>
          <div className=' space-y-8  flex flex-col'>
            <div className=' mt-8 md:mt-0 h-[32px] flex flex-row justify-center md:justify-end space-x-5'>
              <div className=' hover:underline hover:underline-offset-[30px] cursor-pointer'>
                <Image
                src={"/images/icon-facebook.svg"}
                width={24}
                height={24}
                alt='facebook'/>
              </div>
              <div className=' hover:underline hover:underline-offset-8 cursor-pointer'>
                <Image
                src={"/images/icon-twitter.svg"}
                width={24}
                height={24}
                alt='twitter'/>
              </div>
              <div className=' hover:underline hover:underline-offset-8 cursor-pointer'>
                <Image
                src={"/images/icon-pinterest.svg"}
                width={24}
                height={24}
                alt='pinterest'/>
              </div>
              <div className=' hover:underline hover:underline-offset-8 cursor-pointer'>
                <Image
                src={"/images/icon-instagram.svg"}
                width={24}
                height={24}
                alt='instagram'/>
              </div>
            </div>
            <div className=' text-center md:text-start text-gray-400'>
            © 2021 Loopstudios. All rights reserved.
            </div>
          </div>
        </div>          
        </div>
      </div>
  )}
    