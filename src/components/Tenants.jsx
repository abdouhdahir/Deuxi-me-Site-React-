import React from 'react'
import Icon from '../asset/img/Tenant/Icon.png'
import Icon1 from '../asset/img/Tenant/Icon1.png'
import Icon2 from '../asset/img/Tenant/Icon2.png'
import { Carousel } from 'react-responsive-carousel';


const Tenants = () => {
  return (
    <div className='bg-tenantBgc flex flex-col gap-20 py-20'>
      <div className='flex justify-between text-white px-20'>
        <h2 className='text-6xl'>We make it easy for <br />
        <span className='text-tenant3'>tenants</span> and <span className='text-tenant3'>landlords.</span></h2>
        <p>Whether it’s selling your current home, getting <br />
         financing, or buying a new home, we make it easy  and <br />
          efficient. The best part? you’ll save a bunch of money <br />
         and time with our services.</p>
      </div>
      
      <div className='flex gap-10 '>
      <Carousel 
      >
      <div className='flex ml-60 gap-10 p-6'>
    <div className='bg-tenant1 flex items-start gap-6 p-6 rounded-lg shadow-lg flex-shrink-0'>
      <img src={Icon} alt="Icon" className='w-12 h-12'/>
      <div className='flex flex-col text-white'>
        <h3 className='text-xl font-semibold mb-2'>Virtual home tour</h3>
        <p className='text-sm leading-relaxed'>
          You can communicate directly with landlords and <br />
          we provide you with virtual tours before you buy or <br />
          rent the property.
        </p>
      </div>
    </div>
    <div className='bg-white flex items-start gap-6 p-6 rounded-lg shadow-lg flex-shrink-0'>
      <img src={Icon1} alt="Icon1" className='w-12 h-12'/>
      <div className='flex flex-col text-black'>
        <h3 className='text-xl font-semibold mb-2'>Virtual home tour</h3>
        <p className='text-sm leading-relaxed'>
          You can communicate directly with landlords and <br />
          we provide you with virtual tours before you buy or <br />
          rent the property.
        </p>
      </div>
    </div>
    <div className='bg-tenant3  flex items-start gap-6 p-6 rounded-lg shadow-lg flex-shrink-0'>
      <img src={Icon2} alt="Icon2" className='w-12 h-12'/>
      <div className='flex flex-col text-white'>
        <h3 className='text-xl font-semibold mb-2'>Virtual home tour</h3>
        <p className='text-sm leading-relaxed'>
          You can communicate directly with landlords and <br />
          we provide you with virtual tours before you buy or <br />
          rent the property.
        </p>
      </div>
    </div>
    <div className='bg-tenant3  flex items-start gap-6 p-6 rounded-lg shadow-lg flex-shrink-0'>
      <img src={Icon2} alt="Icon2" className='w-12 h-12'/>
      <div className='flex flex-col text-white'>
        <h3 className='text-xl font-semibold mb-2'>Virtual home tour</h3>
        <p className='text-sm leading-relaxed'>
          You can communicate directly with landlords and <br />
          we provide you with virtual tours before you buy or <br />
          rent the property.
        </p>
      </div>
    </div>
    <div className='bg-tenant3  flex items-start gap-6 p-6 rounded-lg shadow-lg flex-shrink-0'>
      <img src={Icon2} alt="Icon2" className='w-12 h-12'/>
      <div className='flex flex-col text-white'>
        <h3 className='text-xl font-semibold mb-2'>Virtual home tour</h3>
        <p className='text-sm leading-relaxed'>
          You can communicate directly with landlords and <br />
          we provide you with virtual tours before you buy or <br />
          rent the property.
        </p>
      </div>
    </div>
    <div className='bg-tenant3  flex items-start gap-6 p-6 rounded-lg shadow-lg flex-shrink-0'>
      <img src={Icon2} alt="Icon2" className='w-12 h-12'/>
      <div className='flex flex-col text-white'>
        <h3 className='text-xl font-semibold mb-2'>Virtual home tour</h3>
        <p className='text-sm leading-relaxed'>
          You can communicate directly with landlords and <br />
          we provide you with virtual tours before you buy or <br />
          rent the property.
        </p>
      </div>
    </div>
    <div className='bg-tenant3  flex items-start gap-6 p-6 rounded-lg shadow-lg flex-shrink-0'>
      <img src={Icon2} alt="Icon2" className='w-12 h-12'/>
      <div className='flex flex-col text-white'>
        <h3 className='text-xl font-semibold mb-2'>Virtual home tour</h3>
        <p className='text-sm leading-relaxed'>
          You can communicate directly with landlords and <br />
          we provide you with virtual tours before you buy or <br />
          rent the property.
        </p>
      </div>
    </div>
      </div>
      </Carousel>
      </div>
      <div></div>


      <div className='flex justify-between px-96 pt-20 border-t border-gray-200 text-white'>
        <div>
          <h1>7.4%</h1>
          <p>Property return Rate</p>
        </div>
        <div></div>
        <div>
          <h1>3,856</h1>
          <p>Property return Rate</p>
        </div>
        <div></div>
        <div>
          <h1>2,568</h1>
          <p>Property return Rate</p>
        </div>
      </div>

     
    </div>
  )
}

export default Tenants
