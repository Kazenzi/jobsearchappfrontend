import React from 'react'
import two from '../../Assests/two.png'
const Value = () => {
  return (
    <div className='mb-[2rem] mt-[4rem]'>
      <h1 className='text-textcolor text-[25px] py-[2rem] pb-[3rem] 
      font-bold w-[350px] block'>
        The value that hold us true and to account</h1>

      <div className='grid gap -[10rem] grid-cols-3 items-center'>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>

          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded -[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center
              justify-center'>

              <img src={two} alt="" className='W-[70%]' />

            </div>
            <span className='font-semibold text-textcolor text-[18px]'>
              Simplicity
            </span>

          </div>
          <p className='text-[25px] text-textcolor opacity-[.7] py-[1rem] font-semibold'>
            Things being made beautiful simple are at the heart of everything we do.

          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>

          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded -[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center
  justify-center'>

              <img src={two} alt="" className='W-[70%]' />

            </div>
            <span className='font-semibold text-textcolor text-[18px]'>
              Simplicity
            </span>

          </div>
          <p className='text-[25px] text-textcolor opacity-[.7] py-[1rem] font-semibold'>
            We believe in making things better for everyone even if it takes time.

          </p>
        </div>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>

          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded -[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center
  justify-center'>

              <img src={two} alt="" className='W-[70%]' />

            </div>
            <span className='font-semibold text-textcolor text-[18px]'>
              Simplicity
            </span>

          </div>
          <p className='text-[25px] text-textcolor opacity-[.7] py-[1rem] font-semibold'>
            We work on the basis of creating trust which can be nartured through authenticity and transparency.

          </p>
        </div>
      </div>


      <div className="card mt-[2rem]  bg-blueColor p-[6rem] rounded [10px]">
        <div>
          <h1 className='text-blueColor text-[30px] font-bold'>
            Ready to switch a career

          </h1>
          <h2 className='text-white text-[25px] font-bold'>
            lets get started!
          </h2>
          <button className='border -[2px] rounded -[10px] py-[4px] px-[50px] text-[18px]
          font-semibold text-blueColor hover:bg-white border-blueColor '>
            Get Started
          </button>
        </div>

      </div>
    </div>
  )
}

export default Value