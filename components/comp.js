import React from 'react'

const Comp = ({img,head,text}) => {
  return (
    <div className='border shadow-md flex flex-col items-center space-y-2 rounded-tr-[60px] w-72 px-4
     rounded-bl-[60px] bg-white py-4 ' >
      <picture>
        <img src={img} alt="" className=' rounded-tr-[60px]  rounded-bl-[60px] w-64 h-64' />
      </picture>
      <p className='font-bold text-xl uppercase'>{head}</p>
      <p className='text-center'>{text}</p>
    </div>
  )
}

export default Comp
