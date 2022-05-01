import React from 'react'
import one from "../../assets/images/covered/1.png"
import two from "../../assets/images/covered/2.png"
import three from "../../assets/images/covered/3.png"

import ImageCard from '../Cards/ImageCard'

type Cover={
  img:any;text:string
}[]

const Covered = () => {

const covered:Cover=[
  {
    img:one,
    text:"Our system is built to connect you to a network of professionals 24/7 in real-time."
  },
  {
    img:one,
    text:"Our system is built to connect you to a network of professionals 24/7 in real-time."
  },
  {
    img:one,
    text:"Our system is built to connect you to a network of professionals 24/7 in real-time."
  },
  {
    img:one,
    text:"Our system is built to connect you to a network of professionals 24/7 in real-time."
  },
  {
    img:one,
    text:"Our system is built to connect you to a network of professionals 24/7 in real-time."
  }
]


  return (
    <section className='container pt-[10rem]'>
      <div className='p-[20px]'>
      <div className='text-center'>
      <h2 className='text-[#004034] text-[1.5rem]'>In every step you take we're always with you</h2>
      <p className='capitalize text-[#00DCBA] font-bold text-[1.25rem]'>we got you Covered</p>
      </div>
<div className='mt-[5rem]'>
  {covered.map((item,index)=>(
<ImageCard key={index} img={item.img} text={item.text}/>

  ))}

</div>


      </div>

    </section>
  )
}

export default Covered