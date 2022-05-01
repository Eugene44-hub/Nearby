import React from 'react'
import one from "../../assets/images/covered/checked.png"
const Covered = () => {
  return (
    <section className='container'>
      <div className='p-[20px]'>
      <div className='text-center'>
      <h2 className='text-[#004034] text-[1.5rem]'>In every step you take we're always with you</h2>
      <p className='capitalize text-[#00DCBA] font-bold text-[1.25rem]'>we got you Covered</p>
      </div>

<div className='card mt-5'>
  <img src={one} alt="" />
  <p className='text-[1.125rem] font-bold p-4 text-center'>Our system is built to connect you to a network of professionals 24/7 in real-time.</p>
</div>

      </div>

    </section>
  )
}

export default Covered