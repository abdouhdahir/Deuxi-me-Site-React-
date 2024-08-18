import React from 'react'
import { Tabs, Input, DatePicker, Button } from "antd";
import bgiHero from "../asset/img/bgiHero.png"
import commentaire from "../asset/img/commentaire.png"
import profil from "../asset/img/profil.png"
import logos from '../asset/img/logos.png'
import { FaStar } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className=' bg-header-gradient'>
        <div className='flex justify-between ml-52  '>
        <div className=' pb-60 pt-32  flex flex-col gap-28 justify-center items-start'>
            <h1 className='font-black text-6xl'>Buy, rent, or sell
                your property
                easily</h1>
            <p>A great platform to buy, sell, or even rent your
                properties without any commisions.</p>  
                <Tabs className="px-4 py-2 rounded-lg">
        <Tabs.TabPane tab="Rent" key="1" className="bg-white rounded-lg ">
          <SearchBar />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Buy" key="2" className="bg-white rounded-lg ">
          <BuyNav />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Sell" key="3" className="bg-white rounded-lg ">
          <SearchBar />
        </Tabs.TabPane>
      </Tabs>      
        </div>
        <div className='w-[900px] h-[800px] relative'  style={{ backgroundImage: `url(${bgiHero})`}}>
        <Blog />
        <BlogBottom/>
        </div>
        </div>
    </div>
  )
}
 
export default Hero

const SearchBar = () => (
    <div className="bg-white flex justify-between gap-7 p-3 rounded-lg items">
      <div className="">
        <p>Location</p>
        <Input
          placeholder="Chooose your locations"
          className="text-black  border-none focus:!border-none focus:!outline-none pl-0"
        />
      </div>
      <div className="w-[2px] bg-gray-400 my-2"></div>
      <div>
        <p>When</p>
        <DatePicker
          placeholder="Chooose your locations"
          className="text-black placeholder:text-black placeholder:font-bold border-none focus:!border-none focus:!outline-none pl-0"
        />
      </div>
      <div className="w-[2px] bg-gray-400 my-2"></div>
      <div>
        <Button type="primary" className="h-11 font-bold">
          Browse Properties
        </Button>
      </div>
    </div>
  );
  const BuyNav = () => (
    <div className="bg-white flex justify-between gap-7 p-3 rounded-lg items">
       <div>
        <p>When</p>
        <DatePicker
          placeholder="Chooose your locations"
          className="text-black placeholder:text-black placeholder:font-bold border-none focus:!border-none focus:!outline-none pl-0"
        />
      </div>
      <div className="w-[2px] bg-gray-400 my-2"></div>
     
      <div className="">
        <p>Location</p>
        <Input
          placeholder="Chooose your locations"
          className="text-black  border-none focus:!border-none focus:!outline-none pl-0"
        />
      </div>
      <div className="w-[2px] bg-gray-400 my-2"></div>
      <div>
        <Button type="primary" className="h-11 font-bold">
          Browse Properties
        </Button>
      </div>
    </div>
  );
const Blog = () => (
    <div className='bg-white w-[50%] p-5 absolute flex flex-col justify-center left-[0%] top-20'>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-5 items-center'>
                <img src={profil} alt="" className='rounded-full'/>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold text-xl'>Manuel Villa</h2>
                    <p className='text-gray-300'>Renter</p>
                    <div className='flex items-center gap-16'>
                        <p className='text-gray-300 '>Moved with</p>
                        <img src={logos} alt="" className='w-[100px] pb-2'/>
                    </div>
                </div>
            </div>
            <div className='flex items-start gap-5 pb-10'>
                <img src={commentaire} alt="" className='bg-black p-5 rounded-full'/>
                <p>I loved how smooth the move <br />
                was, and finally got the house <br />
                we wanted.</p>
            </div>
        </div>
        <div className='w-[100%] h-[3px] mb-10 bg-gray-200'></div>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-black'>$1,500</h1>
                <p className='text-gray-300'>Saved up to</p>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-black'>-24 hrs</h1>
                <p className='text-gray-300'>Process time</p>
            </div>
        </div>
    </div>
)  
const BlogBottom = () => (
  <div className='bg-blogHero absolute bottom-0 right-0 py-5 px-10 flex flex-col gap-10 rounded-tl-2xl'>
    <div className='flex flex-col gap-5'>
    <div className='flex gap-20 items-center'>
      <h2 className='text-white'>Excellent</h2>
      <img src={logos} alt="" className='bg-white w-[80px] mb-2'/>
    </div>
    <div className='flex gap-1'>
    <FaStar className='text-yellow-300'/>
    <FaStar className='text-yellow-300'/>
    <FaStar className='text-yellow-300'/>
    <FaStar className='text-yellow-300'/>
    <FaStar className='text-yellow-300'/>
    </div>
    </div>
    <p className='text-white'>From 3,264 reviews</p>


  </div>
)