import React from 'react'
import { AiFillInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8
    grid grid-cols-5 m-auto items-start justify-centre'>
      <div>
      <div className='LogoDiv'>
        <h1 className='logo text-[25] text-white pb-[1.5rem]'><strong>Job</strong>Search</h1>

      </div>
      <p className='text-white pb-[13px] opacity-70 leading-7'>
        We make our seekers and companies find the best jobs and the employers find the best candidates
      </p>
      </div>
      <div className="grid">
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>
        <div className='grid gap-3 '>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About us</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Features</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>




        </div>
      </div>
      <div className="grid">
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Resources
        </span>
        <div className='grid gap-3 '>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Support Centre</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>




        </div>
      </div>
      <div className="grid">
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Support
        </span>
        <div className='grid gap-3 '>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Event</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Promo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Req Demo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>

        </div>
      </div>
      <div className="grid">
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Join our network
        </span>
        <div >
          <small className='text-[14px] text-white'>
            jacintakazenzi99@gmail.com
          </small>
         <div className='icons flex gap-4 py-[1rem]'>
          <AiFillInstagram className='bg-white p-[18px] h-[35px] w-[30px] rounded-full icon
           text-white'/>
          <AiOutlineFacebook className='bg-white p-[18px] h-[35px]  w-[30px] rounded-full icon text-blueColor'/>
          <AiOutlineTwitter className='bg-white p-[18px] h-[35px] w-[30px] rounded-full icon text-blueColor'/>


         </div>

        </div>
      </div>
    </div>
  )
}

export default Footer