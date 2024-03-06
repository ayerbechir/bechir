
import React from 'react'
import Image from 'next/image'
import style from './scontactstyle.css'
import Link from 'next/link'
const contact = () => {
  return (
    <div>
      <div className='divcontact'>
        <div className='tem1'>
        <Image  className='boticon' src="/communication.png" width={400} height={300}/>
        </div>
      <div className='tem2'>
        <form className='isform'>
          <div className='divform'><label className='lab'>Your email <br/></label><input className='int' type="text" /></div>
          <div className='divform'><label className='lab'>Purpose </label><br/><input className='int' type="text" /></div>
          <div className='divform'><label className='lab'>Company name</label><br/><input className='int' type="text" /></div>
          <div className='divform'><label className='lab'>Country/Region</label><br/><input className='int' type="text" /></div>
          <div className='divform'><label className='lab'>Message</label><br/><textarea className='int2' cols="50" rows="5"></textarea></div>
        </form>
        <Link className='doom' href="./">Next</Link>
      </div>
      </div>
    </div>
  )
}


export default contact