import React from 'react'
import Product1 from '../asset/img/product/product1.png'
import Product2 from '../asset/img/product/product2.png'
import Product3 from '../asset/img/product/product3.png'
import Product4 from '../asset/img/product/product4.png'
import Product5 from '../asset/img/product/product5.png'
import Product6 from '../asset/img/product/product6.png'
import { FaRegHeart } from "react-icons/fa";
import { LiaBedSolid } from "react-icons/lia";
import { FaBath } from "react-icons/fa6";
import { TbMeterSquare } from "react-icons/tb";
import { IoSearchSharp } from "react-icons/io5";

import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';



const Product = () => {
 
  return (
    <div className='flex flex-col justify-center items-center gap-20 mb-60'>
      <div className='flex flex-col gap-5 justify-center items-center text-center'>
        <h2 className='text-5xl font-black'>Based on your location</h2>
        <p>Some of our picked properties near you location.</p>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex justify-between items-center mb-10'>
        <div className='pr-[690px] pl-28'>
        <Segmented
    options={[
      {
        label: 'Rent',
        value: 'Rent',
        icon: <BarsOutlined />,
      },
      {
        label: 'Buy',
        value: 'Buy',
        icon: <AppstoreOutlined />,
      },
      {
        label: 'Sell',
        value: 'Sell',
        icon: <AppstoreOutlined />,
      },
    ]}
  />
        </div>
        <div className='flex gap-3  border bg-bgcHeader p-2 items-center mr-28' >
        <IoSearchSharp className='text-violet-500 text-xl'/>
        <input type="text" className='bg-transparent outline-none' placeholder='Recherche'/>
        </div>
        </div>
        <div>
        <Cards/>
        </div>
      </div>
      <button className='bg-violet-950 px-5 py-2 text-2xl cursor-pointer text-white'>Browse more properties</button>
    </div>
  )
}

export default Product


const Card = [
  {
    id:"1",
    img: Product1,
    price:"$2,095",
    title:"Palm Harbor",
    address:"2699 Green Valley, Highland Lake, FL",
    beds:"3",
    bathrooms:"2"
  },
  {
    id:"2",
    img: Product2,
    price:"$2,095",
    title:"Palm Harbor",
    address:"2699 Green Valley, Highland Lake, FL",
    beds:"3",
    bathrooms:"2"
  },
  {
    id:"3",
    img: Product3,
    price:"$2,095",
    title:"Palm Harbor",
    address:"2699 Green Valley, Highland Lake, FL",
    beds:"3",
    bathrooms:"2"
  },
  {
    id:"4",
    img: Product4,
    price:"$2,095",
    title:"Palm Harbor",
    address:"2699 Green Valley, Highland Lake, FL",
    beds:"3",
    bathrooms:"2"
  },
  {
    id:"5",
    img: Product5,
    price:"$2,095",
    title:"Palm Harbor",
    address:"2699 Green Valley, Highland Lake, FL",
    beds:"3",
    bathrooms:"2"
  },
  {
    id:"6",
    img: Product6,
    price:"$2,095",
    title:"Palm Harbor",
    address:"2699 Green Valley, Highland Lake, FL",
    beds:"3",
    bathrooms:"2"
  }
]

const Cards = () => {
  return (
    <div className="grid gap-10 grid-cols-3 justify-center">
      {Card.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg shadow-lg bg-white w-96 mx-auto">
          <div className="h-48">
            <img src={item.img} alt="" className="w-full h-full object-cover rounded-t-lg" />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-baseline space-x-2">
                <h1 className="text-2xl font-bold text-gray-800">{item.price}</h1>
                <p className="text-gray-500 text-sm">/ month</p>
              </div>
              <div className='border-2 border-gray-200 p-2 rounded-full'>
              <FaRegHeart className='text-xl'/>

              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
          </div>
          <div className="p-4">
            <p className="text-gray-500">{item.address}</p>
          </div>
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
              <LiaBedSolid className='text-violet-500 text-xl'/>
                <p className="text-gray-600">{item.beds} Beds</p>
              </div>
              <div className="flex items-center space-x-2">
              <FaBath className='text-violet-500 text-xl'/>
                <p className="text-gray-600">{item.bathrooms} Bathrooms</p>
              </div>
              <div className="flex items-center space-x-2">
              <TbMeterSquare className='text-violet-500 text-xl'/>
                <p className="text-gray-600">5x7 m²</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


