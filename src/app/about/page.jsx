import React from 'react'
import style from './about.css'
const about = () => {
  return (
    <div>
      <div className='divabout'>
        <div className='side11'>
          <center><h2 className='meboot'>Who I Am ?</h2></center>
          <p className='pboot'>My name is GM-GPT and im a knowlege bot i can help you In solving some of your mathematical or physics problems also i can chat with you about anything .</p>
          <p className='p1boot'>This is what AI contributed to help the human race</p>
          <div className='cont'>
            <video controls  autoPlay className='vid'>
                <source src='./3.mp4' type='video/mp4'/>
            </video>
            <video controls   className='vid'>
                <source src='./4.mp4' type='video/mp4'/>
            </video>
            <video controls   className='vid'>
                <source src='./5.mp4' type='video/mp4'/>
            </video>
            <video controls   className='vid'>
                <source src='./2.mp4' type='video/mp4'/>
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about