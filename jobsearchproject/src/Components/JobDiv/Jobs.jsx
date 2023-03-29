import React from 'react'
import {BiTimeFive} from  'react-icons/bi'
import freepik from '../../Assests/freepik.png'
import codecanyon from '../../Assests/codecanyon.png'
import pixeden from '../../Assests/pixeden.png'
import photodune from '../../Assests/photodune.png'




const Data =[{
  id:1,
  image: freepik,
  Title:'Dev Engineer',
  time:'Now',
  location:'Canada',
  desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, odio.',
  Company:'Kaz.com'

},
{
  id:2,
  image: photodune,
  Title:'Android Developer',
  time:'12HRS',
  location:'Malaysia',
  desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, odio.',
  Company:'Novac .com'

},
{
  id:3,
  image: pixeden,
  Title:'Product Designer',
  time:'24HRS',
  location:'Canada',
  desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, odio.',
  Company:' linus.com'

},
{
  id:4,
  image: codecanyon,
  Title:'Web Developer',
  time:'15HRS',
  location:'Canada',
  desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, odio.',
  Company:'Novac linus.com'

}

]


const Jobs = () => {
  return (
    <div>
<div className="jobsContainer flex gap-8 justify-center flex-wrap items-center 
py-8">

  {
    Data.map(({ id,image,Title,time,location,desc,Company})=>{
      return(

        <div  key={id} 
        className="group group/item singleJob W-[70%] p-[15px] bg-white rounded
  [10px] hover:bg-blueColor shadow-lg shadow-greyish-400/700 hover:shadow-lg">

    <span className='flex justify-between items-center gap-4'>

      <h1 className='text-[16px] font -semibold text-textcolor group-hover:text-white'>{Title}</h1>

      <span className='flex items-center text-[#ccc] gap-1'>
        <BiTimeFive/>{time}
      </span>
    </span>

    <h6 className='text-[#ccc]'>{location}</h6>
    <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
    group-hover:text-white'>
     {desc}
    </p>
    <div className="company flex items-center gap-2">

<img src={image} alt="Company logo" className='W-[50%]' />  
<span className='text-[14px] py-[1rem] block group-hover:text-white'>{Company}</span>    
    </div>

    <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] 
    font-semibold text-textcolor hover:bg-white group-hover/item:text-textcolor group-hover:text-white'>
      Apply Now
    </button>

  </div> 

      )
    })
  }

  
</div>

    </div>
  )
}

export default Jobs 