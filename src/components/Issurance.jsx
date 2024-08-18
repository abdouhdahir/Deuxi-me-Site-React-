import React from 'react'
import issurance from '../asset/img/issurance.png'
import issuran from '../asset/img/issuran.png'
const Issurance = () => {
  return (
    <div className='flex mt-60 justify-center gap-60 mb-60'>
      <div className='flex flex-col text-start items-start pb-72  w-[20%] h-full' style={{ backgroundImage: `url(${issurance})`}}>
        <h2 className='font-black pt-5 text-3xl w-[80%] ml-5 text-blue-950'>The new way to findyour new home</h2>
        <p className='text-blue-950 w-[80%] ml-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae recusandae.</p>
        <button className='bg-blue-950 text-white p-3 ml-5'>Browse Properties</button>
      </div>
      <div className='flex flex-col gap-20 w-[50%] h-full'>
        <div className='flex gap-20 items-center'>
            <div className='flex flex-col gap-5 items-start text-st2 '>
                <img src={issuran} alt="" />
                <h2 className='font-black text-3xl'>Property Insurance</h2>
                <p className='text-xl'>We offer our customer property
                protection of liability coverage and
                insurance for their better life.</p>
            </div>
            <div className='flex flex-col gap-5 items-start text-st2 '>
                <img src={issuran} alt="" />
                <h2 className='font-black text-3xl'>Property Insurance</h2>
                <p className='text-xl'>We offer our customer property
                protection of liability coverage and
                insurance for their better life.</p>
            </div>
        </div>
        <div className='flex gap-20 items-center'>
             <div className='flex flex-col gap-5 items-start text-st2 '>
                <img src={issuran} alt="" />
                <h2 className='font-black text-3xl'>Property Insurance</h2>
                <p className='text-xl'>We offer our customer property
                protection of liability coverage and
                insurance for their better life.</p>
            </div>
             <div className='flex flex-col gap-5 items-start text-st2 '>
                <img src={issuran} alt="" />
                <h2 className='font-black text-3xl'>Property Insurance</h2>
                <p className='text-xl'>We offer our customer property
                protection of liability coverage and
                insurance for their better life.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Issurance
