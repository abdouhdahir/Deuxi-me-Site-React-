import React from 'react'
import logos from '../asset/img/logos.png'
import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Header = () => {
  return (
    <div className='flex justify-between items-center px-10 py-5 bg-bgcHeader'>
      <div className='flex items-center gap-10 '>
      <img src={logos} alt="" className='pb-1'/>
      <nav >
        <ul className='flex gap-10 items-center'>
            <li>Rent</li>
            <li>Buy</li>
            <li>Sell</li>
            <li> <Space wrap>
    <Select
      defaultValue="Manage Property"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
     </Space></li>
     <li> <Space wrap>
    <Select
      defaultValue="Resources"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
     </Space></li>

            
        </ul>
        </nav>
      </div>
      <div className='flex gap-5'>
        <button className='border-2 border-gray-200 py-3 px-4 font-bold hover:bg-violet-500 hover:text-white'>Login</button>
        <button className='border-2 border-gray-200 py-3 px-5 font-bold hover:bg-violet-500 hover:text-white'>Sign up</button>
      </div>
    </div>
  )
}

export default Header
