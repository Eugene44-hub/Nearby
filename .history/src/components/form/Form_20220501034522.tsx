import React from 'react'
import send from '../../assets/images/send.svg';
import nearby from '../../assets/images/nearbyDark.svg';
const Form = () => {
  return (
    <section className='mt-[10rem] p-[20px] '>
<div className='container md:pl-[61px] md:pr-[57px]'>
      	<div className="flex justify-center">
					<img
						src={send}
						className="bg-[#00DCBA] mr-[16.79px] p-3 rounded-tl-[8.91471px] rounded-br-[8.91471px]"
						alt="send"
					/>
					<img src={nearby} alt="send" />
				</div>
        <p className='text-center font-bold mt-[2rem] text-[#01AB8B]'>Be part of the network of interconnectivity </p>
        <h2 className='text-center md:text-[2rem] text-[1.5rem] lg:w-[50%] m-auto'> Join the waiting list now to get early access to all the good stuff completely free</h2>
        </div>
        <form action="#">
<div>
  <label className='capitalize font-bold' htmlFor="fullname">fullname</label> <br />
  <input className='bg-[#B6B6B6]' type="text" />
</div>
<div>
  <label className='capitalize font-bold' htmlFor="email">email</label> <br />
  <input className='bg-[#B6B6B6]' type="text" />
</div>
        </form>
    </section>
    
  )
}

export default Form