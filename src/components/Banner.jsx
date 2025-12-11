import React from 'react'

function Banner() {
  return (
    <div className=' md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage: `url(https://4kwallpapers.com/images/wallpapers/back-to-the-future-3440x1440-15701.jpg)`}}>
        <div className='text-white text-xl text-center w-full bg-gray-900/60 p-4'>Back to the future</div>
    </div>
  )
}

export default Banner