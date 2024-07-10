import { useState } from 'react'
import next from '../../../public/vercel.svg'
import { FaStar } from 'react-icons/fa'

export default function ChoiceItem() {

  return (
    <main>
      <div className='p-2'>
        <div className="flex items-center justify-center gap-5 p-2 bg-[#446e9134] rounded">
          <div>
            <img src={next} alt="profile" className='border p-2 h-[7rem] w-[7rem] rounded' />
          </div>
          <div className="p-2 w-full">
            <div className="p-1">
              <h1 className="text-blue-500 text-lg font-semibold">Lorem Ipsum</h1>
              <p className="font-light text-sm">dolor sit amet</p>
            </div>
            <div className="flex items-center justify-start gap-1 p-1">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <div className="flex items-center p-1 py-1">
              <button className="bg-blue-500 p-[7px] text-white rounded px-8">Connect</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}