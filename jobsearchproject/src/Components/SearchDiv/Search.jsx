import React from 'react'
import { AiOutlineBlock, AiOutlineCloseCircle, AiOutlineDashboard, AiOutlineFolderAdd, AiOutlineSearch } from 'react-icons/ai'
//import {AiOutlineDoor} from 'react-icons/bs'

const Search = () => {
  return (
    <div className='SearchDiv grid gap-10 bg-greyish rounded-[10px] p-[3rem]'>
      <form action="">
        <div className='firstDiv flex justify-between items-center rounded -[8px] gap[10px] 
  bg-white p-5 shadow-lg shadow-greyish-700'>
          <div className='flex gap-2 items-center'>
            <AiOutlineSearch className='text-[25px] icon' />
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Jobs Here...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
      hover:text-textcolor icon'/>
          </div>
          <div className='flex gap-2 items-center'>
            <AiOutlineFolderAdd className='text-[25px] icon' />
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Company...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
      hover:text-textcolor icon'/>
          </div>
          <div className='flex gap-2 items-center'>
            <AiOutlineBlock className='text-[25px] icon' />
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Location...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6]
      hover:text-textcolor icon'/>
          </div>
          <button className='bg-blueColor h-full p-5 px-10 rounded-[10px]
    text-white cursor-pointer hover:bg-blue-300 '>Search</button>
        </div>
      </form>
<div className='secDiv flex items-center gap-10 justify-center'>
  <div className='singlesearch flex items-center gap-2'>
    <label htmlFor="relevance" className='text-[#808080] font-semibold'>Sort by:</label>
    <select name="" id="relevance" className='bg-white rounded -[3px] px-4 py-1'>
      <option value="">Relevance</option>
      <option value="">Inclusive</option>
      <option value="">StartsWith</option>
      <option value="">Contains</option>


    </select>

  </div>
  <div className='singlesearch flex items-center gap-2'>
    <label htmlFor="Type" className='text-[#808080] font-semibold'>Type:</label>
    <select name="" id="Type" className='bg-white rounded -[3px] px-4 py-1'>
      <option value="">Full Time</option>
      <option value="">Part Time</option>
      <option value="">Remote</option>
      <option value="">Contract</option>


    </select>

  </div>
  <div className='singlesearch flex items-center gap-2'>
    <label htmlFor="Level" className='text-[#808080] font-semibold'>Level:</label>
    <select name="" id="Level" className='bg-white rounded -[3px] px-4 py-1'>
      <option value="">Advocate</option>
      <option value="">Senior</option>
      <option value="">Intermediate</option>
      <option value="">Beginer</option>


    </select>

  </div>
  <span className='text-[#a1a1a1 ]'>Clear All</span>
</div>

    </div>
  )
}

export default Search