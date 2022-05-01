import React from 'react'

const ProfSer = () => {
	const minorText: string[] = [ 'affordable', 'gurantee', 'quick', 'easy' ];

  return (
    <div>
      <p>Nearby is designed to connect you to the best professional service providers wherever you are and whenever you need them.</p>
      <p>Quicker and Easier than you can ever imagine</p>
      <ul className={`${styles.connectList} mt-5 flex justify-between `}>
						{minorText.map((item, index) => (
							<li key={index} className="flex items-center capitalize mr-2">
								{item} <img src={checked} className="w-[18px] ml-2" alt="checked" />
							</li>
						))}
					</ul>
    </div>
  )
}

export default ProfSer